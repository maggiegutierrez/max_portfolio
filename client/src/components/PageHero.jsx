import { Link } from "react-router-dom";
import "./PageHero.css";

function PageHero({ title, parentLabel, currentLabel }) {
  return (
    <section className="single-page-hero-area">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-12">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
