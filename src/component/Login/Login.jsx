import React from 'react';
import { useContext } from 'react'
import { userContext } from '../../context/userContext';
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
function Login() {
    let {setLogin} = useContext(userContext)
    let validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('enter valid email'), 
        password: Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{6,8}$/ , 'password is not valid'),
    })
    let navigate = useNavigate()

async function handleLogin(formData){
console.log('register',formData);
let response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',formData)
console.log("full response" , response.data)
if(response.data.message == 'success'){
    localStorage.setItem('userToken', response.data.token)
    setLogin(response.data.token)
    navigate('/')
}
    }
        let formik = useFormik({
        initialValues:{
        email:'',
        password:'',
        },
        validationSchema: validationSchema ,
        onSubmit : handleLogin,
    })
return (
    <section className="vh-100 gradient-custom">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-4 pb-5" onSubmit={formik.handleSubmit} action="#!">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input 
                type="email" 
                placeholder='Enter Your Email' 
                id="typeEmailX" 
                className={`form-control form-control-lg ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} 
                name="email" 
                value={formik.values.email} 
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
                {formik.touched.email && formik.errors.email ? (
                                                    <div className="text-danger">{formik.errors.email}</div>
                                                    ) : null}
              </div>

              <div className="form-outline form-white mb-4">
                <input 
                  type="password" 
                  placeholder='Enter Your Password' 
                  id="typePasswordX" 
                  className={`form-control form-control-lg ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`} 
                  name="password" 
                  value={formik.values.password} 
                  onBlur={formik.handleBlur} 
                  onChange={formik.handleChange}
                />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
                {formik.touched.password && formik.errors.password ? (
                                                    <div className="text-danger">{formik.errors.password}</div>
                                                    ) : null}
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </form>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

export default Login