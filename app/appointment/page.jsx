"use client"
import { useState } from "react"
const initialState = { name: "", email: "" }
export default function page() {
    const [state, setState] = useState(initialState)
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const submit = (e) =>{
        e.preventDefault();
        let { name, email } = state
        console.log(name)
        console.log(email)
    }

  return (
      <div>
          {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div class="spinner-grow text-primary m-1" role="status">
                  <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-dark m-1" role="status">
                  <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow text-secondary m-1" role="status">
                  <span class="sr-only">Loading...</span>
              </div>
          </div> */}
          <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
              <div class="row gx-0">
                  <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                      <div class="d-inline-flex align-items-center">
                          <small class="py-2"><i class="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                      </div>
                  </div>
                  <div class="col-md-6 text-center text-lg-end">
                      <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                          <div class="me-3 pe-3 border-end py-2">
                              <p class="m-0"><i class="fa fa-envelope-open me-2"></i>info@example.com</p>
                          </div>
                          <div class="py-2">
                              <p class="m-0"><i class="fa fa-phone-alt me-2"></i>+012 345 6789</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
              <a href="index.html" class="navbar-brand p-0">
                  <h1 class="m-0 text-primary"><i class="fa fa-tooth me-2"></i>DentCare</h1>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav ms-auto py-0">
                      <a href="index.html" class="nav-item nav-link">Home</a>
                      <a href="about.html" class="nav-item nav-link">About</a>
                      <a href="service.html" class="nav-item nav-link">Service</a>
                      <div class="nav-item dropdown">
                          <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                          <div class="dropdown-menu m-0">
                              <a href="price.html" class="dropdown-item">Pricing Plan</a>
                              <a href="team.html" class="dropdown-item">Our Dentist</a>
                              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                              <a href="appointment.html" class="dropdown-item active">Appointment</a>
                          </div>
                      </div>
                      <a href="contact.html" class="nav-item nav-link">Contact</a>
                  </div>
                  <button type="button" class="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
                  <a href="appointment.html" class="btn btn-primary py-2 px-4 ms-3">Appointment</a>
              </div>
          </nav>
          <div className="modal fade" id="searchModal" tabIndex="-1">
              <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content" style={{ background: "rgba(9, 30, 62, .7)" }}>
                      <div className="modal-header border-0">
                          <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body d-flex align-items-center justify-content-center">
                          <div className="input-group" style={{maxWidth: 600}}>
                              <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                                  <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid bg-primary py-5 hero-header mb-5">
              <div className="row py-3">
                  <div className="col-12 text-center">
                      <h1 className="display-3 text-white animated zoomIn">Appointment</h1>
                      <a href="" className="h4 text-white">Home</a>
                      <i className="far fa-circle text-white px-2"></i>
                      <a href="" className="h4 text-white">Appointment</a>
                  </div>
              </div>
          </div>
          <div className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: "90px"}}>
              <div className="container">
                  <div className="row gx-5">
                      <div className="col-lg-6 py-5">
                          <div className="py-5">
                              <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                              <p className="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                              <h1 className="text-white mb-4">Make Appointment</h1>
                              <form>
                                  <div className="row g-3">
                                      <div className="col-12 col-sm-6">
                                          <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                              <option selected>Select A Service</option>
                                              <option value="1">Service 1</option>
                                              <option value="2">Service 2</option>
                                              <option value="3">Service 3</option>
                                          </select>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                          <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                              <option selected>Select Doctor</option>
                                              <option value="1">Doctor 1</option>
                                              <option value="2">Doctor 2</option>
                                              <option value="3">Doctor 3</option>
                                          </select>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                          <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: "55px"}}/>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                          <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55}}/>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                          <div className="date" id="date1" data-target-input="nearest">
                                              <input type="text"
                                                  className="form-control bg-light border-0 datetimepicker-input"
                                                  placeholder="Appointment Date" data-target="#date1" data-toggle="datetimepicker" style={{height: 55}}/>
                                          </div>
                                      </div>
                                      <div className="col-12 col-sm-6">
                                          <div className="time" id="time1" data-target-input="nearest">
                                              <input type="text"
                                                  className="form-control bg-light border-0 datetimepicker-input"
                                                  placeholder="Appointment Time" data-target="#time1" data-toggle="datetimepicker" style={{height: 55}}/>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{zIndex: 1}}>
              <div className="container">
                  <div className="bg-primary p-5">
                      <form className="mx-auto" style={{maxWidth: 600}}>
                          <div className="input-group">
                              <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                  <button className="btn btn-dark px-4">Sign Up</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{marginTop: -75}}>
              <div className="container pt-5">
                  <div className="row g-5 pt-4">
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Quick Links</h3>
                          <div className="d-flex flex-column justify-content-start">
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                              <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Popular Links</h3>
                          <div className="d-flex flex-column justify-content-start">
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                              <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Get In Touch</h3>
                          <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                          <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                          <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Follow Us</h3>
                          <div className="d-flex">
                              <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                              <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                              <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                              <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid text-light py-4" style={{background: "#051225"}}>
              <div className="container">
                  <div className="row g-0">
                      <div className="col-md-6 text-center text-md-start">
                          <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.</p>
                      </div>
                      <div className="col-md-6 text-center text-md-end">
                          <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a><br />
                              Distributed by <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
