import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <PageHero title="404 Error" currentLabel="404 Error" />

      <section className="error-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <img src="/assets/images/custom/404-error-img.png" alt="" />
              <h2>Something Went Wrong.</h2>
              <p>
                I apologize, but it seems like there's been an error. I've been
                notified, and I'm working diligently to resolve the issue.
              </p>
              <p>
                <Link className="theme-btn" to="/">
                  Back to Home <i className="ri-arrow-right-up-line"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
