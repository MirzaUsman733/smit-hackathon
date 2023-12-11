"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Caurosel() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <div>
            <div class="container-fluid p-0">
                <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: 900 }}>
                                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                                    <Link href="appointment" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                                    <Link href="/" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: 900 }}>
                                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                                    <Link href="appointment" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                                    <Link href="/" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
