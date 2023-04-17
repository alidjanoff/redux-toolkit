// router
import { Link } from "react-router-dom";

// react-icons
import { FaRegStar, FaStar } from "react-icons/fa";

// components
import Input from "./Input";
import Button from "./Button";

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
        <Button className="add">Add to cart</Button>
        <div className="con-input-btns">
          <Button className="less">-</Button>
          <Input value="1" type="number" />
          <Button className="plus">+</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
