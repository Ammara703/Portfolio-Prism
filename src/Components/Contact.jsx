import "../index.css";

export default function Contact() {
  return (
    <div className="contact text-black container" id="Contact">
      <div className="contact-side">
        <section className="contact-info">
          <i className="fa-solid fa-location-dot"></i>
          <h3>Address</h3>
          <p>SethiBagh, Muzaffarbad, AJK</p>
        </section>
        <section className="contact-info">
          <i className="fa-solid fa-phone"></i>
          <h3>Phone</h3>
          <p>+92 311 0973509</p>
        </section>
        <section className="contact-info">
          <i className="fa-solid fa-envelope"></i>
          <h3>Email</h3>
          <p>ammaraaslam.work@gmail.com</p>
        </section>
      </div>
      <hr />
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-form"
      >
        <input
          type="hidden"
          name="access_key"
          value="9e38623d-5b9a-4347-8032-7a0fb5a77d5c"
        ></input>
        <h1 className="text-red">Get in Touch</h1>
        <p>
          I&apos;d love to hear from you — drop me a message and let&apos;s
          connect!
        </p>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Enter Your Full Name"
          required
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
        />{" "}
        <br />
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Enter Your Message"
          required
        />{" "}
        <br />
        <button type="submit" className="btn1 btn2">
          Send Message
        </button>
      </form>
    </div>
  );
}
