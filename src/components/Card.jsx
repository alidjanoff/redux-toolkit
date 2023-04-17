import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="con-star">
        <FaRegStar />
        {/* <FaStar fill="#fdc527" /> */}
      </div>
      <Link to="/product-details">
        <div className="con-image">
          <img
            className="img"
            src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/1.png"
            alt=""
          />
          <img
            className="bg"
            src="https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/1.png"
            alt=""
          />
        </div>
        <div className="con-text">
          <h3>Training shoes</h3>
          <p>The Nike SuperRep Go shoes combine comfortable foam cushioning,</p>
        </div>
        <div className="con-price">129.99 $</div>
      </Link>
      <div className="con-btn">
        <button className="add">Add to cart</button>
        <div className="con-input-btns">
          <button className="less">-</button>
          <input value="1" type="number" />
          <button className="plus">+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
