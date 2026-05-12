import { DestakTitle } from "ui-shared/components/ui/DestakTitle";
import { SectionUsers } from "../../components/SectionUsers";
import { SectionEmployee } from "../../components/SectionEmployee";
import { useUsers } from "../../hooks/useUsers";
import { useEmployee } from "../../hooks/useEmployee";

export function Staff() {
    const { users, deleteUser, toggleUserStatus } = useUsers();
    const { employees, deleteEmployee, toggleEmployeeStatus } = useEmployee();

    return (
        <div className="w-full h-fit gap-6 flex flex-col">
            <DestakTitle title="Staff" subtitle="Manage your team and staff members" />

            <SectionEmployee
                employees={employees}
                title="Staff"
                onDeleteEmployee={deleteEmployee}
                onBlockEmployee={toggleEmployeeStatus}
                onViewEmployee={(id) => console.log("View employee:", id)}
            />

            <SectionUsers
                users={users}
                title="Users"
                onDeleteUser={deleteUser}
                onBlockUser={toggleUserStatus}
                onViewUser={(id) => console.log("View user:", id)}
            />

            

           

        </div>
    );
}