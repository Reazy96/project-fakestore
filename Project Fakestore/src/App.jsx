import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Produktlist from "./pages/Produktlist/Produktlist";
import Productdetails from "./pages/Productdetails/Productdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/allProducts" element={<Produktlist />} />
        <Route path="/allProducts/:id" element={<Productdetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
