import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import toast from "react-hot-toast";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user)

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
        toast.success('Success Logout')

    }

    const navLink = <>
        <li> <NavLink to={"/"}>Home</NavLink> </li>
        <li> <NavLink to={"/contact"}>Contact</NavLink> </li>
        <li> <NavLink to={"/services"}>Services</NavLink> </li>


    </>



    return (


        <div className="navbar bg-red-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className=" text-red-600 text-2xl font-bold">Bee<span className="text-black">Party</span></a>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal ">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">
                <div className=" lg:flex mr-3 hidden justify-center  ">
                    <img className="w-8 rounded-full mr-2 " src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                </div>

                {user ?

                    <button onClick={handleSingOut} className="btn btn-neutral bg-red-600 text-white rounded-full">  <AiOutlineLogout /> Sing Out</button>

                    :
                    <Link to={'/login'}>
                        <button className="btn btn-neutral bg-red-600  text-white rounded-full"><AiOutlineLogin /> Login</button>
                    </Link>
                }



















            </div>
        </div>


    );
};

export default Header;