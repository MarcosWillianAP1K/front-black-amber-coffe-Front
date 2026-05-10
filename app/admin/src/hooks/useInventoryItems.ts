/**
 * useInventoryItems — Custom hook encapsulating inventory state and CRUD operations.
 *
 * Provides items list and handlers ready to plug into the TableInventory component.
 * Uses inventoryService internally — when API is ready, only the service changes.
 */

import { useState, useCallback, useEffect } from "react";
import type { InventoryItem, InventoryAddStockData, InventoryEditData } from "shared-utils/types/inventory";
import type { InventoryItemHandlers } from "../components/tableInventory/TableInventory";
import * as inventoryService from "../services/inventoryService";

interface UseInventoryItemsReturn {
    items: InventoryItem[];
    isLoading: boolean;
    handlers: InventoryItemHandlers;
}

export function useInventoryItems(): UseInventoryItemsReturn {
    const [items, setItems] = useState<InventoryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initial fetch
    useEffect(() => {
        let cancelled = false;

        inventoryService.fetchInventoryItems().then((data) => {
            if (!cancelled) {
                setItems(data);
                setIsLoading(false);
            }
        });

        return () => { cancelled = true; };
    }, []);

    const handleEdit = useCallback(async (id: string, data: InventoryEditData) => {
        const updated = await inventoryService.updateInventoryItem(id, data);
        setItems((prev) => prev.map((item) => (item.id === id ? updated : item)));
    }, []);

    const handleDelete = useCallback(async (id: string) => {
        await inventoryService.deleteInventoryItem(id);
        setItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const handleAddStock = useCallback(async (data: InventoryAddStockData) => {
        const result = await inventoryService.addStock(data);
        setItems((prev) => {
            // Check if item already existed (was updated) or is new
            const exists = prev.some((item) => item.id === result.id);
            if (exists) {
                return prev.map((item) => (item.id === result.id ? result : item));
            }
            return [...prev, result];
        });
    }, []);

    return {
        items,
        isLoading,
        handlers: {
            onEdit: handleEdit,
            onDelete: handleDelete,
            onAddStock: handleAddStock,
        },
    };
}
