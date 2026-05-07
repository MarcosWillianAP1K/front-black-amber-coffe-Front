/**
 * useMenuItems — Custom hook encapsulating menu item state and CRUD operations.
 *
 * Provides the items list and handlers ready to plug into the TableMenu component.
 * Uses menuService internally — when the backend is ready, only the service changes.
 */

import { useState, useCallback, useEffect } from "react";
import type { MenuItem, MenuItemFormData } from "shared-utils/types/menu";
import type { MenuItemHandlers } from "../components/menu/TableMenu";
import * as menuService from "../services/menuService";

interface UseMenuItemsReturn {
    items: MenuItem[];
    isLoading: boolean;
    handlers: MenuItemHandlers;
}

export function useMenuItems(): UseMenuItemsReturn {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initial fetch
    useEffect(() => {
        let cancelled = false;

        menuService.fetchMenuItems().then((data) => {
            if (!cancelled) {
                setItems(data);
                setIsLoading(false);
            }
        });

        return () => { cancelled = true; };
    }, []);

    const handleEdit = useCallback(async (id: string, data: MenuItemFormData) => {
        const updated = await menuService.updateMenuItem(id, data);
        setItems((prev) => prev.map((item) => (item.id === id ? updated : item)));
    }, []);

    const handleDelete = useCallback(async (id: string) => {
        await menuService.deleteMenuItem(id);
        setItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const handleCreate = useCallback(async (data: MenuItemFormData) => {
        const newItem = await menuService.createMenuItem(data);
        setItems((prev) => [...prev, newItem]);
    }, []);

    return {
        items,
        isLoading,
        handlers: {
            onEdit: handleEdit,
            onDelete: handleDelete,
            onCreate: handleCreate,
        },
    };
}
