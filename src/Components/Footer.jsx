import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import {
  companyLinks,
  contactLinks,
  productLinks,
  supportLinks,
} from "../constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-14 bg-[#1A1919] ">
      <div className="container mx-auto relative py-8 lg:py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="space-y-3.5">
            <h1 className="text-[#FFFFFF] text-xl md:text-2xl lg:text-3xl font-extrabold">
              WahidaHub
            </h1>
            <p className="text-[#ffffffb3] text-sm">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="https://www.facebook.com/mahmudulmr19/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer"
              >
                <ImFacebook color="#337FFF" className="h-5 w-5 " />
              </Link>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <ImTwitter color="#33CCFF" className="h-5 w-5 " />
              </div>
              <Link
                to="https://www.instagram.com/mahmudulmr199/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer"
              >
                <FaInstagram color="#DD2A7B" className="h-5 w-5 " />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold">Company</h2>
            <div className="mt-3 text-[#ffffffb3] space-y-1.5">
              {companyLinks.map((link) => (
                <p
                  key={link.name}
                  className="text-[#ffffffb3] cursor-pointer hover:underline"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold">Product</h2>
            <div className="mt-3 text-[#ffffffb3] space-y-1.5">
              {productLinks.map((link) => (
                <p
                  key={link.name}
                  className="text-[#ffffffb3] cursor-pointer hover:underline"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold">Support</h2>
            <div className="mt-3 text-[#ffffffb3] space-y-1.5">
              {supportLinks.map((link) => (
                <p
                  key={link.name}
                  className="text-[#ffffffb3] cursor-pointer hover:underline"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold">Contact</h2>
            <div className="mt-3 text-[#ffffffb3] space-y-1.5">
              {contactLinks.map((link) => (
                <p
                  key={link.name}
                  className="text-[#ffffffb3] cursor-pointer hover:underline"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* devider */}
        <div className="border border-[#7E90FE33] mt-6" />
        <div className="mt-6 flex flex-col text-center md:flex-row md:items-center md:justify-between">
          <p className="text-[#ffffff66]">
            @{new Date().getFullYear()}{" "}
            <span className="font-semibold">WahidaHub</span>. All Rights
            Reserved
          </p>
          <p className="text-[#ffffff66] ">
            Powered by <span className="font-bold">WahidaHub</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
