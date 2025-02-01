import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Tattoos from "./pages/Tattoos";
import Commissions from "./pages/Commissions";
import Publications from "./pages/Publications";
import Paints from "./pages/Paints";
import Navigation from "./Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/paints" element={<Paints />} />
        <Route path="/tattoos" element={<Tattoos />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
