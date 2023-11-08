"use client";
import { useReducer, useState } from "react";
import postRequest from "../hooks/postRequest";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  if (localStorage.getItem("jwt")) {
    router.push(`profile`);
    return;
  }

  const loginUser = (e: any) => {
    e.preventDefault();
    postRequest(`/user/login`, {
      email: email,
      password: password,
    }).then((response) => {
      if (!response) {
        return;
      }
      localStorage.setItem("jwt", response.data.access_token);

      alert("Logged in! ");
      window.location.href = "/profile";
    });
  };

  return (
    <div className="w-full h-full fixed flex flex-col justify-center">
      <div className="flex flex-row justify-center font-extrabold text-white pb-10">
        Continue your exploration here
      </div>
      <div className="flex flex-row w-full justify-center ">
        <img src={"/gifs/login.gif"} style={{ width: "30%" }} />
        <div className=" max-w-lg w-2/5 flex flex-col justify-center">
          <form className="bg-white bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={(e) => loginUser(e)}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/register"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs justify-end">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}
