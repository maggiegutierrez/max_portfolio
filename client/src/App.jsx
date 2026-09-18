import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import WebDevelopment from "./pages/Services/WebDevelopment.jsx";
import GraphicDesign from "./pages/Services/GraphicDesign.jsx";
import Photography from "./pages/Services/Photography.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/photography" element={<Photography />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
