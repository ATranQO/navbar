import Navbar from "./Navbar"
import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Pricing from "./pages/Pricing"





function App () {
  return (
    <>
  < Navbar />
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
    </>
  )
}

export default App
