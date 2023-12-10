"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
export default function Navbar() {
    useEffect(() => {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a href="index.html" class="navbar-brand p-0">
            <h1 class="m-0 text-primary"><i class="fa fa-tooth me-2"></i>DentCare</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
              <a href="/" class="nav-item nav-link active">Home</a>
              <a href="about" class="nav-item nav-link">About</a>
              <a href="service" class="nav-item nav-link">Service</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu m-0">
                  <Link href="/price" class="dropdown-item">Pricing Plan</Link>
                  <Link href="/team" class="dropdown-item">Our Dentist</Link>
                  <Link href="/testimonology" class="dropdown-item">Testimonial</Link>
                  <Link href="/appointment" class="dropdown-item">Appointment</Link>
                </div>
              </div>
              <Link href="/contact" class="nav-item nav-link">Contact</Link>
            </div>
            <button type="button" class="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
            <Link href="/appointment" class="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
          </div>
          </nav>
          <div className="modal fade" id="searchModal" tabindex="-1">
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
