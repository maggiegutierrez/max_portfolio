function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top">
              <p>Have a project in mind?</p>
              <h2>
                <a href="mailto:maggie.contacto@icloud.com">
                  maggie.contacto@icloud.com
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <p className="copy-left-text">
              Maggie Gutierrez — Full Stack Developer
            </p>
          </div>
          <div className="col-lg-6 col-sm-6">
            <p className="copy-right-text">
              &copy; Copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
