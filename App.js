import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/Header';
import Cards from "./Components/Cards";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import CardDetails from "./Components/CardDetails";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
const browerRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Cards />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/detail/:cardId',
                element: <CardDetails />
            }
        ],
        errorElement: <NotFound />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browerRouter} />);