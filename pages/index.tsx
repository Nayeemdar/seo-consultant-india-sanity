import { SpeedInsights } from "@vercel/speed-insights/next";
import Hero from '../components/HeroSection'
import Header from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'
import Caursal from '../components/CaursalLogos'
import Timeline from "../components/Timeline";
import Accordion from "../components/FaqSection";
import Content from "../components/ContentSection";
import Calan from "../components/PopUp";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
   <>
   <SpeedInsights/>
   <Analytics />
<Header/>
<Hero/>
<Caursal/>
<About/>
<Timeline/>
<Calan/>
<Content/>
<Service/>
<Accordion/>
<Testimonials/>
<Contact/>
<Footer/>
   </>
  )
}


