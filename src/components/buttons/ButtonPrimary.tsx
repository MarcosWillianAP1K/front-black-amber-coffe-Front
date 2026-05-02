


export function ButtonPrimary({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <button className="w-fit h-fit px-4 py-2 bg-(--Primary) hover:bg-(--Primary-selected) text-(--Text-dark) font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors"
            onClick={onClick}
        >
            {children}
        </button>
    );
}