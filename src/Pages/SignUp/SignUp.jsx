import signupImg from "../../assets/images/login/login.svg"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";


const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='my-20 flex flex-col lg:flex-row items-center justify-around'>
            <div className='lg:w-1/2'>
                <img src={signupImg} alt="" className="w-96" />
            </div>
            <div className="lg:w-1/2">
                <div className="card shrink-0 w-full max-w-md lg:max-w-lg shadow-2xl bg-base-100">
                    <h1 className='text-3xl text-center my-10'>Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500 text-white">Sign up</button>
                        </div>
                        <div className='flex flex-col items-center space-y-3 mt-4'>
                            <p>Or Sign up with</p>
                            <div className='flex gap-3'>
                                <button className="btn"><FaFacebookF />
                                </button>
                                <button className="btn"><FaLinkedinIn />
                                </button>
                                <button className="btn"><FaGoogle />
                                </button>
                            </div>
                            <div className="mt-10">
                                <p>Already have an Account?
                                    <Link to="/signin" className="text-red-600 font-bold">Sign in</Link></p>
                            </div>

                        </div>
                    </form>
                </div>

            </div>


        </div>
    );
    
};

export default SignUp;