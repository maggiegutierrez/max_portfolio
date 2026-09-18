import CounterItem from "../../components/CounterItem";
import "./About.css";

function About() {
  return (
    <>
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

              <div className="about-social">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/maggie-gutierrez/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/maggiegutierrez"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-github-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-area" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="resume-wrapper">
                <div className="resume-box">
                  <span className="resume-date">2025 - Present</span>
                  <h2>Web Development (FullStack)</h2>
                  <span>@ TripleTen Bootcamp</span>
                  <p>
                    Learning through real experience making a few projects every
                    time we add a new language. I've worked with HTML, CSS,
                    JavaScript, React, NodeJS, ExpressJS, MongoDB and Python. I
                    am currently learning TypeScript and NextJS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="resume-wrapper">
                <div className="resume-box">
                  <span className="resume-date">2017 - 2020</span>
                  <h2>
                    BACHELOR'S DEGREE OF COMMUNICATION SCIENCES AND TECHNIQUES
                  </h2>
                  <span>@ Universidad Interamericana para el Desarrollo</span>
                  <p>
                    Efective verbal, visual, auditive and written communication.
                    Editorial design, graphic design, web design, audiovisual
                    production and photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
