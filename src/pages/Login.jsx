import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {

    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [error, setError ] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {
                email, password
            });

            if(response.data.success){
                await login(response.data.user, response.data.token);
                if(response.data.user.role === "admin"){
                    navigate("/admin/dashboard");
                }else{
                    navigate("/customer/dashboard");
                }
            }else{
                alert(response.data.error);
            }
        } catch (error) {
            if(error.response){
              setError(error.response.data.message);
            }
        }finally{
            setLoading(false);
        }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-600 to-gray-100 px-4">

      {/* Outer Big Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        {/* LEFT SIDE — FORM */}
        <div className="w-1/2 bg-white px-12 py-14 flex flex-col justify-center">
          
          {/* Replace with your logo if needed */}
          <h1 className="text-3xl font-bold mb-10">INVENTORY MANAGEMENT SYSTEM</h1>

          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Hello!</h2>
          <p className="text-gray-500 mb-8">Welcome back to the community</p>

          {error && (
            <div className="bg-red-200 text-red-700 p-2 mb-4 rounded">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            {/* Forgot */}
            <p className="text-right text-blue-600 text-sm cursor-pointer hover:underline">
              Forgot Password?
            </p>

            {/* Login */}
            <button
              type="submit"
              className="w-full py-3 bg-black cursor-pointer text-white rounded-xl text-lg font-semibold hover:opacity-90 transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Don’t have an account?
            <span className="text-blue-600 cursor-pointer ml-1 hover:underline">
              Sign Up
            </span>
          </p>
        </div>

        {/* RIGHT SIDE — Gradient Hero Panel */}
        <div className="w-1/2 relative bg-gradient-to-br from-purple-700 via-purple-600 to-blue-500 text-white p-14 flex flex-col justify-between rounded-r-3xl">

          {/* Top Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 border border-white/40 rounded-full backdrop-blur-md hover:bg-white/20">
              Sign Up
            </button>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100">
              Join Us
            </button>
          </div>

          {/* Hero Text */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold leading-snug mb-3">
              Your Inventory, Organized and In Control.
            </h3>

            <p className="text-white/80 text-sm leading-relaxed">
              Efficiently track, manage, and optimize your stock with ease. Our system provides real-time updates, detailed reports, and seamless control over your inventory, helping your business stay organized and informed at all times. Log in to gain instant access to your inventory data, streamline operations, and make smarter decisions for your business growth.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;
