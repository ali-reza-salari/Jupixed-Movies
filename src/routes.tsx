import {createBrowserRouter} from "react-router";
import AppLayout from "./components/layouts/AppLayout.tsx";

import HomePage from "./pages/Home/page.tsx"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: "*",
        element: <div>404, Not Found :(</div>
    }
])

export default routes;