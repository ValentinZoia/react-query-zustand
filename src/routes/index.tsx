import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ReposPage from "../pages/ReposPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path:"/repos",
        element: <ReposPage/>
    },
]);


export default router;