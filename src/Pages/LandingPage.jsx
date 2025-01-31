import React from 'react'

import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutSection from '../Components/AboutSection'
import MyWorkSection from '../Components/MyWorkSection'
import CertificationsSection from '../Components/CertificateSection'
import ContactSection from '../Components/ContactSection'
import Footer from '../Components/Footer'
import WhatsAppChat from '../Components/WhatsappChat'


function LandingPage() {
  return (
    <div>
      {/* <Navsbar /> */}
        <WhatsAppChat />
      <Navbar />
      <Hero />
      <AboutSection />
      <MyWorkSection />
      <CertificationsSection />
      <ContactSection />
      <Footer /> 
       <WhatsAppChat />
    </div>
  )
}

export default LandingPage
