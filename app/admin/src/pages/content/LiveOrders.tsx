import { DestakTitle } from "ui-shared/components/ui/DestakTitle";
import { CardOrder } from "ui-shared/components/cardOrder/CardOrder";
import { ButtonPrimary } from "ui-shared/components/ui/ButtonPrimary";


export function LiveOrders() {

    const orders: { id: number; customer: string; code: string; items: Record<string, number>; observations: string; status: string; total: number }[] = [
        {
            id: 1,
            customer: "John Doe",
            code: "ORD-1234",
            items: { "Coffee": 1, "Croissant": 2 },
            observations: "No sugar in the coffee",
            status: "In Progress",
            total: 15.99
        },
        {
            id: 2,
            customer: "Jane Smith",
            code: "ORD-5678",
            items: { "Latte": 1, "Muffin": 1 },
            observations: "Extra hot latte",
            status: "Created",
            total: 12.50
        },
        {
            id: 3,
            customer: "Bob Johnson",
            code: "ORD-9012",
            items: { "Espresso": 1, "Bagel": 1 },
            observations: "No cream in the espresso",
            status: "Ready",
            total: 10.75
        },
        {
            id: 4,
            customer: "Alice Williams",
            code: "ORD-3456",
            items: { "Cappuccino": 2, "Scone": 1 },
            observations: "Add cinnamon to the cappuccino",
            status: "Late",
            total: 14.20
        },
        {
            id: 5,
            customer: "Charlie Brown",
            code: "ORD-7890",
            items: { "Americano": 1, "Donut": 2 },
            observations: "No cream in the americano",
            status: "Canceled",
            total: 11.50
        }
    ];

    return (

        <div className="w-full h-fit gap-6 flex flex-col">

        <DestakTitle title="Orders Queue" subtitle="Manage your live orders" />

            <ButtonPrimary>
                <span>+</span>

                <p className="text-(--Text-dark) text-[14px] font-primary font-bold">Register New Order</p>

            </ButtonPrimary>

            {/* Cards */}
            <div className="w-full h-fit px-8 flex gap-6 flex-wrap justify-start">
                {orders.map(order => (
                    <CardOrder
                        customer={order.customer}
                        code={order.code}
                        items={order.items}
                        observations={order.observations}
                        status={order.status}
                        total={order.total}
                        key={order.id}
                    />
                ))}
            </div>
        </div>
    );
}

