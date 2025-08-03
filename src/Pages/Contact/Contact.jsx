import React, { useState } from "react";
import { CiMap } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Contact.css";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    massge: "",
  });
  const [mss, setMss] = useState(false);
  // handel chanege state
  const handelstateChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  // handel submit
  const handelSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6fesb87",
        "template_spjjjza",
        {
          from_name: state.name,
          from_email: state.email,
          subject: state.subject,
          message: state.massge,
        },
        "u-JMe5Ds6I_OVZ_hy"
      )
      .then(() => {
        setMss(true);
        setState({ name: "", email: "", subject: "", massge: "" });
        setTimeout(() => setMss(false), 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact container">
      <h2 className="title">
        Contact <span>me</span>
      </h2>
      <form onSubmit={handelSubmit} className="contact_content">
        <div className="contact_left">
          <div className="left_ele">
            <span className="icon">
              <CiMap />
            </span>
            <div className="text">
              <h3>Address</h3>
              <p className="text_p">Cairo,Egypt</p>
            </div>
          </div>

          <div className="left_ele">
            <span className="icon">
              <RiUser3Line />
            </span>
            <div className="text">
              <h3>Freelance</h3>
              <p className="text_p">Available Right Now</p>
            </div>
          </div>
          <div className="left_ele">
            <span className="icon">
              <CiMail />
            </span>
            <div className="text">
              <h3>Email</h3>
              <p className="text_p">Ebraheemhany2004@gmail.com</p>
            </div>
          </div>
          <div className="left_ele">
            <span className="icon">
              <MdOutlinePhoneAndroid />
            </span>
            <div className="text">
              <h3>Phone</h3>
              <p className="text_p">(+20) 1050-931-447</p>
            </div>
          </div>
        </div>
        <div className="contact_right">
          <div className="contact_massege">
            <div className="email_name">
              <input
                name="name"
                value={state.name}
                onChange={handelstateChange}
                type="text"
                placeholder="Enter Your full name"
                required
              />
             
              <input
                name="email"
                value={state.email}
                onChange={handelstateChange}
                type="text"
                placeholder="Enter Your email Address"
                required
              />
            </div>

            <input
              name="subject"
              value={state.subject}
              onChange={handelstateChange}
              type="text"
              placeholder="Your Subject"
              
            />

            <textarea
              name="massge"
              value={state.massge}
              onChange={handelstateChange}
              type="text"
              placeholder="Your Messge"
              required
            />
          </div>
          {mss && <p className="mss">Your message has been sent successfully</p>}
          <button type="submit" className="botton">
            Send Massege{" "}
            <span className="botton-icon">
              <RiSendPlaneFill />
            </span>{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
