import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              color: star <= (hoveredRating || rating) ? "gold" : "gray",
              fontSize: "24px"
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>Submit Rating</button>
    </div>
  );
}

// **Add PropTypes validation**
RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,   // Ensure productId is a required number
  onRatingSubmit: PropTypes.func.isRequired // Ensure onRatingSubmit is a required function
};

export default RatingWidget;