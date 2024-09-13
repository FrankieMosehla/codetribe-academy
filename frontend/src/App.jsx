import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Home from "./components/pages/Home/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./components/pages/Signup/signup"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
