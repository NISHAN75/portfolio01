import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/Pages/About/About";
import Blogs from "./components/Pages/Blogs/Blogs";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Pages/Footer/Footer";
import Header from "./components/Pages/Header/Header";
import Home from './components/Pages/Home/Home';
import NotFound from "./components/Pages/NotFound/NotFound";
import Projects from "./components/Pages/Projects/Projects";

function App() {
  return (
    <div className="mx-12">
        <Header></Header>
      <Routes>
      
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
       
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
