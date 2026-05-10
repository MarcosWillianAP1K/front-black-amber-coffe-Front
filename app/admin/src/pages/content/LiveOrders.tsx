import { DestakTitle } from "ui-shared/components/ui/DestakTitle";
import { ButtonPrimary } from "ui-shared/components/ui/ButtonPrimary";
import { CardOrder } from "../../components/cardOrder/CardOrder";
import { useOrders } from "../../hooks/useOrders";


export function LiveOrders() {
    const { orders, handleAction } = useOrders();

    return (
        <div className="w-full h-fit gap-6 flex flex-col">

            <DestakTitle title="Orders Queue" subtitle="Manage your live orders" />

            <ButtonPrimary>
                <span>+</span>
                <p className="text-(--Text-dark) text-[14px] font-primary font-bold">Register New Order</p>
            </ButtonPrimary>

            {/* Cards */}
            <div className="w-fit h-fit px-12 flex gap-6 flex-wrap justify-start">
                {orders.map((order) => (
                    <CardOrder
                        key={order.id}
                        order={order}
                        onAction={handleAction}
                    />
                ))}
            </div>
        </div>
    );
}
