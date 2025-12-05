import React from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/ZLogo.jpg';
export default function Navbar() {
  let {isLogin,setLogin} = useContext(userContext)
    let navigate = useNavigate()

  function logOut(){
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/login')
  }

  return (
    <nav className="bg-secondary text-white shadow-sm py-2">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center">

        <div className="d-flex flex-column flex-lg-row align-items-center">
          <img 
            src={logo}
            
            width="50" 
            alt="logo" 
            className="mb-2 mb-lg-0 me-lg-3 rounded-circle"
          />

          {/* Nav Links */}
          {isLogin ? <ul className="d-flex flex-column flex-lg-row list-unstyled m-0">
            <li>
              <NavLink 
                to="" 
                className="text-white text-decoration-none p-2"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="carts" 
                className="text-white text-decoration-none p-2"
              >
                Carts
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="brands" 
                className="text-white text-decoration-none p-2"
              >
                Brands
              </NavLink>
            </li>
          </ul>
          :
          null
          }
        </div>

        {/* Right - Register/Login/Social */}
        <div>
          <ul className="d-flex flex-column flex-lg-row list-unstyled m-0">
            <li>
              <NavLink 
                to="register" 
                className="text-white text-decoration-none p-2"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="login" 
                className="text-white text-decoration-none p-2"
              >
                Login
              </NavLink>
            </li>
          {isLogin?
          <li>
                <NavLink
                onClick={()=>{logOut()}}
                to="/login" 
                className="text-white text-decoration-none p-2"
              >
                Logout
              </NavLink>
            </li> : null}

            {/* Social Icons */}
            <li className="d-flex align-items-center p-2">
              <i className="fab fa-facebook px-1"></i>
              <i className="fab fa-youtube px-1"></i>
              <i className="fab fa-instagram px-1"></i>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
