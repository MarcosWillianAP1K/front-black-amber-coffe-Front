/**
 * CardOrder — Displays a single order card with customer info, items, observations, and actions.
 */

import type { Order } from "shared-utils/types/order";
import { formatPrice } from "shared-utils/helpers/currency";
import { StatusBadge } from "ui-shared/components/ui/StatusBadge";
import type { StatusColorMap } from "ui-shared/components/ui/StatusBadge";
import { ButtonOrder } from "./ButtonOrder";

/** Color map for order statuses — used with the generic StatusBadge */
const ORDER_STATUS_COLORS: StatusColorMap = {
    "Created": { bg: "bg-(--Select-background)", text: "text-(--Text-primary-off)" },
    "In Progress": { bg: "bg-(--Primary-20)/20", text: "text-(--Primary)" },
    "Ready": { bg: "bg-[#04DCFF]", text: "text-[#003640]" },
    "Late": { bg: "bg-(--Negacion)", text: "text-(--Text-gray)" },
    "Canceled": { bg: "bg-(--Negacion)", text: "text-(--Text-gray)" },
};

interface CardOrderProps {
    order: Order;
    onAction?: (orderId: string, action: string) => void;
}

export function CardOrder({ order, onAction }: CardOrderProps) {
    const handleAction = (action: string) => {
        onAction?.(order.id, action);
    };

    return (
        <div className="w-76 h-fit px-4 py-6 gap-18 items-center bg-(--Widget-background) rounded-sm border border-(--Border2) flex flex-col">

            <div className="w-full flex flex-col gap-4">

                {/* Name/code and status */}
                <div className="flex w-full justify-between">
                    <div className="w-full h-full">
                        <p className="text-(--Text-primary-off) font-secondary text-[10px]">#{order.code}</p>
                        <h1 className="text-(--Primary-off) text-lg font-primary font-bold">{order.customer}</h1>
                    </div>

                    <StatusBadge status={order.status} colorMap={ORDER_STATUS_COLORS} />
                </div>

                {/* List items */}
                <div className="w-full gap-2">
                    {Object.entries(order.items).map(([item, quantity]) => (
                        <div key={item} className="flex justify-between">
                            <p className="text-(--Text-gray) text-[14px]">{item}</p>
                            <p className="text-(--Text-gray) text-[14px]">x{quantity}</p>
                        </div>
                    ))}
                </div>

                {/* Observations */}
                <div className="w-full bg-(--Page-background) rounded-md px-4 py-2 gap-2">
                    <p className="text-(--Text-primary-off) text-xs">Observações:</p>
                    <p className="text-(--Text-gray) text-[12px] text-wrap">{order.observations}</p>
                </div>
            </div>

            {/* Total and button */}
            <div className="w-full flex justify-between items-center">
                <p className="text-(--Primary) text-[16px] font-bold w-full">
                    {formatPrice(order.total)}
                </p>
                <ButtonOrder status={order.status} onAction={handleAction} />
            </div>
        </div>
    );
}
