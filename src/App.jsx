import Layout from "./components/Layout/Layout"
import {BrowserRouter , Router , Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import Manu from './pages/Manu'
import Contact from './pages/Contact'
import PagenotFound from './pages/PagenotFound'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Manu" element={<Manu />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="*PagenotFound" element={<PagenotFound />}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
