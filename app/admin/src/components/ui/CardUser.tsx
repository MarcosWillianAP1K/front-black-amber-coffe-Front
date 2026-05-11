/**
 * CardUser — Admin-specific client card.
 * Combines PerfilCard (avatar + name + email) with InfosUser (orders, saved, score).
 * Uses OptionsEllipsis for the dropdown menu with dynamic actions.
 */

import { PerfilCard } from "ui-shared/components/ui/PerfilCard";
import { InfosUser } from "ui-shared/components/InfosUser";
import { OptionsEllipsis } from "ui-shared/components/OptionElipisses";
import type { User } from "shared-utils/types/user";

/** CardUser props = User data + action callbacks */
export interface CardUserProps extends User {
    onDeleteUser: (id: string) => void;
    onBlockUser: (id: string) => void;
    onViewUser: (id: string) => void;
}

export function CardUser({ id, name, email, avatarUrl, orders, saved, score, onDeleteUser, onBlockUser, onViewUser }: CardUserProps) {
    return (
        <div className="w-90 h-fit p-4 bg-(--Widget-background) rounded-md border border-(--Border) flex flex-col gap-6">

            {/* Top: Profile + Options dropdown */}
            <div className="flex items-start justify-between">
                <PerfilCard
                    name={name}
                    email={email}
                    avatarUrl={avatarUrl}
                />

                <OptionsEllipsis
                    options={[
                        { label: "View Profile", action: () => onViewUser(id) },
                        { label: "Block User", action: () => onBlockUser(id) },
                        { label: "Delete", action: () => onDeleteUser(id), danger: true },
                    ]}
                />
            </div>

            <div className="w-full h-fit px-4">
                {/* Bottom: Stats */}
                <InfosUser orders={orders} saved={saved} score={score} />
            </div>
        </div>
    );
}