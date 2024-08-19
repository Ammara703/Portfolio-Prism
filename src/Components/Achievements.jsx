import PropTypes from "prop-types";
import "../index.css";

export default function Acheivements(props) {
  return (
    <div className="showcase-card certificate-card" id="Acheivements">
      <a href={props.img} target="_blank" rel="noopener noreferrer">
        <img
          src={props.img}
          alt="oops! your browser didn't support this image"
          className="showcase-img certificate-img"
        />
      </a>
    </div>
  );
}

Acheivements.propTypes = {
  img: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
};
