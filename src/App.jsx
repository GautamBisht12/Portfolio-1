import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="wrapper min-h-[100vh] w-full mt-[10vh]  bg-[#191924]">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/allprojects" element={<AllProjects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
