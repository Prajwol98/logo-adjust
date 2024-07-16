import { useState } from "react";
import "./App.css";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
// import MainBody from "./components/MainBody";
import SideNav from "./components/SideNav";
function App() {
  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <>
      <Header></Header>
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)}></SideNav>
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-3">
          {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3">{/* <h1>hello</h1> */}</div>
        {/* <MainBody></MainBody> */}
      </div>
    </>
  );
}

export default App;
