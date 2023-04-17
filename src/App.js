// Router
import { Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/product-details/:productID"
          element={<ProductDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
