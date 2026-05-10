/**
 * ButtonOrder — Action buttons for order cards, varying by order status.
 */

import type { OrderStatus } from "shared-utils/types/order";

interface ButtonOrderProps {
    status: OrderStatus;
    onAction?: (action: string) => void;
}

const BUTTON_BASE = "w-fit h-6 px-4 py-2 whitespace-nowrap rounded-xs flex items-center justify-center";

export function ButtonOrder({ status, onAction }: ButtonOrderProps) {
    const handleClick = (action: string) => () => onAction?.(action);

    switch (status) {
        case "Created":
            return (
                <button className={`${BUTTON_BASE} bg-(--Button-background)`} onClick={handleClick("start")}>
                    <p className="text-(--Text-gray) text-[12px] font-secondary font-bold">START</p>
                </button>
            );

        case "In Progress":
            return (
                <div className="w-fit h-fit flex gap-2">
                    <button className={`${BUTTON_BASE} bg-(--Button-background)`} onClick={handleClick("hold")}>
                        <p className="text-(--Text-gray) text-[12px] font-secondary font-bold">HOLD</p>
                    </button>
                    <button className={`${BUTTON_BASE} bg-(--Primary)`} onClick={handleClick("ready")}>
                        <p className="text-(--Text-dark) text-[12px] font-secondary font-bold">READY</p>
                    </button>
                </div>
            );

        case "Ready":
            return (
                <button className={`${BUTTON_BASE} bg-[#04DCFF]`} onClick={handleClick("complete")}>
                    <p className="text-[#003640] text-[12px] font-secondary font-bold">COMPLETE</p>
                </button>
            );

        case "Late":
            return (
                <button className={`${BUTTON_BASE} bg-(--Negacion-off)`} onClick={handleClick("complete")}>
                    <p className="text-(--Text-gray) text-[12px] font-secondary font-bold">COMPLETE</p>
                </button>
            );

        case "Canceled":
            return (
                <button className={`${BUTTON_BASE} bg-(--Negacion-off)`} onClick={handleClick("delete")}>
                    <p className="text-(--Text-gray) text-[12px] font-secondary font-bold">DELETE</p>
                </button>
            );

        default:
            return (
                <button className={`${BUTTON_BASE} bg-(--Negacion-off)`} onClick={handleClick("delete")}>
                    <p className="text-(--Text-gray) text-[12px] font-secondary font-bold">DELETE</p>
                </button>
            );
    }
}
