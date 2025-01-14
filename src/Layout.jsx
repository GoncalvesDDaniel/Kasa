import { Outlet } from "react-router";
import Header from "./components/ui/Header";
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <h1> Footer</h1>
        </>
    );
}

export default Layout;
