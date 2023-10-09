import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="w-10/12 m-auto">
            <div className='mb-10'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <div className='mt-10'>
                <Footer></Footer>
            </div>

            <Toaster />
        </div>
    );
};

export default MainLayout;