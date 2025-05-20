import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import {ArrowFunctionalComponent} from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithType from "./components/ArrowFunctionalComponentWithType.tsx";
function App() {

  return (
    <>
    <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithType title="Is an Arrow Component with Thanos"
        description="this is a description!"
        />
    </>
  )
}

export default App
