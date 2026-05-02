


export function ButtonPrimary({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <button className="w-full bg-(--Primary) hover:bg-(--Primary-selected) text-(--Text-dark) font-semibold py-2.5 rounded-sm flex items-center justify-center gap-2 transition-colors"
            onClick={onClick}
        >
            {children}
        </button>
    );
}