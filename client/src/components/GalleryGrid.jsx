function GalleryGrid({ items }) {
  return (
    <div className="projects-area" id="projects">
      <div className="container-fluid">
        <div className="row g-4 portfolio-grid">
          {items.map((item) => (
            <div className="col-md-6 col-xl-6 portfolio-item" key={item._id}>
              <div className="portfolio-box">
                <img src={item.imageUrl} alt={item.title} />
                <span className="portfolio-category">{item.category}</span>
                <div className="portfolio-caption">
                  <h1>{item.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;
