import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";


const Registration = () => {

    const { createUser, googleSingIn } = useContext(AuthContext)

    const handelRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/([A-Z])/.test(password)) {
            toast.error('Your password should have at lest one upper case characters')
            return;
        }


        //   Create User

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Success Register')
            })
            .catch(error => toast.error(error.message))

    }
    const googleLogin = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user);
                toast.success('Success Register')
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please Registration!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-neutral">Register</button>
                        </div>
                        <p>Already have an account please <Link className="text-red-600 font-bold" to={"/login"}>Login</Link></p>
                    </form>
                    <div className="mb-5 text-center">
                        <p className="font-bold">Continue with</p>
                        <button onClick={googleLogin} className="btn btn-neutral mt-4 w-40 ">Google Register </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;