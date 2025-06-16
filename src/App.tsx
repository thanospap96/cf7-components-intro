// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import {ArrowFunctionalComponent} from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithType from "./components/ArrowFunctionalComponentWithType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

// import Layout from "./components/Layout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
// import FocusInput from "./components/FocusInput";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import UnControlledInput from "./components/UnControlledInput";
import UserPage from "./pages/UserPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
import FocusInput from "./components/FocusInput.tsx";
// import MultiFieldFormWithZodValidation from "./components/MultiFieldformWithZodValidation.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import ControlledInput from "./components/ControlledInput.tsx";
import MultiFieldFormWithReactHook from "@/components/MultiFieldformWithReactHook.tsx";
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

       {/* <BrowserRouter>*/}
       {/*    <Layout>*/}
       {/*        <Routes>*/}
       {/*            <Route path ="/" element={<HomePage />}></Route>*/}
       {/*            <Route path="name-changer" element={<NameChangerPage/>}></Route>*/}
       {/*        </Routes>*/}
       {/*    </Layout>*/}
       {/*</BrowserRouter>*/}


          <BrowserRouter>
              <Routes>
                  <Route element={<RouterLayout />}>
                      {/*<Route path="/" element={<HomePage />}/>*/}
                      {/*<Route index element={<HomePage />}/>*/}
                      {/*<Route index element={<FocusInput />}/>*/}
                      {/*<Route index element={<UnControlledInput />}/>*/}
                      {/*<Route index element={<MultiFieldForm/>}/>*/}
                      {/*<Route index element={<MultiFieldFormWithZodValidation/>}/>*/}
                      <Route index element={<MultiFieldFormWithReactHook/>} />
                      <Route path="users/:userId" element={<UserPage />}/>
                      <Route path="users" element={<UserPage />}/>
                  </Route>

                  {/*<Route path="examples?" >*/}
                  <Route path="examples"  element={<RouterExamplesLayout/>}>
                      <Route index element={<ExamplesPage/>}/>
                      <Route path="name-changer" element={<NameChangerPage/>}/>
                      <Route path="online-status" element={<OnlineStatusPage/>}/>
                      <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                      <Route path="controlled-input" element={<ControlledInput />}/>
                      <Route path="uncontrolled-input" element={<UnControlledInput />}/>
                      <Route path="focus-input" element={<FocusInput />}/>
                  </Route>

                  <Route path="users/:userId" element={<UserPage />}/>
                  <Route path="users" element={<UserPage />}/>
                  {/*<Route path="files/*" element={<FilePage/>}/>*/}
                  PATH: https://example.com/users/125/name/nick
                  QUERY: https://example.com/users?id=125&name=Nick
                  https://www.skroutz.gr/c/3074/pagomixanes/f/891854_891908_1066530/trima-epagelmatiki-101-200.html?price_max=3200.0&price_min=1400.001
                  <Route path="*" element={ <NotFoundPage/> } />


              </Routes>
          </BrowserRouter>

        {/*</Layout>*/}



      </>
  )
}
export default App
