// react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Layout from "./components/layout/layout.jsx";
import Favorites from "./pages/favorites/favorites.jsx";
import Home from "./pages/home/home.jsx";
import Search from "./pages/search/search.jsx";
// styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
