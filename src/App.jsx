import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import QrGeneratorPage from "./pages/QrGeneratorPage"
import UrlShorter from "./pages/UrlShorter"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-generate" element={<QrGeneratorPage />} />
        <Route path="/url-shrink" element={<UrlShorter />} />
      </Routes>
    </Router>
  )
}

export default App
