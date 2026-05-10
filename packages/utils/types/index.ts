/**
 * Barrel export — all shared domain types.
 */
export type { MenuItem, MenuItemFormData, MenuCategory } from "./menu";
export { MENU_CATEGORIES } from "./menu";

export type { Order, OrderStatus } from "./order";
export { ORDER_STATUSES } from "./order";

export type { InventoryItem, InventoryAddStockData, InventoryEditData, InventoryUnit, StockStatus } from "./inventory";
export { INVENTORY_UNITS, UNIT_LABELS, STOCK_STATUSES, deriveStockStatus } from "./inventory";
