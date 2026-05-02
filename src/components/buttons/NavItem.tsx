import type { ElementType } from "react";

interface NavItemProps {
    icon: ElementType; // Recebe o ícone do Lucide
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export function NavItem({ icon: Icon, label, isActive = false, onClick }: NavItemProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 px-6 py-3 text-sm font-medium transition-colors border-r-4 /* Prepara a borda direita para o estado ativo */
        ${isActive
                    ? "bg-(--Button-background) text-(--Primary) border-(--Primary)" // Cores quando selecionado
                    : "text-(--Text-primary-off) border-transparent hover:bg-(--Button-background) hover:text-(--Text-gray)" // Cores normais
                }
      `}
        >
            <Icon size={20} />
            <span>{label}</span>
        </button>
    );
}