import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-pink-100 mt-8">
      <Container>
        <div className="py-5  rounded grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <Link className="font-bold text-pink-500 text-2xl">
              Cuisine Master
            </Link>
            <p className="text-gray-800 mt-2 capitalize">
              your destination for healthy and delicious home-cooked meals. Join
              our community and discover the joy of cooking!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">Contact Us</h3>
            <ul>
              <li>Email: contact@cuisinemaster.com</li>
              <li>Phone: 1-800-CUISINE</li>
              <li>Address: 123 Main Street, Bangalore</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">Useful Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">Follow Us</h3>
            <ul>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Instagram</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
