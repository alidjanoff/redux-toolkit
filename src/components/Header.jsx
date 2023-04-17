import { useState, useRef, useEffect } from "react";

// router
import { Link, NavLink } from "react-router-dom";

// react-icons
import { FaUser, FaShoppingBag, FaRegTrashAlt, FaStar } from "react-icons/fa";

const Header = () => {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  // detect outside click
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setCartIsOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">MyShop</Link>
          </div>
          <nav className="navBar">
            <ul className={isOpen ? "navList active" : "navList"}>
              <li className="navItem">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </nav>
          <div className="userArea">
            <div className="favoritesIcon">
              <Link to="/favorites">
                <FaStar />
              </Link>
            </div>
            <div
              className="cartIcon"
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              <FaShoppingBag />
              <span className="cartCount">0</span>
            </div>
            <div className="userIcon">
              <Link to="/login">
                <FaUser />
              </Link>
            </div>
            <ul
              ref={ref}
              className={cartIsOpen ? "cartDropDown active" : "cartDropDown"}
            >
              <div className="emptyCart">
                <p>Cart Is Empty</p>
                <Link to="/shop">Let's shopping...</Link>
              </div>
              <li className="cartDropItem">
                <div className="imgBox">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/2016/06/Adidas-Shoes-Free-Download-PNG.png"
                    alt=""
                  />
                </div>
                <div className="infoBox">
                  <h4 className="itemTitle">Title</h4>
                  <p className="itemInfo">Info</p>
                  <span className="itemPrice">Price: 999 $</span>
                  <span className="itemQuantity">Quantity: 0</span>
                </div>
                <FaRegTrashAlt className="trashIcon" />
              </li>
              <div className="cartBtn">
                <Link to="/cart">View Cart</Link>
              </div>
            </ul>
          </div>
          <div className="burgerMenu" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
