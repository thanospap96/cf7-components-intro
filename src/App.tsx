// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import {ArrowFunctionalComponent} from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithType from "./components/ArrowFunctionalComponentWithType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
import Layout from "./components/Layout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Todo from "./components/Todo/Todo.tsx";

function App() {
  return (
      <>
        {/*<Layout>*/}
          {/*<ClassComponent/>*/}
          {/*    <FunctionalComponent/>*/}
          {/*    <ArrowFunctionalComponent/>*/}
          {/*    <ArrowFunctionalComponentWithType title="Is an Arrow Component with Thanos"*/}
          {/*    description="this is a description!"*/}
          {/*    />*/}
          {/*<CodingFactoryLogo/>*/}


          {/*<h1 className="text-center text-2xl font-bold">This is a heading1 title</h1>*/}
          {/*<FunctionalComponent/>*/}
          {/*<ClassComponentWithState/>        */}
          {/*<FunctionalComponentWithState/>*/}
          {/*<Counter/>*/}
          {/*<NameChanger/>*/}
          {/*<CounterWithMoreStates/>*/}
          {/*<CounterAdvanced/>*/}
          {/*<CounterWithCustomHook/>*/}
          {/* <Todo/>*/}
          {/*<OnlineStatus/>*/}

        <BrowserRouter>
           <Layout>
               <Routes>
                   <Route path ="/" element={<HomePage />}></Route>
                   <Route path="name-changer" element={<NameChangerPage/>}></Route>
               </Routes>
           </Layout>
       </BrowserRouter>

        {/*</Layout>*/}



      </>
  )
}
export default App
