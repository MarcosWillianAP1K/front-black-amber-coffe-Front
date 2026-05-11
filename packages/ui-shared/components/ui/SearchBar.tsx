

import { Search } from "lucide-react";



export interface SearchBarProps {
    placeholder: string;
    value?: string;
    onChange: (value: string) => void;
}

export function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
    return (
        <div className="w-80 h-fit flex px-2 items-center justify-center bg-(--Select-background)">
            <Search className="w-5 h-5 text-(--Primary)" />
            <input
                type="text"
                className="w-full h-fit px-4 py-2 rounded-md text-(--Text-gray)"
                placeholder={placeholder}
                defaultValue={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}