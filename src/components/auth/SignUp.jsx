import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <form>
        <div className="py-6 flex flex-col justify-center sm:py-8">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r to-blue-700 from-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <h1
                      style={{ marginBottom: 5 }}
                      className="font-extrabold text-4xl text-center"
                    >
                      Sign Up
                    </h1>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                    </p>
                    <div className="justify-center flex flex-col py-6 sm-py-12">
                      <input
                        name="email"
                        style={{ marginBottom: 10 }}
                        placeholder="Email"
                        type="email"
                        className=" px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                      />
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        className=" px-2 mb-3 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                      />
                      <input
                        name="password"
                        placeholder="Confirm Password"
                        type="password"
                        className=" px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                      />
                    </div>
                  </div>
                  <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p className="text-center">
                      <button
                        type="submit"
                        className="transition rounded-md duration-200 ease-in-out px-4 py-2 bg-blue-400 text-white focus:ring-indigo-300 focus:ring hover:bg-blue-700 select-none outline-none"
                      >
                        Login
                      </button>
                    </p>
                    <p
                      style={{ marginTop: 5 }}
                      className="text-center font-normal"
                    >
                      Already have an account?{" "}
                      <Link to={"/login"}>
                        <a
                          href="#"
                          className="text-indigo-500 hover:text-indigo-800"
                        >
                          Login
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
