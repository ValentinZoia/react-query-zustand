import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ReposPage from "../pages/ReposPage";
import CounterPage from "../pages/CounterPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path:"/repos",
        element: <ReposPage/>
    },
    {
        path:"/counter",
        element: <CounterPage/>
    }
]);


export default router;