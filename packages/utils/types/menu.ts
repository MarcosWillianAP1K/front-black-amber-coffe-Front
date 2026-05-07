/**
 * Menu domain types — shared between admin and client apps.
 */

/** Represents a single product in the coffee menu */
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    imageUrl: string;
}

/** Payload used when creating or editing a menu item */
export interface MenuItemFormData {
    name: string;
    description: string;
    category: string;
    price: number;
    imageUrl: string;
    imageFile?: File | null;
}

/** Available menu categories */
export const MENU_CATEGORIES = [
    "Hot Coffee",
    "Cold Brew",
    "Pastry",
    "Tea",
    "Specialty",
    "Snacks",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];
