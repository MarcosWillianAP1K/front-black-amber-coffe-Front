/**
 * useAnalytics — Custom hook for analytics cards and chart.
 */

import { useEffect, useState } from "react";
import type { AnalyticsData } from "../services/analyticsService";
import * as analyticsService from "../services/analyticsService";

interface UseAnalyticsReturn {
    data: AnalyticsData | null;
    isLoading: boolean;
}

export function useAnalytics(): UseAnalyticsReturn {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        analyticsService.fetchAnalytics().then((response) => {
            if (!cancelled) {
                setData(response);
                setIsLoading(false);
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    return { data, isLoading };
}
