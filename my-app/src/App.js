import "./css/main.css"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";
import SingleProject from "./pages/singleProject/SingleProject";

export default function App() {
  return (
    <div>

      <Navbar />

      {/* <Home /> */}

      {/* <Projects /> */}

      <SingleProject />
      {/* <Contacts /> */}

      <Footer />
    </div>
  );
}

