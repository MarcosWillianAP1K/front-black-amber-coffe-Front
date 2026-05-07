/**
 * Order Service — Data access layer for orders.
 *
 * Currently uses in-memory mock data.
 * Replace the implementations with real API calls when backend is ready.
 *
 * Each function is async to match the real API contract from day one.
 */

import type { Order, OrderStatus } from "shared-utils/types/order";

// ──────────────────────────────────────────────
// Mock data — will be removed when API is ready
// ──────────────────────────────────────────────
const MOCK_ORDERS: Order[] = [
    {
        id: "1",
        customer: "John Doe",
        code: "ORD-1234",
        items: { "Coffee": 1, "Croissant": 2 },
        observations: "No sugar in the coffee",
        status: "In Progress",
        total: 15.99,
    },
    {
        id: "2",
        customer: "Jane Smith",
        code: "ORD-5678",
        items: { "Latte": 1, "Muffin": 1 },
        observations: "Extra hot latte",
        status: "Created",
        total: 12.50,
    },
    {
        id: "3",
        customer: "Bob Johnson",
        code: "ORD-9012",
        items: { "Espresso": 1, "Bagel": 1 },
        observations: "No cream in the espresso",
        status: "Ready",
        total: 10.75,
    },
    {
        id: "4",
        customer: "Alice Williams",
        code: "ORD-3456",
        items: { "Cappuccino": 2, "Scone": 1 },
        observations: "Add cinnamon to the cappuccino",
        status: "Late",
        total: 14.20,
    },
    {
        id: "5",
        customer: "Charlie Brown",
        code: "ORD-7890",
        items: { "Americano": 1, "Donut": 2 },
        observations: "No cream in the americano",
        status: "Canceled",
        total: 11.50,
    },
    {
        id: "6",
        customer: "Emma Davis",
        code: "ORD-1122",
        items: { "Mocha": 1, "Brownie": 1 },
        observations: "Serve without whipped cream",
        status: "Created",
        total: 13.40,
    },
    {
        id: "7",
        customer: "Liam Wilson",
        code: "ORD-3344",
        items: { "Flat White": 2, "Cookie": 3 },
        observations: "Cookies on the side",
        status: "In Progress",
        total: 18.90,
    },
    {
        id: "8",
        customer: "Olivia Martin",
        code: "ORD-5566",
        items: { "Macchiato": 1, "Pie": 1 },
        observations: "Heat the pie before serving",
        status: "Ready",
        total: 16.25,
    },
    {
        id: "9",
        customer: "Noah Garcia",
        code: "ORD-7788",
        items: { "Iced Coffee": 2, "Sandwich": 1 },
        observations: "No ice in one of the coffees",
        status: "Late",
        total: 19.80,
    },
    {
        id: "10",
        customer: "Sophia Lee",
        code: "ORD-9900",
        items: { "Tea": 1, "Scone": 2 },
        observations: "Jam on the side",
        status: "Created",
        total: 12.10,
    },
];

// In-memory store (simulates server state)
let orders = [...MOCK_ORDERS];

// ──────────────────────────────────────────────
// Service functions
// ──────────────────────────────────────────────

/** Fetch all orders */
export async function fetchOrders(): Promise<Order[]> {
    // TODO: return await fetch("/api/orders").then(res => res.json());
    return [...orders];
}

/** Update the status of an order */
export async function updateOrderStatus(id: string, newStatus: OrderStatus): Promise<Order> {
    // TODO: return await fetch(`/api/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status: newStatus }) }).then(res => res.json());
    const order = orders.find((o) => o.id === id);
    if (!order) throw new Error(`Order ${id} not found`);

    const updated = { ...order, status: newStatus };
    orders = orders.map((o) => (o.id === id ? updated : o));
    return updated;
}

/** Delete an order */
export async function deleteOrder(id: string): Promise<void> {
    // TODO: await fetch(`/api/orders/${id}`, { method: "DELETE" });
    orders = orders.filter((o) => o.id !== id);
}
