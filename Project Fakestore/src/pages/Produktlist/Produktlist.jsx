import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Produktlist.css";

const Produktlist = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respo) => respo.json())
      .then((allData) => setProducts(allData))
      .catch((err) => console.error("Fehler in der List-Fetch", err));
  }, []);

  return (
    <>
      <h1>All Products</h1>
      <section className="all-products">
        {products ? (
          products.map((singleProduct, index) => (
            <div key={index}>
              <img src={singleProduct.image} alt="bild" />
              <h2>{singleProduct.title}</h2>
              <Link to={`/allProducts/${singleProduct.id}`}>Zu dem Produkt</Link>
            </div>
          ))
        ) : (
          <p>einen Moment...</p>
        )}
      </section>
    </>
  );
};

export default Produktlist;
