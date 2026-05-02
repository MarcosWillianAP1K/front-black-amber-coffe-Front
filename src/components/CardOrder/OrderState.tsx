



export function OrderState({ status = "Nothing" }: { status: string }) {

    if (status === "Created") {
        return (
            <div className="w-fit h-6 p-3 whitespace-nowrap bg-(--Select-background) rounded-full flex items-center justify-center">

                <p className="text-(--Text-primary-off) text-[12px] font-black">Created</p>

            </div>
        );
    }
    else if (status === "In Progress") {

        return (
            <div className="w-fit h-6 p-3 whitespace-nowrap bg-(--Primary-20)/20 rounded-full flex items-center justify-center">
                <p className="text-(--Primary) text-[12px] font-black ">In Progress</p>
            </div>

        );
    }
    else if (status === "Ready") {
        return (
            <div className="w-fit h-6 p-3 whitespace-nowrap bg-[#04DCFF] rounded-full flex items-center justify-center">
                <p className="text-[#003640] text-[12px] font-black">Ready</p>
            </div>
        );
    }
    else if (status === "Late") {
        return (
            <div className="w-fit h-6 p-3 whitespace-nowrap bg-(--Negacion) rounded-full flex items-center justify-center">
                <p className="text-(--Text-gray) text-[12px] font-black">Late</p>
            </div>
        );
    }

    else if (status === "Canceled") {
        return (
            <div className="w-fit h-6 p-3 whitespace-nowrap bg-(--Negacion) rounded-full flex items-center justify-center">
                <p className="text-(--Text-gray) text-[12px] font-black">Canceled</p>
            </div>
        );
    }

    return (
        <div className="w-fit h-6 p-3 whitespace-nowrap bg-(--Select-background) rounded-full flex items-center justify-center">
            <p className="text-(--Text-primary-off) text-[12px] font-black">{status}</p>
        </div>
    );

}