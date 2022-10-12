import React from 'react'
import { Link } from 'react-router-dom'
import '../../styleSheet/logo.css'

export const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="">
        <div className="d-flex flex-wrap align-items-center justify-content-left justify-content-lg-start">

          <Link to={"/"} className="nav-link px-2 text-white">

            <span
              className="d-flex align-items-center mb-2 mb-1g-0 text-white text-decoration-none"
              >
                 <img className="App-logo" height="52" src="https://play-lh.googleusercontent.com/fXQVXTma1ENwAFjsxJ4IT6GntBr3RxWP3HMSLbNdvycl-0tscOQEeJIEAmehcNOt5hCp=w240-h480-rw"
                   alt="" />
            </span>
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={"/user-form"} className="nav-link px-2 text-white">Formulario</Link></li>
          {/*<li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning"><Link to={"/user-form"} className="nav-link px-2 text-white"><strong>Sign-Up</strong></Link></button>
        </div>
      </div>
    </div>
    </header >
  )
}


