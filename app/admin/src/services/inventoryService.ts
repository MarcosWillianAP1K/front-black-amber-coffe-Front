/**
 * Inventory Service — Data access layer for inventory items.
 *
 * Currently uses in-memory mock data.
 * Replace with real API calls when backend is ready.
 */

import type { InventoryItem, InventoryAddStockData, InventoryEditData } from "shared-utils/types/inventory";
import { deriveStockStatus } from "shared-utils/types/inventory";

// ──────────────────────────────────────────────
// Mock data — will be removed when API is ready
// ──────────────────────────────────────────────
let nextId = 8;

const MOCK_ITEMS: InventoryItem[] = [
    { id: "1", name: "Arabica Coffee Beans", code: "COF-001", amount: 45, unit: "kg", status: "In Stock" },
    { id: "2", name: "Whole Milk", code: "MLK-001", amount: 8, unit: "L", status: "Low Stock" },
    { id: "3", name: "Oat Milk", code: "MLK-002", amount: 12, unit: "L", status: "In Stock" },
    { id: "4", name: "Vanilla Syrup", code: "SYR-001", amount: 3, unit: "L", status: "Low Stock" },
    { id: "5", name: "Paper Cups (Medium)", code: "CUP-001", amount: 250, unit: "un", status: "In Stock" },
    { id: "6", name: "Croissant (Frozen)", code: "PST-001", amount: 0, unit: "un", status: "Out of Stock" },
    { id: "7", name: "Chocolate Powder", code: "CHO-001", amount: 5, unit: "kg", status: "Low Stock" },
];

let items = [...MOCK_ITEMS];

// ──────────────────────────────────────────────
// Service functions
// ──────────────────────────────────────────────

/** Fetch all inventory items */
export async function fetchInventoryItems(): Promise<InventoryItem[]> {
    // TODO: return await fetch("/api/inventory").then(res => res.json());
    return [...items];
}

/**
 * Add stock — if the code matches an existing product, increment its amount.
 * Otherwise, create a new inventory entry.
 */
export async function addStock(data: InventoryAddStockData): Promise<InventoryItem> {
    // TODO: return await fetch("/api/inventory/add-stock", { method: "POST", body: JSON.stringify(data) }).then(res => res.json());
    const existing = items.find((item) => item.code === data.code);

    if (existing) {
        const newAmount = existing.amount + data.amount;
        const updated: InventoryItem = {
            ...existing,
            name: data.name,
            amount: newAmount,
            unit: data.unit,
            status: deriveStockStatus(newAmount),
        };
        items = items.map((item) => (item.id === existing.id ? updated : item));
        return updated;
    }

    const newItem: InventoryItem = {
        id: String(nextId++),
        name: data.name,
        code: data.code,
        amount: data.amount,
        unit: data.unit,
        status: deriveStockStatus(data.amount),
    };
    items = [...items, newItem];
    return newItem;
}

/** Update an existing inventory item */
export async function updateInventoryItem(id: string, data: InventoryEditData): Promise<InventoryItem> {
    // TODO: return await fetch(`/api/inventory/${id}`, { method: "PUT", body: JSON.stringify(data) }).then(res => res.json());
    const updated: InventoryItem = {
        id,
        name: data.name,
        code: data.code,
        amount: data.amount,
        unit: data.unit,
        status: deriveStockStatus(data.amount),
    };
    items = items.map((item) => (item.id === id ? updated : item));
    return updated;
}

/** Delete an inventory item by ID */
export async function deleteInventoryItem(id: string): Promise<void> {
    // TODO: await fetch(`/api/inventory/${id}`, { method: "DELETE" });
    items = items.filter((item) => item.id !== id);
}
