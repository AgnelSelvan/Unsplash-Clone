import React, { useState } from 'react'
import logo from './../assets/images/white-logo.svg';
import registerPic from './../assets/images/register-photo.jpeg';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import firebase from './../config/firebase'
import LoadingIcon from './../components/LoadingIcon'

export default function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory();
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", password: "", username: "" }}
            onSubmit={(value, formikBag) => {
                setIsLoading(true)
                firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(e => {
                    history.replace("/login")
                    setIsLoading(false)
                }).catch(e => {
                    formikBag.setFieldError('email', e.message);
                    setIsLoading(false)
                })
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().required("First name required"),
                email: Yup.string().required("Email required").email("Email is invalid"),
                username: Yup.string().required("Username required"),
                password: Yup.string().required("Password required").min(6),
            })}
        >
            <section className="flex flex-col sm:flex-row h-screen" >
                <div className=" relative bg-gray-900 sm:w-screen lg:w-1/3 ">
                    <div className="absolute p-10">
                        <div className="sm:h-5 lg:h-64">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="py-10 lg:px-4">
                            <p className="text-white text-3xl font-bold lg:text-5xl sm:font-bold lg:font-bold">Creation Starts Here</p>
                            <p className="text-white sm:text-base lg:text-xl">Access 2,206,256 free, high-resolution photos you can’t find anywhere else</p>
                        </div>
                    </div>
                    <img src={registerPic} className="opacity-25 lg:h-full" alt="Register" />
                </div>
                <div className="w-full lg:w-2/3 h-full flex flex-col justify-center items-center">
                    <Form className="w-full lg:w-1/2 sm:p-4 text-center">
                        <p className="text-xl lg:text-4xl font-bold my-3">Join Unsplash</p>
                        <div>
                            <p className='inline-block'>Already have an account ? </p>
                            <Link to="/login" className="underline inline-block text-gray-700">Login</Link>
                        </div>
                        <button className="flex my-10 bg-blue-500 items-center px-4 py-2 w-full justify-center rounded-md ">
                            <i className="fab fa-facebook text-center text-white mr-2"></i>
                            <p className="text-white">Join with Facebook</p>
                        </button>
                        <p className="text-sm font-light text-gray-700 my-4">OR</p>
                        <div className="flex">
                            <div className="text-red-500  text-sm w-1/2 text-left mr-5">
                                <Field className="w-full px-4 py-2 border text-gray-900 border-gray-500 rounded-md my-1" placeholder="Enter First name..." name="firstName" />
                                <ErrorMessage name="firstName" />
                            </div>
                            <div className="w-1/2 text-left">
                                <Field className="w-full px-4 py-2 border text-gray-900 border-gray-500 rounded-md my-1" placeholder="Enter Last name..." name="lastName" />
                            </div>
                        </div>
                        <div className="text-red-500 text-sm text-left  my-4">
                            <Field className="   w-full px-4 py-2 border  text-gray-900 border-gray-500 rounded-md" type="email" placeholder="Enter Email..." name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="text-red-500  text-sm text-left  my-4">
                            <Field className="w-full px-4 py-2 border  text-gray-900 border-gray-500 rounded-md" type="text" placeholder="Enter Username..." name="username" />
                            <ErrorMessage name="username" />
                        </div>
                        <div className="text-red-500 text-left text-xs  my-4">
                            <Field className="w-full px-4 py-2 border text-gray-900  border-gray-500 rounded-md" type="password" placeholder="Enter Password..." name="password" />
                            <ErrorMessage name="password" />
                        </div>
                        <button type="submit" className="flex my-4 bg-gray-900 items-center px-4 py-2 w-full justify-center rounded-md ">
                            {isLoading ? <LoadingIcon color="text-white" /> : <p className="text-white">Join</p>}
                        </button>
                    </Form>
                </div>
            </section>
        </Formik>
    )
}
