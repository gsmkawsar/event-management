import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="w-10/12 m-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayout;