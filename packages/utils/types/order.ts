/**
 * Order domain types — shared between admin and client apps.
 */

/** Possible order statuses */
export const ORDER_STATUSES = [
    "Created",
    "In Progress",
    "Ready",
    "Late",
    "Canceled",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

/** Represents a single customer order */
export interface Order {
    id: string;
    customer: string;
    code: string;
    items: Record<string, number>;
    observations: string;
    status: OrderStatus;
    total: number;
}
