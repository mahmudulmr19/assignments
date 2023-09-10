import React, { useEffect, useState } from "react";
import { Container } from "../../Components";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Name is required");
    }
    if (!email) {
      return toast.error("Email is required");
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return toast.error("Invalid email");
    }
    if (!password) {
      return toast.error("Password is required");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!photoUrl) {
      return toast.error("Photo Url is required");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Signup successfully");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => {
          navigate(from);
        });
      })
      .catch((error) => {
        toast.error(error.code);
        console.clear();
      });
  };
  return (
    <div className="py-8">
      <Container>
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6 mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photoUrl"
                className="block text-gray-700 font-bold mb-2"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoUrl"
                name="photoUrl"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="Enter the URL of your profile picture"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-medium transition-all py-2 px-4 rounded hover:bg-pink-600"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-2 text-gray-800">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-pink-500"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
