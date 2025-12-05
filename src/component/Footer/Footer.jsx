import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-4 pt-5">
      <div className="container">
        <div className="row">
          
          {/* Company Information */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p className="mb-3">
              We are a leading technology company, providing the best solutions and products 
              to our customers with high quality and exceptional service.
            </p>
            <div className="d-flex">
              <i className="fa-brands fa-facebook fs-5 me-3"></i>
              <i className="fa-brands fa-youtube fs-5 me-3"></i>
              <i className="fa-brands fa-instagram fs-5 me-3"></i>
              <i className="fa-brands fa-x-twitter fs-5"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink to="/" className="text-white text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/products" className="text-white text-decoration-none">
                  Products
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/brands" className="text-white text-decoration-none">
                  Brands
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/about" className="text-white text-decoration-none">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Policies</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink to="/privacy" className="text-white text-decoration-none">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/terms" className="text-white text-decoration-none">
                  Terms of Service
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/shipping" className="text-white text-decoration-none">
                  Shipping Policy
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/returns" className="text-white text-decoration-none">
                  Return Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fa-solid fa-map-pin me-2"></i>
                123 Business Street, City, Country
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-phone me-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                info@company.com
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-clock me-2"></i>
                Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="row mt-4 pt-3 border-top">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Designed with <i className="fa-solid fa-heart text-danger"></i> for our customers
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
