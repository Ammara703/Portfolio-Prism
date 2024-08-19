import "../index.css";
export default function Header() {
  return (
    <div className="header text-light">
      <nav>
        <p className="text-light">
          <a href="#Home">&lt;ammara aslam/&gt;</a>
        </p>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Tools">Tools</a>
          </li>
          <li>
            <a href="#Achievements">Achievements</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <a
          href="./AmmaraAslam-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn1">Download CV</button>
        </a>
      </nav>
      <main>
        <div className="hero_section " id="Home">
          <h1 className="lg-heading ">
            Hi, I&apos;m Ammara. <br></br>a Frontend Developer
          </h1>
          <p className="md_heading">
            Designing elegant and intuitive websites that captivate users.
          </p>
          <button id="" className="btn1 btn2">
            <a href="#Contact">Let&apos;s Connect</a>
          </button>
        </div>
      </main>
    </div>
  );
}
