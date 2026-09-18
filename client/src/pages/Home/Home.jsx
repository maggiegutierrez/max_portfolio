import { Link } from "react-router-dom";
import CounterItem from "../../components/CounterItem";
import "./Home.css";

const technologies = [
  "css.png",
  "html.png",
  "javascript.png",
  "expressjs.png",
  "mongodb.png",
  "ilustrator.png",
  "photoshop.png",
  "lightroom.png",
  "react.png",
  "github.png",
  "npm.png",
  "VSC.png",
];

const services = [
  { number: "01", title: "Web Development", href: "/services/web-development" },
  { number: "02", title: "Graphic Design", href: "/services/graphic-design" },
  { number: "03", title: "Photography", href: "/services/photography" },
];

function Home() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <img src="/assets/images/about/me.jpg" alt="Maggie Gutierrez" />
                <h2>
                  Full Stack <br /> Developer
                </h2>
                <p>
                  Hi, I'm Maggie, a fullstack web developer, graphic designer,
                  and photographer dedicated to building clean and usable
                  digital experiences.
                </p>
                <Link className="theme-btn" to="/about">
                  Get In touch
                </Link>
              </div>

              <div className="company-list">
                <div
                  className="scroller"
                  data-direction="left"
                  data-speed="slow"
                  data-animated="true"
                >
                  <div className="scroller__inner">
                    {[...technologies, ...technologies].map((logo, index) => (
                      <img
                        key={`${logo}-${index}`}
                        src={`/assets/images/client-logos/${logo}`}
                        alt="Company"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service.href}>
                <Link to={service.href} className="service-item">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>{service.number}</h5>
                  <h4>{service.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-white-title">
                <h2>About Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 about-image">
              <img src="/assets/images/about/me.jpg" alt="Maggie Gutierrez" />
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="about-content-part">
                <p>
                  I'm Maggie Gutiérrez, a passionate FullStack web developer
                  with a strong background in graphic design and communication
                  sciences. My curiosity drives me to explore new technologies
                  and create innovative solutions.
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between">
                <CounterItem
                  target={6}
                  suffixClass="plus"
                  label="Months Of Experience"
                />
                <CounterItem target={3} label="Complete Projects" />
                <CounterItem
                  target={90}
                  suffixClass="percent"
                  label="Client Satisfactions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
