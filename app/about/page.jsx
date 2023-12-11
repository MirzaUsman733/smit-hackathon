import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import HeroStart from '../components/aboutComponents/HeroStart'
import AboutStart from '../components/aboutComponents/AboutStart'

export default function page() {
    return (
        <div>
            <Topbar />
            <Navbar />
            <HeroStart />
            <AboutStart/>
        </div>
    )
}
