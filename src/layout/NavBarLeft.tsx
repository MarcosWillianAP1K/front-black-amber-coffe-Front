import { useState } from "react";

import {
    LayoutDashboard,
    Menu,
    Activity,
    Archive,
    BarChart2,
    Users,
    HelpCircle,
    LogOut
} from "lucide-react";


import { NavItem } from "../components/buttons/NavItem";
import { PerfilNav } from "../components/PerfilNav";



export function NavBarLeft() {
    // Estado provisório para controlar qual menu está ativo
    const [activeItem, setActiveItem] = useState("Live Orders");

    // Lista dos menus principais para não precisarmos repetir código
    const mainLinks = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "Menu", icon: Menu },
        { label: "Live Orders", icon: Activity },
        { label: "Inventory", icon: Archive },
        { label: "Analytics", icon: BarChart2 },
        { label: "Staff", icon: Users },
    ];

    return (
        <aside className="w-69 h-screen bg-(--Widget-background) flex flex-col py-6 gap-6">

            
            {/* SEÇÃO 1: Perfil do Usuário */}
            <PerfilNav />


            {/* SEÇÃO 2: Navegação Principal */}
            <nav className="flex-1">
                {mainLinks.map((link) => (
                    <NavItem
                        key={link.label}
                        icon={link.icon}
                        label={link.label}
                        isActive={activeItem === link.label}
                        onClick={() => setActiveItem(link.label)}
                    />
                ))}
            </nav>


            {/* SEÇÃO 3: Rodapé (Suporte e Logout) */}
            <div className="mt-auto">
                <NavItem
                    icon={HelpCircle}
                    label="Support"
                    onClick={() => console.log("Abrir suporte")}
                />
                <NavItem
                    icon={LogOut}
                    label="Logout"
                    onClick={() => console.log("Fazer logout")}
                />
            </div>

        </aside>
    );
}