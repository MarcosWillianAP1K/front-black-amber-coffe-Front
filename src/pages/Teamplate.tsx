import NavBarTop  from "../layout/NavBarTop";
import NavBarLeft from "../layout/NavBarLeft";


function Teamplate() {
    return (
        <div>
            <NavBarTop />

            <div className="flex">
                <NavBarLeft />
                <div className="p-4 scroll-auto">
                    {/* Page content */}
                    <h1>Page content</h1>
                </div>
            </div>

            
        </div>
    );
}

export default Teamplate;