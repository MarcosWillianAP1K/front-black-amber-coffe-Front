/**
 * shared-utils — barrel export.
 *
 * Usage:
 *   import { MenuItem, Order, formatPrice } from "shared-utils";
 *   import type { MenuCategory } from "shared-utils/types/menu";
 */

// Types
export * from "./types";

// Helpers
export { formatPrice } from "./helpers/currency";
