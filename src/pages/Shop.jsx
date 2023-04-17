import Card from "../components/Card";

const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <h2>Shop Page</h2>
          <div className="shopBox">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
