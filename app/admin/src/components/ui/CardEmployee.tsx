/**
 * CardUser — Admin-specific client card.
 * Combines PerfilCard (avatar + name + email) with InfosUser (orders, saved, score).
 * Uses OptionsEllipsis for the dropdown menu with dynamic actions.
 */

import { PerfilCard } from "ui-shared/components/ui/PerfilCard";
import { CompTime } from "ui-shared/components/CompTIme";
import { OptionsEllipsis } from "ui-shared/components/OptionElipisses";
import type { Employee } from "shared-utils/types/employee";

/** CardUser props = User data + action callbacks */
export interface CardEmployeeProps extends Employee {
    onDeleteEmployee: (id: string) => void;
    onBlockEmployee: (id: string) => void;
    onViewEmployee: (id: string) => void;
}

export function CardEmployee({ id, name, email, avatarUrl, job, timeSlot, active, onDeleteEmployee, onBlockEmployee, onViewEmployee }: CardEmployeeProps) {
    return (
        <div className="w-90 h-fit p-4 bg-(--Widget-background) rounded-md border border-(--Border) flex flex-col gap-6">

            {/* Top: Profile + Options dropdown */}
            <div className="flex items-start justify-between">
                <PerfilCard
                    name={name}
                    email={email}
                    job={job}
                    avatarUrl={avatarUrl}
                />

                

                <OptionsEllipsis
                    options={[
                        { label: "View Profile", action: () => onViewEmployee(id) },
                        { label: "Block User", action: () => onBlockEmployee(id) },
                        { label: "Delete", action: () => onDeleteEmployee(id), danger: true },
                    ]}
                />
                
            </div>
            

            <div className="w-full h-fit">

                <CompTime bankHours={timeSlot?.bankHours || ""} start={timeSlot?.start || ""} lunch={timeSlot?.lunch || ""} end={timeSlot?.end || ""} active={active} />
            </div>
        </div>
    );
}