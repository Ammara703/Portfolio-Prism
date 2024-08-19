import "../index.css";
export default function Footer() {
  return (
    <div className="text-light footer">
      <p className="text-light footer-head">
        <a href="#Home">&lt;ammara aslam/&gt;</a>
      </p>
      <div className="footer-icons">
        <a href="mailto:ammaraaslam.work@gmail.com" target="_blank">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a
          href="https://linkedin.com/in/ammara-aslam-859ab3273"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/Ammara703" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <div className="footer-para">
        <p>&copy; all rights reserved by ammara aslam</p>
      </div>
    </div>
  );
}
