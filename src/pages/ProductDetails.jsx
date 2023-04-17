const ProductDetails = () => {
  return (
    <section className="productDetails">
      <div className="container">
        <div className="row">
          <h2>Product Details</h2>
          <div className="detailsBox">
            <div className="leftSide">
              <img
                src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/1.png"
                alt=""
              />
            </div>
            <div className="rightSide">
              <h2 className="productTitle">Title</h2>
              <p className="productInfo">Info</p>
              <p className="productPrice">Price: 0 $</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
