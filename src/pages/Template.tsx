import { NavBarTop }  from "../layout/NavBarTop";
import { NavBarLeft } from "../layout/NavBarLeft";
import { Outlet } from "react-router-dom"; // Importe o Outlet aqui!

export function Template() { 
    return (
        <div className="w-full h-full bg-(--Page-background)">
            <NavBarTop />

            <div className="flex">
                <NavBarLeft />

                {/* Main Content */}
                <div className="w-full px-6 py-4 scroll-auto">
                    {/* O Outlet é a janela onde as telas vão aparecer! */}
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
}

