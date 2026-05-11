// Shared UI components
import { DestakTitle } from "ui-shared/components/ui/DestakTitle";
import { CardAnalytics } from "ui-shared/components/CardAnalytics";
import { StatusBadge } from "ui-shared/components/ui/StatusBadge";
import type { StatusColorMap } from "ui-shared/components/ui/StatusBadge";

// Admin components
import { CardOrder } from "../../components/cardOrder/CardOrder";
import { CardEmployee } from "../../components/ui/CardEmployee";
import { TableInventoryHeader } from "../../components/tableInventory/TableInventoryHeader";

// Hooks
import { useAnalytics } from "../../hooks/useAnalytics";
import { useOrders } from "../../hooks/useOrders";
import { useInventoryItems } from "../../hooks/useInventoryItems";
import { useEmployee } from "../../hooks/useEmployee";

// Types and helpers
import { STOCK_STATUSES, UNIT_LABELS } from "shared-utils/types/inventory";

// Icons
import { Coffee, TrendingUp, Truck, Users, Clock, Box } from "lucide-react";

const INVENTORY_STATUS_COLORS: StatusColorMap = {
    "Low Stock": { bg: "bg-[#FDE68A]", text: "text-[#7C2D12]" },
    "Out of Stock": { bg: "bg-(--Negacion)", text: "text-(--Text-gray)" },
};

const ICON_MAP = {
    orders: Coffee,
    sales: TrendingUp,
    deliveries: Truck,
    users: Users,
    hours: Clock,
    stock: Box,
} as const;

export function Dashboard() {
    const { data } = useAnalytics();
    const { orders, handleAction } = useOrders();
    const { items } = useInventoryItems();
    const { employees, deleteEmployee, toggleEmployeeStatus } = useEmployee();

    const priorityOrders = orders
        .filter((order) => order.status === "Late" || order.status === "In Progress")
        .sort((a, b) => {
            if (a.status === b.status) return 0;
            if (a.status === "Late") return -1;
            if (b.status === "Late") return 1;
            return 0;
        });

    const inventoryAlerts = items
        .filter((item) => item.status !== "In Stock")
        .sort(
            (a, b) =>
                STOCK_STATUSES.indexOf(b.status) - STOCK_STATUSES.indexOf(a.status)
        );
    const activeEmployees = employees.filter((employee) => employee.active);

    return (
        <div className="w-full h-fit gap-6 flex flex-col">
            <DestakTitle title="Dashboard" subtitle="Welcome to your dashboard" />

            {/* Analytics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {data?.cards.map((card) => {
                    const Icon = card.iconKey ? ICON_MAP[card.iconKey] : null;
                    return (
                        <CardAnalytics
                            key={card.id}
                            title={card.title}
                            value={card.value}
                            delta={card.delta}
                            deltaLabel={card.deltaLabel}
                            trend={card.trend}
                            icon={
                                Icon ? <Icon className="w-5 h-5 text-(--White)" /> : undefined
                            }
                            iconBgClassName={card.iconBgClassName}
                        />
                    );
                })}
            </div>

            {/* Main content */}
            <div className="flex flex-col 2xl:flex-row gap-6">
                {/* Priority orders */}
                <section className="w-full 2xl:flex-2 h-200 bg-(--Widget-background) rounded-md border border-(--Border) p-5 flex flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--Border) pb-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-(--Primary-off) text-[22px] font-primary font-bold">
                                Priority Orders
                            </h2>
                            <p className="text-(--Text-gray) text-sm">
                                Late and in-progress orders that need attention
                            </p>
                        </div>
                        <StatusBadge
                            status="Priority"
                            colorMap={{ Priority: { bg: "bg-(--Primary-20)/20", text: "text-(--Primary)" } }}
                        >
                            {priorityOrders.length} urgent
                        </StatusBadge>
                    </div>

                    <div className="flex flex-wrap gap-6 flex-1 overflow-y-auto pr-1">
                        {priorityOrders.map((order) => (
                            <div key={order.id} className="w-full sm:w-auto">
                                <CardOrder order={order} onAction={handleAction} />
                            </div>
                        ))}

                        {priorityOrders.length === 0 && (
                            <div className="w-full h-full flex items-center justify-center py-10 text-(--Text-gray)">
                                No priority orders right now
                            </div>
                        )}
                    </div>
                </section>

                {/* Side widgets */}
                <div className="w-full h-100 2xl:flex-1 flex flex-col gap-6">
                    {/* Inventory alerts */}
                    <section className="w-full h-95 bg-(--Widget-background) rounded-md border border-(--Border) p-5 flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-(--Border) pb-3">
                            <div className="flex flex-col gap-1">
                                <TableInventoryHeader title="Inventory Alerts" isLive={false} />
                                <p className="text-(--Text-gray) text-sm">
                                    Low and out of stock items
                                </p>
                            </div>
                            <span className="text-(--Primary) text-sm font-bold">
                                {inventoryAlerts.length} items
                            </span>
                        </div>

                        <div className="h-full flex flex-col gap-3 flex-1 overflow-y-auto pr-1">
                            {inventoryAlerts.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between gap-3 p-3 rounded-md bg-(--Page-background) border border-(--Border2)"
                                >
                                    <div>
                                        <p className="text-(--Primary-off) text-sm font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-(--Text-gray) text-xs">
                                            {item.code} - {item.amount} {UNIT_LABELS[item.unit]}
                                        </p>
                                    </div>
                                    <StatusBadge status={item.status} colorMap={INVENTORY_STATUS_COLORS} />
                                </div>
                            ))}

                            {inventoryAlerts.length === 0 && (
                                <div className="text-(--Text-gray) text-sm py-6 text-center">
                                    All items are well stocked
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Active staff */}
                    <section className="w-full h-95 bg-(--Widget-background) rounded-md border border-(--Border) p-5 flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-(--Border) pb-3">
                            <div>
                                <h2 className="text-(--Primary-off) text-[20px] font-primary font-bold">
                                    Active Staff
                                </h2>
                                <p className="text-(--Text-gray) text-sm">
                                    Team members currently active
                                </p>
                            </div>
                            <span className="text-(--Primary) text-sm font-bold">
                                {activeEmployees.length} active
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center flex-1 overflow-y-auto pr-1">
                            {activeEmployees.map((employee) => (
                                <div key={employee.id} className="w-full sm:w-auto">
                                    <CardEmployee
                                        {...employee}
                                        onDeleteEmployee={deleteEmployee}
                                        onBlockEmployee={toggleEmployeeStatus}
                                        onViewEmployee={(id) => console.log("View employee:", id)}
                                    />
                                </div>
                            ))}

                            {activeEmployees.length === 0 && (
                                <div className="text-(--Text-gray) text-sm py-6 text-center">
                                    No staff members active
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}