import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";
import SingleProject from "./pages/singleProject/SingleProject";

import ScrollToTop from "./utils/scrollToTop";

import "./css/main.css";

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
