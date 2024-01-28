import AboutSection from "./components/AboutSection"
import ClientSection from "./components/ClientSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InfoSection from "./components/InfoSection"
import ServiceSection from "./components/ServiceSection"
import TeamSection from "./components/TeamSection"
import WhyUs from "./components/WhyUs"

function App() {
  return (
      <>
        <Header/>
        <ServiceSection/>
        <AboutSection/>
        <WhyUs/>
        <TeamSection/>
        <ClientSection/>
        <InfoSection/>
        <Footer/>
      </>
  )
}

export default App
