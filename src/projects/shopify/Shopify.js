import InformationArchitecture from "./design/InformationArchitecture"
import ProjectBrief from "./design/ProjectBrief"
import Prototyping from "./design/Prototyping"
import Research from "./design/Research"
import UserPersona from "./design/UserPersona"
import VisualDesign from "./design/VisualDesign"
import Wireframing from "./design/Wireframing"
import APIIntegration from "./frontend/APIIntergration"
import BuildingComponents from "./frontend/BuildingComponents"
import DeploymentCard from "./frontend/DeploymentCard"
import DevelopmentEnvironment from "./frontend/DevelopmentEnvironment"
import MaintenanceUpdatesCard from "./frontend/Maintanance"
import OptimizationTuningCard from "./frontend/Performance"
import Testing from "./frontend/Testing"


const Shopify = () => {
  return (
      <div>
          <ProjectBrief />
          <Research />
          <UserPersona />
          <InformationArchitecture/>
          <Wireframing />
          <VisualDesign />
          <Prototyping />
      <DevelopmentEnvironment />
      <BuildingComponents />
      <APIIntegration />
      <Testing />
      <OptimizationTuningCard />
      <DeploymentCard />
      <MaintenanceUpdatesCard/>
      
    </div>
  )
}

export default Shopify
