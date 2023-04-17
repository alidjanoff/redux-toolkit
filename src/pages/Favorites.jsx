// components
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <h2>Favorites</h2>
          <div className="cartTable">
            <FavoriteCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
