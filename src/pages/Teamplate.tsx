import NavBarTop  from "../layout/NavBarTop";
import { NavBarLeft } from "../layout/NavBarLeft";


function Teamplate() {
    return (
        <div className="w-full h-full bg-(--Page-background) ">
            <NavBarTop />

            <div className="flex">
                <NavBarLeft />
                <div className="w-full p-4 scroll-auto">
                    {/* Page content */}
                    <h1 className="text-white">Page content</h1>
                </div>
            </div>

            
        </div>
    );
}

export default Teamplate;