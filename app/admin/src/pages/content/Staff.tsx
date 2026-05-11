import { DestakTitle } from "ui-shared/components/ui/DestakTitle";
import { SectionUsers } from "../../components/sectionUsers";
import { useUsers } from "../../hooks/useUsers";

export function Staff() {
    const { users, deleteUser, toggleStatus } = useUsers();

    return (
        <div className="w-full h-fit gap-6 flex flex-col">
            <DestakTitle title="Staff" subtitle="Manage your team and staff members" />

            <SectionUsers
                users={users}
                title="Staff"
                onDeleteUser={deleteUser}
                onBlockUser={toggleStatus}
                onViewUser={(id) => console.log("View user:", id)}
            />
        </div>
    );
}