import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import About from "./Components/Pages/About";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Pages/Footer";
// import TopNavigation from "./Components/TopNavigation/TopNavigation";

function App() {

  return (
    <Router>
      {/*<TopNavigation />*/}
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
