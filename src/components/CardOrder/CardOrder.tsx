import { OrderState } from "./OrderState";
import { ButtonOrder } from "./ButtonOrder";


interface CardOrderProps {
    customer: string;
    code: string;
    items: { [key: string]: number };
    observations: string;
    status: string;
    total: number;
}

export function CardOrder({ customer = "", code = "", items = {}, observations = "", status = "Nothing", total = 0.0 }: CardOrderProps) {

    return (
        <div className="w-76 h-fit px-4 py-2 gap-16 items-center bg-(--Widget-background) rounded-sm border  border-(--Border2) flex flex-col">

            <div className="w-full flex flex-col gap-4">

                {/* Name/code Ciente and status */}
                <div className="flex w-full justify-between ">

                    <div className="w-full h-full">
                        <p className="text-(--Text-primary-off) text-[10px]">{code}</p>
                        <h1 className="text-(--Primary-off) text-lg font-bold">{customer}</h1>
                    </div>

                    <OrderState status={status} />
                </div>

                {/* List itens */}
                <div className="w-full gap-2 ">
                    {Object.entries(items).map(([item, quantity]) => (
                        <div key={item} className="flex justify-between ">
                            <p className="text-(--Text-gray) text-[14px]">{item}</p>
                            <p className="text-(--Text-gray) text-[14px]">x{quantity}</p>
                        </div>
                    ))}

                </div>

                {/* Observations */}
                <div className="w-full bg-(--Page-background) rounded-md px-2 py-1   gap-2">
                    <p className="text-(--Text-primary-off) text-xs ">Observações:</p>

                    <p className="text-(--Text-gray) text-[12px] text-wrap">{observations}</p>

                </div>

            </div>




            {/* Total and button */}
            <div className="w-full flex justify-between items-center">
                <p className="text-(--Primary) text-[16px] font-bold w-full">R$ {total.toFixed(2)}</p>

                <ButtonOrder status={status} />
            </div>

        </div>
    );
}
