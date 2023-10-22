import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default App;
