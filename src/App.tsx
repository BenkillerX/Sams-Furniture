import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import ScrollToTop from "./ScrollToTop"
import ScrollToTopButton from "./ScrollToTopButton"

function App() {

  return (
    <>
    <ScrollToTop/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      <ScrollToTopButton />
    </>
  )
}

export default App
