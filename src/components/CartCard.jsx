// react-icons
import { FaRegTrashAlt } from "react-icons/fa";

// components
import Input from "./Input";
import Button from "./Button";

const CartCard = () => {
  return (
    <div className="cartItem">
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
        <div className="itemCounter">
          <Button className="counterBtn">+</Button>
          <Input type="number" className="itemQuantity" value="1" />
          <Button className="counterBtn">-</Button>
        </div>
        <FaRegTrashAlt className="trashIcon" />
      </div>
    </div>
  );
};

export default CartCard;
