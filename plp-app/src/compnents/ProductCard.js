import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image"/>
      <div className="info-like-container">
      <div className="card-info">
        <h4>{product.title.slice(0, 25)}...</h4>
        <p>Sign in or create an account to see pricing</p>
      </div>
      <span
        className={`heart ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        {!liked?(<CiHeart />):(<FaHeart  className="like"/>)}
        
      </span>
      </div>
    </div>
  );
};
export default ProductCard;
