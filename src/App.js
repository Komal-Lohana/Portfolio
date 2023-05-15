import { useContext } from "react";
import React, { useRef } from 'react';
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productlist/productlist";
import Toggle from "./components/toggle/toggle";
import Footer from "./components/footer/footer";
import { ThemeContext } from "./context";

const App = () => {
  const contactFormRef = useRef(null);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      
      }}
    >
      <Toggle />
      <Intro  contactFormRef={contactFormRef}/>
      <About />
      <ProductList />
      <Contact ref={contactFormRef}/>
      <Footer/>
    </div>
  );
};

export default App;