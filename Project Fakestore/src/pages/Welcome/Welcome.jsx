import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1>Welcome to my Trashshop</h1>
      <Link to="/allProducts"> to the Shop </Link>
    </section>
  );
};

export default Welcome;
