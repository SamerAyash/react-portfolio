import Hero from "./components/hero/Hero"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { MdKeyboardArrowUp  } from "react-icons/md";
import { useEffect, useState } from "react"
import ThemeProvider from "./context/ThemeContext";

function App() {
  const [showScrollBtn, setShowScrollBtn]= useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",() => {

      if(window.scrollY >= 300){
        setShowScrollBtn(true)
      }
      else{
        setShowScrollBtn(false)
      }
    });
  },[]);
  return (
    <ThemeProvider>
      <div id="hero" className="container">
      <Header />
      <div className="divider"/>
      <Hero/>
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Footer/>
      <button 
      style={{opacity: showScrollBtn? 1:0, transition: "1s"}}
      onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}}
      id="scroll-top"><MdKeyboardArrowUp/></button>
      </div>
    </ThemeProvider>
  )
}

export default App
