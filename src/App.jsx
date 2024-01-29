import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import AllProjects from "./pages/AllProjects";
import About from "./pages/About";

import ContactForm from "./pages/ContactForm";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Projects from "./pages/Projects";

function App() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [hasAllProjects, setHasAllProjects] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setHasAllProjects(currentUrl.includes("/allprojects"));
  }, [currentUrl]);

  if (hasAllProjects) {
    console.log("yes it is working");
  }

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar hasAllProjects={hasAllProjects} />
          <div className="wrapper min-h-[100vh] w-full mt-[10vh]  bg-[#191924]">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/allprojects" element={<AllProjects />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
