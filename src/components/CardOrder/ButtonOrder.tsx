


export function ButtonOrder({ status = "Nothing" }: { status: string }) {

    if (status === "Created") {
        return (
            <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-(--Button-background) rounded-xs  flex items-center justify-center">
                <p className="text-(--Text-gray) text-[12px] font-bold">START</p>

            </button>
        );
    }
    else if (status === "In Progress") {

        return (
            <div className="w-fit h-fit flex gap-2">
                <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-(--Button-background) rounded-xs flex items-center justify-center">
                    <p className="text-(--Text-gray) text-[12px] font-bold">HOLD</p>
                </button>

                <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-(--Primary) rounded-xs flex items-center justify-center">
                    <p className="text-(--Text-dark) text-[12px] font-bold">READY</p>
                </button>
            </div>

        );
    }
    else if (status === "Ready") {
        return (

            <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-[#04DCFF] rounded-xs flex items-center justify-center">
                <p className="text-[#003640] text-[12px] font-bold">COMPLETE</p>
            </button>
        );
    }
    else if (status === "Late") {
        return (
            <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-(--Negacion-off) rounded-xs flex items-center justify-center">
                <p className="text-(--Text-gray) text-[12px] font-bold">COMPLETE</p>
            </button>
        );
    }

    else if (status === "Canceled") {
        return (
            <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-(--Negacion-off) rounded-xs flex items-center justify-center">
                <p className="text-(--Text-gray) text-[12px] font-bold">DELETE</p>
            </button>
        );
    }

    return (
        <button className="w-fit h-6 px-4 py-2 whitespace-nowrap bg-(--Negacion-off) rounded-xs flex items-center justify-center">
            <p className="text-(--Text-gray) text-[12px] font-bold">DELETE</p>
        </button>
    );

}