import { createBrowserRouter, Navigate } from "react-router-dom";

// Importando paths
import { APP_ROUTES } from "./utils/Path";

// Importando o Layout Pai
import { Template } from "./pages/Template";

// Importando as Telas Prontas
import { LiveOrders } from "./pages/content/LiveOrders";

// Componente genérico para as telas não finalizadas
// eslint-disable-next-line react-refresh/only-export-components
const EmConstrucao = () => (
    <div className="w-full h-full bg-(--Page-background) flex items-center justify-center">
        <h2 className="text-(--Text-primary-off) text-xl font-medium">
            Tela em construção...
        </h2>
    </div>
);

// Mapa central de rotas do sistema
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                index: true,
                element: <Navigate to={APP_ROUTES.LIVE_ORDERS} replace />
            },
            {
                path: APP_ROUTES.DASHBOARD,
                element: <EmConstrucao />
            },
            {
                path: APP_ROUTES.MENU,
                element: <EmConstrucao />
            },
            {
                path: APP_ROUTES.LIVE_ORDERS,
                element: <LiveOrders />
            },
            {
                path: APP_ROUTES.INVENTORY,
                element: <EmConstrucao />
            },
            {
                path: APP_ROUTES.ANALYTICS,
                element: <EmConstrucao />
            },
            {
                path: APP_ROUTES.STAFF,
                element: <EmConstrucao />
            }
        ]
    },
    {
        path: APP_ROUTES.SUPPORT,
        element: <EmConstrucao />
    },
    {
        path: APP_ROUTES.LOGOUT,
        element: <EmConstrucao />
    },
    {
        path: APP_ROUTES.LOGIN,
        element: <EmConstrucao />
    }
]);