/**
 * User domain types — shared between admin and client apps.
 */

/** Available job roles */
export const USER_JOBS = ["barista", "cashier", "manager", "staff"] as const;
export type UserJob = (typeof USER_JOBS)[number];

/** Represents a user/staff member */
export interface User {
    id: string;
    name: string;
    email: string;
    active: boolean;
    avatarUrl?: string;
    orders: number;
    saved: number;
    score: number;
}