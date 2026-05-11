import { CardEmployee } from "./ui/CardEmployee";
import { SearchBar } from "ui-shared/components/ui/SearchBar";
import type { Employee } from "shared-utils/types/employee";


export interface SectionEmployeeProps {
    employees: Employee[];
    title: string;
    onDeleteEmployee: (id: string) => void;
    onBlockEmployee: (id: string) => void;
    onViewEmployee: (id: string) => void;
}

export function SectionEmployee({ employees, title, onDeleteEmployee, onBlockEmployee, onViewEmployee }: SectionEmployeeProps) {
    return (
        <div className="w-full h-140 flex flex-col px-4 py-2 gap-4 bg-(--Widget-background) rounded-md">

            {/* header */}
            <div className="w-full flex flex-row justify-between items-center pb-2 border-b border-(--Border)">

                {/* Title */}
                <h1 className="w-full h-fit text-(--Primary-off) text-[24px] font-primary font-bold">
                    {title}
                </h1>

                <SearchBar placeholder="Search" onChange={(value) => console.log(value)} />

            </div>

            {/* content */}
            <div className="w-full h-full flex flex-wrap justify-center gap-6 overflow-y-auto">
                {employees.map((employee) => (
                    <CardEmployee
                        key={employee.id}
                        {...employee}
                        onDeleteEmployee={onDeleteEmployee}
                        onBlockEmployee={onBlockEmployee}
                        onViewEmployee={onViewEmployee}
                    />
                ))}
            </div>

        </div>
    );
}