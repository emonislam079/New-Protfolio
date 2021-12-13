import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/ContactForm';
import Projects from './Component/Project/Projects';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
