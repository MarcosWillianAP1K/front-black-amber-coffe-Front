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