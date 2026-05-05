import React from 'react'
import Navbar from '../components/Navbar'
import Body_Home from '../components/home_page_components/Body_Home'
import Footer from '../components/home_page_components/Footer'
import Feature_Section from '../components/home_page_components/Feature_Section'
import { MapPin, User, CheckCircle, BarChart } from "lucide-react"

const Home = () => {
  return (
    <div className="app-container">

      <Navbar />

      <div className="main-content">
        <Body_Home />

        <div className="features-container">
          <Feature_Section
            icon={MapPin}
            title="Report"
            description="Report issues easily"
          />

          <Feature_Section
            icon={User}
            title="Track"
            description="Track status in real-time"
          />

          <Feature_Section
            icon={CheckCircle}
            title="Resolve"
            description="We resolve issues faster"
          />

          <Feature_Section
            icon={BarChart}
            title="Better City"
            description="Together we build a better city"
          />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home