import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Tiles from "./Components/Tiles/Tiles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import arrivals from "./Pages/arrivals";
import collection from "./Pages/collection";
import login from "./Pages/login";
import cart from "./Pages/cart";
import product from "./Pages/product";
import Hero from "./Components/Hero/Hero";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/arrivals" element={<arrivals />} />
          <Route path="/collections" element={<collection />} />
          <Route path="/login" element={<login />} />
          <Route path="/cart" element={<cart />} />
          <Route path="/product" element={<product />}>
            <Route path=":productId" element={<product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
