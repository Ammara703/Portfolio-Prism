import "../index.css";
import image from "../assets/pexels-pavel-danilyuk-5496464.jpg";
export default function About() {
  return (
    <div className="about text-black container" id="About">
      <img src={image} alt="" />
      <div className="about_content">
        <h1 className="lg-heading text-red">Profile Snapshot</h1>
        <p>
          As a Frontend Web Developer, I blend creativity with technical
          expertise to craft visually appealing and user-friendly websites. With
          a strong foundation in HTML, CSS, JavaScript, and React, I strive to
          deliver responsive and dynamic web experiences. My passion lies in
          turning innovative ideas into reality through clean, efficient code.
          <br></br>
          <br></br> I believe that the best websites are those that combine
          functionality with aesthetics, providing users with an enjoyable and
          intuitive experience. My goal is to create digital products that not
          only meet but exceed client expectations.<br></br>
          <br></br> Let&apos;s collaborate and bring your projects to life!
        </p>
      </div>
    </div>
  );
}
