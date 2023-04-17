import { FaStar } from "react-icons/fa";

const FavoriteCard = () => {
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
        <FaStar className="trashIcon" fill="#fdc527" />
      </div>
    </div>
  );
};

export default FavoriteCard;
