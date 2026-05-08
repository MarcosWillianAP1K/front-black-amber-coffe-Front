/**
 * TableMenu — Main orchestrator component for the menu management table.
 *
 * Renders a table of menu items with edit/delete actions and an "Add Product" button.
 * When editing or adding, a side panel (MenuItemFormPanel) slides in from the right.
 *
 * All data operations are delegated via callbacks, making this
 * component ready for API/database integration.
 */

import { useState, useCallback } from "react";
import { Plus } from "lucide-react";
import type { MenuItem, MenuItemFormData } from "shared-utils/types/menu";
import { TableMenuHeader } from "./TableMenuHeader";
import { TableMenuRow } from "./TableMenuRow";
import { MenuItemFormPanel } from "./MenuItemFormPanel";

/** Callbacks contract — ready for API integration */
export interface MenuItemHandlers {
    onEdit: (id: string, data: MenuItemFormData) => void | Promise<void>;
    onDelete: (id: string) => void | Promise<void>;
    onCreate: (data: MenuItemFormData) => void | Promise<void>;
}

interface TableMenuProps {
    /** List of menu items to display */
    items: MenuItem[];
    /** Handlers for CRUD operations */
    handlers: MenuItemHandlers;
    /** Table title */
    title?: string;
    /** Whether to show the live indicator */
    isLive?: boolean;
    /** Optional category list override */
    categories?: readonly string[];
}

type PanelState =
    | { mode: "closed" }
    | { mode: "edit"; item: MenuItem }
    | { mode: "create" };

export function TableMenu({
    items,
    handlers,
    title = "ACTIVE MENU",
    isLive = true,
    categories,
}: TableMenuProps) {
    const [panelState, setPanelState] = useState<PanelState>({ mode: "closed" });

    const handleEditClick = useCallback((item: MenuItem) => {
        setPanelState({ mode: "edit", item });
    }, []);

    const handleDeleteClick = useCallback(
        (id: string) => {
            handlers.onDelete(id);
            // Close panel if we're editing the deleted item
            setPanelState((prev) =>
                prev.mode === "edit" && prev.item.id === id
                    ? { mode: "closed" }
                    : prev
            );
        },
        [handlers]
    );

    const handleAddClick = useCallback(() => {
        setPanelState({ mode: "create" });
    }, []);

    const handlePanelCancel = useCallback(() => {
        setPanelState({ mode: "closed" });
    }, []);

    const handlePanelSave = useCallback(
        (data: MenuItemFormData) => {
            if (panelState.mode === "edit") {
                handlers.onEdit(panelState.item.id, data);
            } else if (panelState.mode === "create") {
                handlers.onCreate(data);
            }
            setPanelState({ mode: "closed" });
        },
        [panelState, handlers]
    );

    const isPanelOpen = panelState.mode !== "closed";
    const editingItem = panelState.mode === "edit" ? panelState.item : null;

    return (
        <div className="flex w-full h-fit gap-10">
            {/* Table Section */}
            <div className={`w-full h-[680px] p-4 rounded-md flex flex-col min-w-0 bg-(--Widget-background) transition-all duration-300 ${isPanelOpen ? "mr-0" : ""}`}>
                <TableMenuHeader title={title} isLive={isLive} />

                {/* Table */}
                <div className="flex-1 overflow-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-(--Border)">
                                <th className="text-left py-3 pr-4 text-(--Text-primary-off) text-[10px] font-secondary font-bold tracking-wider uppercase">
                                    Item
                                </th>
                                <th className="text-left py-3 px-4 text-(--Text-primary-off) text-[10px] font-secondary font-bold tracking-wider uppercase">
                                    Category
                                </th>
                                <th className="text-left py-3 px-4 text-(--Text-primary-off) text-[10px] font-secondary font-bold tracking-wider uppercase">
                                    Price
                                </th>
                                <th className="text-left py-3 pl-4 text-(--Text-primary-off) text-[10px] font-secondary font-bold tracking-wider uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <TableMenuRow
                                    key={item.id}
                                    item={item}
                                    isSelected={
                                        panelState.mode === "edit" &&
                                        panelState.item.id === item.id
                                    }
                                    onEdit={handleEditClick}
                                    onDelete={handleDeleteClick}
                                />
                            ))}
                        </tbody>
                    </table>

                    {/* Empty State */}
                    {items.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16 gap-3">
                            <p className="text-(--Text-primary-off) text-sm font-secondary">
                                No menu items yet
                            </p>
                            <p className="text-(--Text-primary-off)/50 text-xs font-secondary">
                                Click "Add Product" to get started
                            </p>
                        </div>
                    )}
                </div>

                {/* Add Product Button */}
                <div className="flex justify-center py-6">
                    <button
                        onClick={handleAddClick}
                        className="flex items-center gap-2 px-5 py-2.5 bg-(--Widget-background) border border-(--Border) rounded-md text-(--Text-gray) text-sm font-secondary font-semibold hover:border-(--Primary) hover:text-(--Primary) transition-all duration-200 cursor-pointer"
                    >
                        <Plus size={16} />
                        Add Product
                    </button>
                </div>
            </div>

            {/* Side Panel */}
            {isPanelOpen && (
                <MenuItemFormPanel
                    key={editingItem?.id ?? "__new__"}
                    editingItem={editingItem}
                    onSave={handlePanelSave}
                    onCancel={handlePanelCancel}
                    categories={categories}
                />
            )}
        </div>
    );
}
