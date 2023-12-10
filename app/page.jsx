
import Caurosel from './components/Caurosel';
import Navbar from './components/Navbar';
//  import('bootstrap/dist/js/bootstrap.bundle.min.js');
export default function Home() {
  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap.bundle.min.js');
  // }, []);
  return (
    <>
      <div>
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
       <Navbar />
        
      <Caurosel />
      </div>
      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary d-flex flex-column p-5" style={{ height: 300 }}>
                <h3 className="text-white mb-3">Opening Hours</h3>
                <div className="d-flex justify-content-between text-white mb-3">
                  <h6 className="text-white mb-0">Mon - Fri</h6>
                  <p className="mb-0"> 8:00am - 9:00pm</p>
                </div>
                <div className="d-flex justify-content-between text-white mb-3">
                  <h6 className="text-white mb-0">Saturday</h6>
                  <p className="mb-0"> 8:00am - 7:00pm</p>
                </div>
                <div className="d-flex justify-content-between text-white mb-3">
                  <h6 className="text-white mb-0">Sunday</h6>
                  <p className="mb-0"> 8:00am - 5:00pm</p>
                </div>
                <a className="btn btn-light" href="">Appointment</a>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-dark d-flex flex-column p-5" style={{ height: 300 }}>
                <h3 className="text-white mb-3">Search A Doctor</h3>
                <div className="date mb-3" id="date" data-target-input="nearest">
                  <input type="text" className="form-control bg-light border-0 datetimepicker-input"
                    placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker" style={{ height: 40 }} />
                </div>
                <select className="form-select bg-light border-0 mb-3" style={{ height: 40 }}>
                  <option selected>Select A Service</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                </select>
                <a className="btn btn-light" href="">Search Doctor</a>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-secondary d-flex flex-column p-5" style={{ height: 300 }}>
                <h3 className="text-white mb-3">Make Appointment</h3>
                <p className="text-white">Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet.</p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                <h1 className="display-5 mb-0">The World's Best Dental Clinic That You Can Trust</h1>
              </div>
              <h4 className="text-body fst-italic mb-4">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</h4>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                </div>
              </div>
              <a href="appointment.html" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
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
                      <select className="form-select bg-light border-0" style={{ height: 55 }}>
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select bg-light border-0" style={{ height: 55 }}>
                        <option selected>Select Doctor</option>
                        <option value="1">Doctor 1</option>
                        <option value="2">Doctor 2</option>
                        <option value="3">Doctor 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: 55 }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: 55 }} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="date" id="date1" data-target-input="nearest">
                        <input type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Date" data-target="#date1" data-toggle="datetimepicker" style={{ height: 55 }} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="time" id="time1" data-target-input="nearest">
                        <input type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Time" data-target="#time1" data-toggle="datetimepicker" style={{ height: 55 }} />
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
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: 400 }}>
              <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                <img className="position-absolute w-100 h-100" src="img/before.jpg" style={{ objectFit: 'cover' }} />
                <img className="position-absolute w-100 h-100" src="img/after.jpg" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title mb-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
                <h1 className="display-5 mb-0">We Offer The Best Quality Dental Services</h1>
              </div>
              <div className="row g-5">
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/service-1.jpg" alt="" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Cosmetic Dentistry</h5>
                  </div>
                </div>
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/service-2.jpg" alt="" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Dental Implants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-7">
              <div className="row g-5">
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/service-3.jpg" alt="" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Dental Bridges</h5>
                  </div>
                </div>
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/service-4.jpg" alt="" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Teeth Whitening</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                <h3 className="text-white mb-3">Make Appointment</h3>
                <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
              <div className="offer-text text-center rounded p-5">
                <h1 className="display-5 text-white">Save 30% On Your First Dental Checkup</h1>
                <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod diam duo lorem magna sit dolore sed et.</p>
                <a href="appointment.html" className="btn btn-dark py-3 px-5 me-3">Appointment</a>
                <a href="" className="btn btn-light py-3 px-5">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                <h1 className="display-5 mb-0">We Offer Fair Prices for Dental Treatment</h1>
              </div>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo eirmod magna dolore erat amet</p>
              <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">Call for Appointment</h5>
              <h1 className="wow fadeInUp" data-wow-delay="0.6s">+012 345 6789</h1>
            </div>
            <div className="col-lg-7">
              <div className="owl-carousel price-carousel wow zoomIn" data-wow-delay="0.9s">
                <div className="price-item pb-4">
                  <div className="position-relative">
                    <img className="img-fluid rounded-top" src="img/price-1.jpg" alt="" />
                    <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <h2 className="text-primary m-0">$35</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>Teeth Whitening</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <a href="appointment.html" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                  </div>
                </div>
                <div className="price-item pb-4">
                  <div className="position-relative">
                    <img className="img-fluid rounded-top" src="img/price-2.jpg" alt="" />
                    <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <h2 className="text-primary m-0">$49</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>Dental Implant</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <a href="appointment.html" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                  </div>
                </div>
                <div className="price-item pb-4">
                  <div className="position-relative">
                    <img className="img-fluid rounded-top" src="img/price-3.jpg" alt="" />
                    <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{ zIndex: 2 }}>
                      <h2 className="text-primary m-0">$99</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>Root Canal</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                    <a href="appointment.html" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
      <div className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                <div className="testimonial-item text-center text-white">
                  <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-1.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
                <div className="testimonial-item text-center text-white">
                  <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-2.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
              </div>
            </div>
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
                <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                  <img className="img-fluid rounded-top w-100" src="img/team-1.jpg" alt="" />
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
                  <img className="img-fluid rounded-top w-100" src="img/team-2.jpg" alt="" />
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
                  <img className="img-fluid rounded-top w-100" src="img/team-3.jpg" alt="" />
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
                  <img className="img-fluid rounded-top w-100" src="img/team-4.jpg" alt="" />
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
                  <img className="img-fluid rounded-top w-100" src="img/team-5.jpg" alt="" />
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
            <form className="mx-auto" style={{ maxWidth: 600 }}>
              <div className="input-group">
                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                <button className="btn btn-dark px-4">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{ marginTop: -75 }}>
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
      <div className="container-fluid text-light py-4" style={{ background: "#051225;" }}>
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
    </>
  )
}
