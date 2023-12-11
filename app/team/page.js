import "@/app/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/app/lib/animate/animate.min.css"
export default function page() {
  return (
    <div>

          <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
              <div className="row gx-0">
                  <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                      <div className="d-inline-flex align-items-center">
                          <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                      </div>
                  </div>
                  <div className="col-md-6 text-center text-lg-end">
                      <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                          <div className="me-3 pe-3 border-end py-2">
                              <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
                          </div>
                          <div className="py-2">
                              <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
              <a href="index.html" className="navbar-brand p-0">
                  <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto py-0">
                      <a href="index.html" className="nav-item nav-link">Home</a>
                      <a href="about.html" className="nav-item nav-link">About</a>
                      <a href="service.html" className="nav-item nav-link">Service</a>
                      <div className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                          <div className="dropdown-menu m-0">
                              <a href="price.html" className="dropdown-item">Pricing Plan</a>
                              <a href="team.html" className="dropdown-item active">Our Dentist</a>
                              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                              <a href="appointment.html" className="dropdown-item">Appointment</a>
                          </div>
                      </div>
                      <a href="contact.html" className="nav-item nav-link">Contact</a>
                  </div>
                  <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                  <a href="appointment.html" className="btn btn-primary py-2 px-4 ms-3">Appointment</a>
              </div>
          </nav>
          <div className="modal fade" id="searchModal" tabindex="-1">
              <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
                      <div className="modal-header border-0">
                          <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body d-flex align-items-center justify-content-center">
                          <div className="input-group" style={{maxWidth: "600px"}}>
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
                      <h1 className="display-3 text-white animated zoomIn">Dentist</h1>
                      <a href="" className="h4 text-white">Home</a>
                      <i className="far fa-circle text-white px-2"></i>
                      <a href="" className="h4 text-white">Dentist</a>
                  </div>
              </div>
          </div>
          <div className="container-fluid py-5">
              <div className="container">
                  <div className="row g-5">
                      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                          <div className="section-title bg-light rounded h-100 p-5">
                              <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
                              <h1 className="display-6 mb-4">Meet Our Certified & Experienced Dentist</h1>
                              <a href="appointment.html" className="btn btn-primary py-3 px-5">Appointment</a>
                          </div>
                      </div>
                      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                          <div className="team-item">
                              <div className="position-relative rounded-top" style={{zIndex: 1}}>
                                  <img className="img-fluid rounded-top w-100" src="img/team-1.jpg" alt=""/>
                                      <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                      </div>
                              </div>
                              <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                  <h4 className="mb-2">Dr. John Doe</h4>
                                  <p className="text-primary mb-0">Implant Surgeon</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                          <div className="team-item">
                              <div className="position-relative rounded-top" style={{zIndex: 1}}>
                                  <img className="img-fluid rounded-top w-100" src="img/team-2.jpg" alt=""/>
                                      <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                      </div>
                              </div>
                              <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                  <h4 className="mb-2">Dr. John Doe</h4>
                                  <p className="text-primary mb-0">Implant Surgeon</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                          <div className="team-item">
                              <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                                  <img className="img-fluid rounded-top w-100" src="img/team-3.jpg" alt=""/>
                                      <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                      </div>
                              </div>
                              <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                  <h4 className="mb-2">Dr. John Doe</h4>
                                  <p className="text-primary mb-0">Implant Surgeon</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                          <div className="team-item">
                              <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                                  <img className="img-fluid rounded-top w-100" src="img/team-4.jpg" alt=""/>
                                      <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                      </div>
                              </div>
                              <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                  <h4 className="mb-2">Dr. John Doe</h4>
                                  <p className="text-primary mb-0">Implant Surgeon</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                          <div className="team-item">
                              <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                                  <img className="img-fluid rounded-top w-100" src="img/team-5.jpg" alt=""/>
                                      <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                      </div>
                              </div>
                              <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                  <h4 className="mb-2">Dr. John Doe</h4>
                                  <p className="text-primary mb-0">Implant Surgeon</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zIndex: 1 }}>
              <div className="container">
                  <div className="bg-primary p-5">
                <form className="mx-auto" style={{maxWidth: '600px'}}>
                          <div className="input-group">
                              <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                  <button className="btn btn-dark px-4">Sign Up</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{marginTop: '-75px'}}>
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
          <div className="container-fluid text-light py-4" style={{ background: '#051225'}}>
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
