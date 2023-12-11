import Link from 'next/link'
import React from 'react'

export default function HeroStart() {
  return (
    <div>
          <div className="container-fluid bg-primary py-5 hero-header mb-5">
              <div className="row py-3">
                  <div className="col-12 text-center">
                      <h1 className="display-3 text-white animated zoomIn">About Us</h1>
                      <Link href="/" className="h4 text-white">Home</Link>
                      <i className="far fa-circle text-white px-2"></i>
                      <Link href="/about" className="h4 text-white">About</Link>
                  </div>
              </div>
          </div>
    </div>
  )
}
