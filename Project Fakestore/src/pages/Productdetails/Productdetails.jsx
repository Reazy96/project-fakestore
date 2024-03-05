import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Productdetails.css";

const Productdetails = () => {
  const [detail, setDetail] = useState([]);
  const [filterdData, setFilterData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((detailData) => setDetail(detailData))
      .catch((err) => console.error("Fehler auf der Detail-Fetch", err));
  }, []);

  const { id } = useParams();
  useEffect(() => {
    const find = detail.find((item) => Number(item.id) === Number(id));
    setFilterData(find);
  }, [detail]);

  return (
    <section>
      <h1>Details</h1>
      {filterdData ? (
        <div className="detail">
          <h1>{filterdData.title}</h1>
          <img src={filterdData.image} alt="" />
          <p>{filterdData.description}</p>
          <h3>{filterdData.price} €</h3>
        </div>
      ) : (
        <p>Laden...</p>
      )}
    </section>
  );
};

export default Productdetails;
