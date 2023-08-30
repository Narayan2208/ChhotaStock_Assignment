import React from 'react'
import Topnav from '../components/Topnav'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Firstbody from '../components/Firstbody'
import Essential from '../components/Essential'
import Investing from '../components/Investing'
import Partners from '../components/Partners'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
<Topnav/>
<Navbar/>
<HeroImage/>
<Firstbody/>
<Essential/>
<Investing/>
<Partners/>
<Reviews/>
<Footer/>
    </div>
  )
}

export default Home
