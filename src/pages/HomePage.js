
import CoreSkills from "../components/CoreSkills"
import ContactMe from "../components/ContactMe"
import ListProjects from "../components/ListProjects"



const HomePage = () => {
  return (
    <>
      <div className="">
        <ListProjects/>
        <CoreSkills />
      <ContactMe/>
      </div>
    </>
  )
}

export default HomePage
