
import PropTypes from "prop-types";  // Import PropTypes
import RatingWidget from "./RatingWidget";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "10px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px" }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} ⭐ ({product.totalRatings} ratings)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

// Add PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;