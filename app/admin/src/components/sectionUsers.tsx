import { CardUser } from "./ui/CardUser";
import { SearchBar } from "ui-shared/components/ui/SearchBar";
import type { User } from "shared-utils/types/user";


export interface SectionUsersProps {
    users: User[];
    title: string;
    onDeleteUser: (id: string) => void;
    onBlockUser: (id: string) => void;
    onViewUser: (id: string) => void;
}

export function SectionUsers({ users, title, onDeleteUser, onBlockUser, onViewUser }: SectionUsersProps) {
    return (
        <div className="w-full h-140 flex flex-col px-4 py-2 gap-4 bg-(--Widget-background) rounded-md">

            {/* header */}
            <div className="flex flex-row justify-between items-center">

                {/* Title */}
                <h1 className="w-full h-fit text-(--Primary-off) text-[24px] font-primary font-bold">
                    {title}
                </h1>

                <SearchBar placeholder="Search" onChange={(value) => console.log(value)} />

            </div>

            {/* content */}
            <div className="w-full h-full flex flex-wrap justify-center gap-6 overflow-y-auto">
                {users.map((user) => (
                    <CardUser
                        key={user.id}
                        {...user}
                        onDeleteUser={onDeleteUser}
                        onBlockUser={onBlockUser}
                        onViewUser={onViewUser}
                    />
                ))}
            </div>

        </div>
    );
}