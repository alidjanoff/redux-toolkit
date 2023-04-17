import CartCard from "../components/CartCard";

const Cart = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <h2>Cart Page</h2>
          <div className="cartTable">
            <CartCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
