import PageHero from "../../components/PageHero";
import { useApiData } from "../../hooks/useApiData";
import "./WebDevelopment.css";

function WebDevelopment() {
  const { data: projects, status } = useApiData("/projects");

  return (
    <>
      <PageHero
        title="Web Development"
        parentLabel="Services"
        currentLabel="Web Development"
      />

      <section className="blog-area">
        <div className="container">
          {status === "loading" && (
            <p className="text-center">Loading projects...</p>
          )}
          {status === "error" && (
            <p className="text-center">
              Couldn't load projects. Try again later.
            </p>
          )}

          <div className="row">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project._id}>
                <div className="blog-post-box">
                  <div className="blog-post-img">
                    <img src={project.thumbnailUrl} alt={project.title} />
                  </div>
                  <div className="blog-post-caption">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a
                      className="theme-btn"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code <i className="ri-github-line"></i>
                    </a>
                    <a
                      className="theme-btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live <i className="ri-external-link-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevelopment;
