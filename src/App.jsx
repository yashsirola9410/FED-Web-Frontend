import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";
import Events from "./Pages/Events";
import Podcasts from "./Pages/Podcasts";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <NavMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
