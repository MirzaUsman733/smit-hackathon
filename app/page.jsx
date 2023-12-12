
import Link from 'next/link';
import Caurosel from './components/Caurosel';
import Navbar from './components/Navbar';
import Image from 'next/image';
// import HomeTestimonology from './components/HomeTestimonology';
import imageBefore from '../public/img/before.jpg'
import imageAfter from '../public/img/after.jpg'
import team1 from '../public/img/team-1.jpg'
import team2 from '../public/img/team-2.jpg'
import team3 from '../public/img/team-3.jpg'
import team4 from '../public/img/team-4.jpg'
import team5 from '../public/img/team-5.jpg'
import service1 from '../public/img/service-1.jpg'
import service2 from '../public/img/service-2.jpg'
import service3 from '../public/img/service-3.jpg'
import service4 from '../public/img/service-4.jpg'
import Footer from './components/Footer';
import Topbar from './components/Topbar';
export default function Home() {
  return (
    <>
      <div>
       <Topbar/>
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
                <Link className="btn btn-light" href="/appointment">Appointment</Link>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-dark d-flex flex-column p-5" style={{ height: 300 }}>
                <h3 className="text-white mb-3">Search A Doctor</h3>
                <div className="date mb-3" id="date" data-target-input="nearest">
                  <input type="text" className="form-control bg-light border-0 datetimepicker-input"
                    placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker" style={{ height: 40 }} />
                </div>
                <select className="form-select bg-light border-0 mb-3" style={{ height: 40 }} defaultValue="Select A Service">
                  <option value="Select A Service" disabled>Select A Service</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                </select>
                <Link className="btn btn-light" href="/">Search Doctor</Link>
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
                <h1 className="display-5 mb-0">The World Best Dental Clinic That You Can Trust</h1>
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
              <Link href="appointment" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</Link>
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
                      <select className="form-select bg-light border-0" style={{ height: 55 }} defaultValue="Select A Service">
                        <option value="Select A Service" disabled>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select bg-light border-0" style={{ height: 55 }} defaultValue="Select A Service">
                        <option value="Select A Service" disabled>Select Doctor</option>
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
                      <button className="btn btn-dark w-100 py-3" data-fdprocessedid="your-value" type="submit">Make Appointment</button>
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
                <Image className="position-absolute w-100 h-100" src={imageBefore} width={100} height={100} alt="before Image" style={{ objectFit: 'cover' }} />
                <Image className="position-absolute w-100 h-100" src={imageAfter} width={100} height={100} alt='After Image' style={{ objectFit: "cover" }} />
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
                    <Image className="img-fluid" src={service1} alt="service" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Cosmetic Dentistry</h5>
                  </div>
                </div>
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                  <div className="rounded-top overflow-hidden">
                    <Image className="img-fluid" src={service2} alt="service" />
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
                    <Image className="img-fluid" src={service3} alt="service" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Dental Bridges</h5>
                  </div>
                </div>
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                  <div className="rounded-top overflow-hidden">
                    <Image className="img-fluid" src={service4} alt="service" />
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
                <Link href="appointment" className="btn btn-dark py-3 px-5 me-3">Appointment</Link>
                <Link href="/" className="btn btn-light py-3 px-5">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PricingPlan/>
      <HomeTestimonology/> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title bg-light rounded h-100 p-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
                <h1 className="display-6 mb-4">Meet Our Certified & Experienced Dentist</h1>
                <Link href="appointment" className="btn btn-primary py-3 px-5">Appointment</Link>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
                  <Image className="img-fluid rounded-top w-100" src={team1} width={100} alt="service" />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-instagram fw-normal"></i></Link>
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
                  <Image className="img-fluid rounded-top w-100" src={team2} alt="service" />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-instagram fw-normal"></i></Link>
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
                  <Image className="img-fluid rounded-top w-100" src={team3} alt="service" />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-instagram fw-normal"></i></Link>
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
                  <Image className="img-fluid rounded-top w-100" src={team4} alt="service" />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-instagram fw-normal"></i></Link>
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
                  <Image className="img-fluid rounded-top w-100" src={team5} alt="service" />
                  <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-twitter fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-facebook-f fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                    <Link className="btn btn-primary btn-square m-1" href="/"><i className="fab fa-instagram fw-normal"></i></Link>
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
      <Footer />
    </>
  )
}
