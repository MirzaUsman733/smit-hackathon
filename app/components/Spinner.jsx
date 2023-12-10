"use client"
import React, { useEffect } from 'react'

export default function Spinner() {
    useEffect(() => {
        // Spinner
        const spinner = () => {
            setTimeout(() => {
                const spinnerElement = document.getElementById('spinner');
                if (spinnerElement) {
                    spinnerElement.classList.remove('show');
                }
            }, 1);
        };
        spinner();
    })
  return (
    <div>
          <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div className="spinner-grow text-primary m-1" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-dark m-1" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-secondary m-1" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
    </div>
  )
}
