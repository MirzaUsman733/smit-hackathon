"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import img1 from '@/public/img/carousel-1.jpg'
import img2 from '@/public/img/carousel-2.jpg'
import Image from 'next/image'
export default function Caurosel() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <div>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image className="w-100" src={img1} alt="courosel" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                                    <Link href="appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                                    <Link href="/" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <Image className="w-100" src={img2} alt="courosel" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                                    <Link href="appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                                    <Link href="/" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}


                </div>
            </div>
        </div>
    )
}
