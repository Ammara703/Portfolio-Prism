import "../index.css";
export default function Tools() {
  return (
    <div className="container" id="Tools">
      <h1 className="lg-heading text-red tools_heading">Tech Stack</h1>

      <div className="tooltip">
        <img
          className="tools-img"
          src="./tools_images/html--logo.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">HTML5</span>
      </div>
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/css-logo.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">CSS3</span>
      </div>
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/js-logo.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">Javascript</span>
      </div>
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/bootstrap-logo.jpg"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">Bootstrap</span>
      </div>
      <br />
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/react-logo.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">React JS</span>
      </div>
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/visual studio logo.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">VS Code</span>
      </div>
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/Figma-logo.svg.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">Figma</span>
      </div>
      <div className="tooltip">
        <img
          className="tools-img tooltip"
          src="./tools_images/github-logo.png"
          alt="oops! your browser didn't support this image."
        />
        <span className="tooltiptext">Github</span>
      </div>
    </div>
  );
}
