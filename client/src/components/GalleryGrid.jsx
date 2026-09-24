import "./GalleryGrid.css";

function GalleryGrid({ items }) {
  return (
    <div className="projects-area" id="projects">
      <div className="container-fluid">
        <div className="row g-3 portfolio-grid">
          {items.map((item) => (
            <div
              className="col-6 col-md-4 col-lg-3 portfolio-item"
              key={item._id}
            >
              <div className="portfolio-box">
                <img src={item.imageUrl} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;
