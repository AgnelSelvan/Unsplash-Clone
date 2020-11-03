import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import LoadingIcon from '../components/LoadingIcon';
import logo from './../assets/images/logo.png';
import firebase from './../config/firebase';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        firebase.auth().signInWithEmailAndPassword(form.email, form.password).then((res) => {
            history.replace("/")
            setError("")
            console.log(res);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setError(err.message);
            setIsLoading(false);
        })
    }
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <section className="flex justify-center items-center h-screen" >
            <div className="w-1/4">
                <form onSubmit={handleSubmit} className="text-center flex flex-col items-center">
                    <img width="120" src={logo} alt="Unsplash" />
                    <p className="text-black font-bold text-3xl ">Login</p>
                    <p className="text-gray-700">Welcome Back</p>
                    <div className="flex my-4 bg-blue-500 items-center px-4 py-2 w-full justify-center rounded-md ">
                        <i className="fab fa-facebook text-center text-white mr-2"></i>
                        <p className="text-white">Login with Facebook</p>
                    </div>
                    <p className="text-sm font-light text-gray-700 my-4">OR</p>
                    {error === "" ? "" : <p className="text-red-500 text-base">{error}</p>}
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-500 rounded-md my-4" placeholder="Enter username" />
                    <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full px-4 py-2 border border-gray-500 rounded-md my-2" placeholder="Enter password" />
                    <div className="w-full">
                        <p className="text-gray-800 underline text-right">Forget password ?</p>
                    </div>
                    <button type="submit" className="flex my-4 bg-gray-900 items-center px-4 py-2 w-full justify-center rounded-md ">
                        <p className="text-white">{
                            isLoading ? <LoadingIcon color="text-white" /> : "Login"
                        }</p>
                    </button>
                    <div className="relative">
                        <p className="text-gray-900 my-2 inline-block mx-2">Don't have an account?</p>
                        <Link to="/join" className="inline-block text-gray-600 underline">Join</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
