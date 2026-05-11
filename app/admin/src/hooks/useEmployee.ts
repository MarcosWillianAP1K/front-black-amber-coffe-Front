/**
 * useEmployee — Custom hook encapsulating employee/staff state and operations.
 *
 * Provides employees list and handlers ready to plug into SectionUsers.
 * Uses employeeService internally — when API is ready, only the service changes.
 */

import { useState, useCallback, useEffect } from "react";
import type { Employee } from "shared-utils/types/employee";
import * as employeeService from "../services/employeeService";

interface UseEmployeeReturn {
    employees: Employee[];
    isLoading: boolean;
    deleteEmployee: (id: string) => void;
    toggleEmployeeStatus: (id: string) => void;
}

export function useEmployee(): UseEmployeeReturn {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initial fetch
    useEffect(() => {
        let cancelled = false;

        employeeService.fetchEmployees().then((data) => {
            if (!cancelled) {
                setEmployees(data);
                setIsLoading(false);
            }
        });

        return () => { cancelled = true; };
    }, []);

    const deleteEmployee = useCallback(async (id: string) => {
        await employeeService.deleteEmployee(id);
        setEmployees((prev) => prev.filter((e) => e.id !== id));
    }, []);

    const toggleEmployeeStatus = useCallback(async (id: string) => {
        const updated = await employeeService.toggleEmployeeStatus(id);
        setEmployees((prev) => prev.map((e) => (e.id === id ? updated : e)));
    }, []);

    return {
        employees,
        isLoading,
        deleteEmployee,
        toggleEmployeeStatus,
    };
}
