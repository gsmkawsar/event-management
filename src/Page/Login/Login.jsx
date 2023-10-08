import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
    const { googleSingIn, singIn, user } = useContext(AuthContext);




    const handelLogin = e => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/([A-Z])/.test(password)) {
            toast.error('Your password should have at lest one upper case characters')
            return;
        }

        singIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Success Login')
            })
            .catch(error => toast.error(error.message))

    }


    const handelGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user);
                toast.success('Success Login')
            })
            .catch(error => toast.error(error.message))


    }




    return (

        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handelLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-neutral">Login</button>
                    </div>
                    <p>Do not have an account <Link className="text-red-600 font-bold" to={"/register"}>Register</Link></p>
                </form>
                <div className="mb-5 text-center">
                    <p className="font-bold">Continue with</p>
                    <button onClick={handelGoogleSingIn} className="btn btn-neutral mt-4 w-40 ">Google Login</button>
                </div>


            </div>
        </div>

    );
};

export default Login;