"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
export default function Navbar() {
    useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link href="/" className="nav-item nav-link active">Home</Link>
              <Link href="about" className="nav-item nav-link">About</Link>
              <Link href="service" className="nav-item nav-link">Service</Link>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <Link href="/price" className="dropdown-item">Pricing Plan</Link>
                  <Link href="/team" className="dropdown-item">Our Dentist</Link>
                  <Link href="/testimonology" className="dropdown-item">Testimonial</Link>
                  <Link href="/appointment" className="dropdown-item">Appointment</Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link">Contact</Link>
            </div>
          {/* <button type="button" className="btn text-dark" data-bs-toggle="modal" role="button" data-fdprocessedid="your-value" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
            <Link href="/appointment" className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
          </div>
          </nav>
          <div className="modal fade" id="searchModal" tabIndex="-1">
              <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content" style={{ background: "rgba(9, 30, 62, .7);" }}>
                      <div className="modal-header border-0">
                          <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body d-flex align-items-center justify-content-center">
                          <div className="input-group" style={{ maxWidth: "600" }}>
                              <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                              <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
