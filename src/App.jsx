import  { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1377&hei=2057&fmt=jpeg&qlt=95&.v=1741643688229",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://cdn.mos.cms.futurecdn.net/FkGweMeB7hdPgaSFQdgsfj.jpg",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://avstore.in/cdn/shop/files/2.AVStore-JBL-PartyBox-110-160W-Portable-Wireless-Speaker-Front-Left-Angled-View.jpg?v=1682411625&width=2000",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
}

export default App;