import React from 'react'

export default function page() {
  return (
    <div>
          <div className="modal fade" id="searchModal" tabindex="-1">
              <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
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
                      <h1 className="display-3 text-white animated zoomIn">Contact Us</h1>
                      <a href="" className="h4 text-white">Home</a>
                      <i className="far fa-circle text-white px-2"></i>
                      <a href="" className="h4 text-white">Contact</a>
                  </div>
              </div>
          </div>
          <div className="container-fluid py-5">
              <div className="container">
                  <div className="row g-5">
                      <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
                          <div className="bg-light rounded h-100 p-5">
                              <div className="section-title">
                                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                                  <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                  <div className="text-start">
                                      <h5 className="mb-0">Our Office</h5>
                                      <span>123 Street, New York, USA</span>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                  <div className="text-start">
                                      <h5 className="mb-0">Email Us</h5>
                                      <span>info@example.com</span>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center">
                                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                                  <div className="text-start">
                                      <h5 className="mb-0">Call Us</h5>
                                      <span>+012 345 6789</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                          <form>
                              <div className="row g-3">
                                  <div className="col-12">
                                      <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height: 55}}/>
                                  </div>
                                  <div className="col-12">
                                      <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: 55}}/>
                                  </div>
                                  <div className="col-12">
                                      <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: 55}}/>
                                  </div>
                                  <div className="col-12">
                                      <textarea className="form-control border-0 bg-light px-4 py-3" rows="5" placeholder="Message"></textarea>
                                  </div>
                                  <div className="col-12">
                                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
                          <iframe className="position-relative rounded w-100 h-100"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                              frameborder="0" style={{minHeight: 400, border:0}} allowfullscreen="" aria-hidden="false"
                              tabindex="0"></iframe>
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
                          <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a><br/>
                              Distributed by <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a>

                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
