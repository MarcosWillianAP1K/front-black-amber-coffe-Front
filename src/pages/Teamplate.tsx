import {NavBarTop}  from "../layout/NavBarTop";
import { NavBarLeft } from "../layout/NavBarLeft";


import { LiveOrders } from "./content/LiveOrders";

export function Teamplate() {
    return (
        <div className="w-full h-full bg-(--Page-background) ">
            <NavBarTop />

            <div className="flex">
                <NavBarLeft />

                {/* Main Content */}
                <div className="w-full px-6 py-4 scroll-auto">
                    <LiveOrders />
                </div>
            </div>

            
        </div>
    );
}

export default Teamplate;