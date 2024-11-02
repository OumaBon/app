import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import CoreSkills from "../components/CoreSkills"
import WhatICanOffer from "../components/WhatICanOffer"


const AboutPage = () => {
  return (
      <div className="pt-24">
          <AboutMe />
          <CoreSkills />
          <WhatICanOffer />
          <ContactMe/>
    </div>
  )
}

export default AboutPage
