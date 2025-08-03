import "./contact.css"
import { MdMail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <MdMail className="contact-icon" /> Contact us
      </h1>
      <p className="subtitle">Contact us for more information and Get notification when I publish something new</p>
      <div className="contact-box">
        <form action="">
          <div className="group-form">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" required/>
          </div>
          <div className="group-form" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea id="message" required/>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="animation"></div>
      </div>
    </section>
  )
}
