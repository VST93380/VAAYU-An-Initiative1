import React from "react";
import "./App.css";
import "./login.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Attractions from "./components/Attractions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
