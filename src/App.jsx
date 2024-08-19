import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import project_data from "./project_data.jsx";
import Tools from "./Components/Tools.jsx";
import Acheivements from "./Components/Achievements.jsx";
import Acheivements_data from "./Achievements_data.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const project = project_data.map((item) => {
    return (
      <Projects
        key={item.id}
        img={item.img}
        h1={item.h1}
        view={item.view}
        github={item.github}
      />
    );
  });

  const achievements = Acheivements_data.map((item) => {
    return (
      <Acheivements
        key={item.id}
        img={item.img}
        h1={item.h1}
        view={item.view}
      />
    );
  });

  return (
    <>
      <Header />
      <About />

      {/*---------------- Projects------------------- */}
      <div className="container text-red" id="Projects">
        <h1 className="lg-heading showcase-heading">Project Gallery</h1>
        <div className="showcase-section">
          <Slider
            // centerMode={true}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            arrows={true}
          >
            {project}
          </Slider>
        </div>
      </div>
      <Tools />
      {/*---------------- Achievements------------------- */}
      <div className="container text-red" id="Achievements">
        <h1 className="lg-heading showcase-heading">Certificates</h1>
        <div className="showcase-section">
          <Slider
            // centerMode={true}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            arrows={true}
          >
            {achievements}
          </Slider>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
