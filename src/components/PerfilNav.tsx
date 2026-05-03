import { ButtonPrimary } from "./buttons/ButtonPrimary";


export function PerfilNav() {
    return (
        <div className="px-6 items-center">
            <div className="flex items-center gap-3 mb-6">
                <img
                    src="https://github.com/MarcosWillian.png" // Puxando sua foto do Github de exemplo
                    alt="User"
                    className="w-10 h-10 rounded-sm bg-zinc-800"
                />

                <div className="flex flex-col">
                    <h2 className="text-(--Primary) font-primary font-bold text-lg leading-tight">The Obsidian</h2>
                    <span className="text-[10px] text-(--Text-gray) font-secondary tracking-wider">MANAGEMENT PORTAL</span>
                </div>
            </div>


            <ButtonPrimary onClick={() => console.log("Criar nova entrada")}>
                <span>+</span> New Entry
            </ButtonPrimary>
        </div>
    );

}