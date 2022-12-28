import "./Home.css";
import { scroller } from "react-scroll";

function Home() {
  return (
    <div className="container">
      <div className="row homeStarter">
        <div className="col-md-6 col-sm-12">
          <h4 className="myGreeting">Hello, This is Me...</h4>
          <h2 className="myName">Fabien Thich</h2>
          <div className="myStatus">
            Software Engineer Intern For North P&D, Inc.
          </div>

          <div className="col socialSpace">
            <a href="https://www.linkedin.com/in/fabienthich">
              <img className="socials" src="portfolio/assets/LinkedIn.svg" />
            </a>
            <a href="https://github.com/FabienThich">
              <img className="socials" src="portfolio/assets/GitHub.svg" />
            </a>
          </div>

          {/* rearrange classnames, i.e, download, socials, links css */}

          <div className="col getInTouchSpace">
            <a
              onClick={() => {
                scroller.scrollTo("contact", {
                  duration: 0,
                  smooth: true,
                  spy: true,
                  offset: -85,
                });
              }}
            >
              <button className="border border-primary btn btn-primary rounded-pill getInTouch">
                Get In Touch 👋
              </button>
            </a>
            {/* <a download="Resume.pdf">
              <button className="btn btn-primary rounded-pill download">
                Download Resume
              </button>
            </a> */}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home;
