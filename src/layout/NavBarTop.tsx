import {
    Bell,
    Settings
}
    from "lucide-react";



export function NavBarTop() {
    return (

        <div className="w-full h-14 bg-(--Nav-bar-background) text-white flex items-center justify-between px-6">

            <div>
                <h1 className="text-(--Primary) font-medium text-lg">Black Amber</h1>
            </div>


            <div className="flex items-center gap-6">


                <Bell size={20} className="cursor-pointer text-(--Primary-off) hover:text-(--Primary-selected)" />

                <Settings size={20} className="cursor-pointer text-(--Primary-off) hover:text-(--Primary-selected)" />


                <div className="w-8 h-8 bg-(--White) rounded-full cursor-pointer">
                    <img
                        src="https://github.com/MarcosWillian.png" // Puxando sua foto do Github de exemplo
                        alt="User"
                        className="rounded-full overflow-hidden w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>
    );
}

export default NavBarTop;