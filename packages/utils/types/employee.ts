
/** Available job roles */
export const JOBS = ["barista", "cashier", "manager", "staff", "admin"] as const;
export type Job = (typeof JOBS)[number];

export interface TimeSlot {
    bankHours: string;
    start: string;
    lunch: string;
    end: string;
}

/** Represents a /staff member */
export interface Employee {
    id: string;
    name: string;
    email: string;
    job?: Job;
    active: boolean;
    avatarUrl?: string;
    timeSlot?: TimeSlot;

}

