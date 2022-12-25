import "./Home.css";

function Home() {
  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row homeStarter">
        <div className="col-md-6 col-sm-12">
          <h4 className="myGreeting">Hello, This is Me...</h4>
          <h2 className="myName">Fabien Thich</h2>
          <div className="myStatus">Software Engineer Intern For North P&D, Inc.</div>
          <div>
            <a href="https://www.linkedin.com/in/fabienthich">
              <img
                className="socials"
                src="portfolio/assets/LinkedIn.svg"
              />
            </a>
            <a href="https://github.com/FabienThich">
              <img
                className="socials"
                src="portfolio/assets/GitHub.svg"
              />
            </a>
          </div>
          <a /**download="Resume.pdf"**/>
            <button className="btn btn-primary rounded-pill download">
              Download Resume
            </button>
          </a>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home;
