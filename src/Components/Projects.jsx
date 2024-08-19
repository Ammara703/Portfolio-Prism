import PropTypes from "prop-types";
import "../index.css";

export default function Projects(props) {
  return (
    <div className="showcase-card">
      <img
        src={props.img}
        alt="oops! your browser didn't support this image"
        className="showcase-img"
      />
      <div className="showcase-overlay">
        <a href={props.github} target="_blank" className="icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={props.view} target="_blank">
          <i className="fa-solid fa-eye"></i>
        </a>

        <h1 className="md-heading">{props.h1}</h1>
      </div>
    </div>
  );
}

Projects.propTypes = {
  img: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
