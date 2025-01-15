import { Outlet } from "react-router";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
