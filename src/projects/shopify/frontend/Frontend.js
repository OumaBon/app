import BuildingComponents from "./BuildingComponents"
import DeploymentCard from "./DeploymentCard"
import DevelopmentEnvironment from "./DevelopmentEnvironment"
import Testing from "./Testing"

const Frontend = () => {
  return (
      <div>
          <DevelopmentEnvironment />
          <BuildingComponents />
          <Testing />
          <DeploymentCard/>
    </div>
  )
}

export default Frontend
