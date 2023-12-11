"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import image1 from '@/public/img/price-1.jpg'
import image2 from '@/public/img/price-2.jpg'
import image3 from '@/public/img/price-3.jpg'
import "@/app/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/app/lib/animate/animate.min.css";
import "@/app/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "@/app/lib/twentytwenty/twentytwenty.css";
export default function PricingPlan() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
        // import('https://code.jquery.com/jquery-3.4.1.min.js');
        import('@/app/lib/wow/wow.min.js');
        import('@/app/lib/easing/easing.min.js');
        // import('@/app/lib/waypoints/waypoints.min.js');
        // import('@/app/lib/owlcarousel/owl.carousel.min.js');
        // import('@/app/lib/tempusdominus/js/moment.min.js');
        // import('@/app/lib/tempusdominus/js/moment-timezone.min.js');
        // import('@/app/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js');
        // import('@/app/lib/twentytwenty/jquery.event.move.js');
        // import('@/app/lib/twentytwenty/jquery.twentytwenty.js');

    }, []);
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
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
                                        <Image className="img-fluid rounded-top" src={image1} alt="price" />
                                        <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zIndex: 2}}>
                                            <h2 className="text-primary m-0">$35</h2>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                                        <h4>Teeth Whitening</h4>
                                        <hr className="text-primary w-50 mx-auto mt-0" />
                                        <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <Link href="appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</Link>
                                    </div>
                                </div>
                                <div className="price-item pb-4">
                                    <div className="position-relative">
                                        <Image className="img-fluid rounded-top" src={image2} alt="price" />
                                        <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zIndex: 2}}>
                                            <h2 className="text-primary m-0">$49</h2>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                                        <h4>Dental Implant</h4>
                                        <hr className="text-primary w-50 mx-auto mt-0" />
                                        <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <Link href="appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</Link>
                                    </div>
                                </div>
                                <div className="price-item pb-4">
                                    <div className="position-relative">
                                        <Image className="img-fluid rounded-top" src={image3} alt="price" />
                                        <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zIndex: 2}}>
                                            <h2 className="text-primary m-0">$99</h2>
                                        </div>
                                    </div>
                                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                                        <h4>Root Canal</h4>
                                        <hr className="text-primary w-50 mx-auto mt-0" />
                                        <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                        <Link href="appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
