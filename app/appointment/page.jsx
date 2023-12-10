import React from 'react'

export default function page() {
  return (
    <div>
          <div class="modal fade" id="searchModal" tabindex="-1">
              <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                      <div class="modal-header border-0">
                          <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body d-flex align-items-center justify-content-center">
                          <div class="input-group" style="max-width: 600px;">
                              <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                                  <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container-fluid bg-primary py-5 hero-header mb-5">
              <div class="row py-3">
                  <div class="col-12 text-center">
                      <h1 class="display-3 text-white animated zoomIn">Appointment</h1>
                      <a href="" class="h4 text-white">Home</a>
                      <i class="far fa-circle text-white px-2"></i>
                      <a href="" class="h4 text-white">Appointment</a>
                  </div>
              </div>
          </div>
          <div class="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: "90px"}}>
              <div class="container">
                  <div class="row gx-5">
                      <div class="col-lg-6 py-5">
                          <div class="py-5">
                              <h1 class="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                              <p class="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                              <h1 class="text-white mb-4">Make Appointment</h1>
                              <form>
                                  <div class="row g-3">
                                      <div class="col-12 col-sm-6">
                                          <select class="form-select bg-light border-0" style="height: 55px;">
                                              <option selected>Select A Service</option>
                                              <option value="1">Service 1</option>
                                              <option value="2">Service 2</option>
                                              <option value="3">Service 3</option>
                                          </select>
                                      </div>
                                      <div class="col-12 col-sm-6">
                                          <select class="form-select bg-light border-0" style="height: 55px;">
                                              <option selected>Select Doctor</option>
                                              <option value="1">Doctor 1</option>
                                              <option value="2">Doctor 2</option>
                                              <option value="3">Doctor 3</option>
                                          </select>
                                      </div>
                                      <div class="col-12 col-sm-6">
                                          <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style="height: 55px;"/>
                                      </div>
                                      <div class="col-12 col-sm-6">
                                          <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style="height: 55px;"/>
                                      </div>
                                      <div class="col-12 col-sm-6">
                                          <div class="date" id="date1" data-target-input="nearest">
                                              <input type="text"
                                                  class="form-control bg-light border-0 datetimepicker-input"
                                                  placeholder="Appointment Date" data-target="#date1" data-toggle="datetimepicker" style="height: 55px;"/>
                                          </div>
                                      </div>
                                      <div class="col-12 col-sm-6">
                                          <div class="time" id="time1" data-target-input="nearest">
                                              <input type="text"
                                                  class="form-control bg-light border-0 datetimepicker-input"
                                                  placeholder="Appointment Time" data-target="#time1" data-toggle="datetimepicker" style="height: 55px;"/>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <button class="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style="z-index: 1;">
              <div class="container">
                  <div class="bg-primary p-5">
                      <form class="mx-auto" style="max-width: 600px;">
                          <div class="input-group">
                              <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
                                  <button class="btn btn-dark px-4">Sign Up</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div class="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;">
              <div class="container pt-5">
                  <div class="row g-5 pt-4">
                      <div class="col-lg-3 col-md-6">
                          <h3 class="text-white mb-4">Quick Links</h3>
                          <div class="d-flex flex-column justify-content-start">
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                              <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h3 class="text-white mb-4">Popular Links</h3>
                          <div class="d-flex flex-column justify-content-start">
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                              <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                              <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                          </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h3 class="text-white mb-4">Get In Touch</h3>
                          <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                          <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                          <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                      </div>
                      <div class="col-lg-3 col-md-6">
                          <h3 class="text-white mb-4">Follow Us</h3>
                          <div class="d-flex">
                              <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                              <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                              <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                              <a class="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container-fluid text-light py-4" style="background: #051225;">
              <div class="container">
                  <div class="row g-0">
                      <div class="col-md-6 text-center text-md-start">
                          <p class="mb-md-0">&copy; <a class="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.</p>
                      </div>
                      <div class="col-md-6 text-center text-md-end">
                          <p class="mb-0">Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a><br />
                              Distributed by <a class="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
