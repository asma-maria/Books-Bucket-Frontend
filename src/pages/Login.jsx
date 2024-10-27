import { FaGoogle, FaGithub } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { ROUTES } from "../routes"
import { useContext, useState } from "react"
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider"
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth"
import Loader from "./Loader";
import { Helmet } from "react-helmet";

const Login = ()=>{
    const [loader, setLoader] = useState(false);
    const { loginWithEmailPassword, loginWithGoogle, loginWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const {state} = useLocation();

    window.scrollTo(0,0);

    const handleLogin = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        setLoader(true);
        loginWithEmailPassword(email, password)
        .then(()=>{
            toast.success('You are successfully logged in');
            setLoader(false);
            navigate( state ? state : ROUTES.HOME );
        })
        .catch((error)=>{
            toast.error('Login Error')
            setLoader(false);
            console.error(error);
        });
    }

    const handleGoogleSignin = ()=>{
        setLoader(true);
        loginWithGoogle(googleProvider)
        .then(()=>{
            toast.success('You are successfully logged in with Google');
            setLoader(false);
            navigate( state ? state : ROUTES.BOOKS );
        })
        .catch((error)=>{
            toast.error('Login Error')
            setLoader(false);
            console.error(error);
        });
    }

    const handleGitHubSignin = ()=>{
        setLoader(true);
        loginWithGitHub(githubProvider)
        .then(()=>{
            toast.success('You are successfully logged in with Github');
            setLoader(false);
            navigate( state ? state : ROUTES.BOOKS );
        })
        .catch((error)=>{
            toast.error('Login Error')
            setLoader(false);
            console.error(error);
        });
    }

    return (
        <>

        <Helmet>
            <title>
                Books Bucket | Login 
            </title>
        </Helmet>
        <div className="
        max-w-screen-sm mx-4 my-10 md:w-1/2 md:mx-auto  rounded-lg border p-10 bg-emerald-50 ">
            {
                loader ? 
                <div className="w-full h-full flex items-center justify-center">
                    <Loader></Loader>
                </div>
                :
                <>
                    <form onSubmit={handleLogin} className="space-y-2">
                        <div className="text-center pb-3 font-semibold">Login Your Account</div>
                        <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input id="email" type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                        </svg>
                        <input id="password" type="password" className="grow" placeholder="******" />
                        </label>
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-outline bg-green-200">Login</button>
                        </div>
                    </form>
                    
                    <div className="flex justify-center gap-3 ">
                    <button
                      onClick={handleGoogleSignin}
                      type="button"
                      className="btn btn-outline btn-error mt-2 rounded-none"
                    >
                      <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                        Sign in with Google
                      </span>
                    </button>

                    <button
                     onClick={handleGitHubSignin}
                      type="button"
                      className="btn btn-outline mt-2 rounded-none"
                    >
                      <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                        Sign in with GitHub
                      </span>
                    </button>
                    </div>
                    <div className="text-sm text-slate-900 text-center p-2">
                        Don't have an account? <Link className="font-semibold text-cyan-700" to={ROUTES.REGISTER}>Register</Link> here.
                    </div>
                </>
            }
        </div>   
        
        </>
    )
}

export default Login