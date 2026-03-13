import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import Problem from "./sections/Problem"
import Features from "./sections/Features"
import Mobile from "./sections/Mobile"
import Waitlist from "./sections/Waitlist"
import Carousel from "./sections/Carousel"

export default function App() {

  return (
    <div className="bg-macchiato-crust text-macchiato-text min-h-screen">

      <Navbar />

      <Hero />
      <Carousel />

      <Problem />

      <Features />

      <Mobile />

      <Waitlist />

      <Footer />

    </div>
  )

}
