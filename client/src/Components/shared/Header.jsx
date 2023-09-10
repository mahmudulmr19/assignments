import React, { useContext, useState } from "react";
import Container from "./Container";
import Flexbox from "./Flexbox";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <Flexbox>
          <Link to="/" className="text-2xl text-pink-600 font-bold">
            Cuisine Masters
          </Link>

          <div
            className="md:hidden cursor-pointer relative"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <AiOutlineClose className="h-5 w-5" />
            ) : (
              <AiOutlineMenu className="h-5 w-5" />
            )}
          </div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink-500" : "text-gray-900"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-pink-500" : "text-gray-900"
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-pink-500" : "text-gray-900"
                }
              >
                Contact
              </NavLink>
            </div>
            {currentUser ? (
              <div className="relative flex items-center gap-6">
                <img
                  className="rounded-full h-10 w-10 cursor-pointer user-picture"
                  src={currentUser?.photoURL}
                  alt={currentUser.displayName}
                />

                <Tooltip anchorSelect=".user-picture" place="top">
                  {currentUser.displayName}
                </Tooltip>
                <button
                  onClick={() => signOut(auth)}
                  className="px-4 py-2 bg-pink-500 rounded text-[#f9f9f9] hover:bg-pink-600 transition-all"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 bg-pink-500 rounded text-[#f9f9f9] hover:bg-pink-600 transition-all"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 bg-pink-500 rounded text-[#f9f9f9] hover:bg-pink-600 transition-all"
                >
                  SignUp
                </button>
              </div>
            )}
          </div>
        </Flexbox>

        {isOpen && (
          <div className="relative">
            <div className="md:hidden absolute translate-y-4 transition-all z-50 mx-auto w-full">
              <div className="flex flex-col bg-gray-100 rounded-sm py-3 px-4 gap-3">
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-pink-500" : "text-gray-900"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-pink-500" : "text-gray-900"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-pink-500" : "text-gray-900"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
                {currentUser ? (
                  <div className="relative">
                    <img
                      className="rounded-full h-10 w-10 cursor-pointer user-picture-m"
                      src={currentUser?.photoURL}
                      alt={currentUser.displayName}
                    />
                    <Tooltip anchorSelect=".user-picture-m" place="bottom">
                      {currentUser.displayName}
                    </Tooltip>

                    <button
                      onClick={() => {
                        signOut(auth);
                        setIsOpen(false);
                      }}
                      className="mt-3 px-4 py-2 bg-pink-500 rounded text-[#f9f9f9] hover:bg-pink-600 transition-all"
                    >
                      LogOut
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 w-full bg-pink-500 rounded text-[#f9f9f9] hover:bg-pink-600 transition-all"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 w-full bg-pink-500 rounded text-[#f9f9f9] hover:bg-pink-600 transition-all"
                    >
                      SignUp
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
