import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {
    const { googleSingIn } = useContext(AuthContext);

    const handelLogin = e => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(form, email, password)

    }


    // const handelGoogleSingIn = () => {
    //     googleSingIn()
    //         .then(result => console.log(result.user))
    //         .catch(error => console.error(error))
    // }


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
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not have an account <Link className="text-blue-600 font-bold" to={"/register"}>Register</Link></p>
                        </form>

                </div>
            </div>
        
    );
};

export default Login;