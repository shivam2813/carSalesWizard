/* 

Developed by Shivam Arora

on 29 Oct,2025
*/

//lib
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//component

//context

//css
import "./contactComponent.css";
import { useEffect, useState } from "react";

const ContactComponent = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleOnChange = (e, field) => {
    try {
      setContactData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    } catch (e) {
      console.log("Error occured:", e);
    }
  };

  useEffect(() => {
    try {
      let isMounted = true;
      if (isMounted) {
        console.log(contactData);
      }
    } catch (e) {
      console.log("Error occured", e);
    }
  }, [contactData]);

  return (
    <div id="contact" className="contactComponent-wrapper">
      <div className="contactComponent-container">
        <Typography variant="h2" className="contactComponent-title">
          Ready to Connect
        </Typography>
        <Typography variant="p" className="contactComponent-subtitle">
          Reach out directly to Sahil Kapoor for personalized advice on vehicles
          or insurance policies.
        </Typography>
        <div className="contactComponent-formWrapper">
          <div className="contactComponent-formTitle">Contact Sahil</div>
          <form className="contactComponent-form">
            <div className="contactComponent-field">
              <label htmlFor="name" className="contactComponent-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="contactComponent-input"
                required
                value={contactData.username}
                onChange={(e) => {
                  handleOnChange(e, "username");
                }}
              />
            </div>
            <div className="contactComponent-field">
              <label htmlFor="email" className="contactComponent-label">
                Email
              </label>
              <input
                type="text"
                id="emailAddress"
                name="emailAddress"
                placeholder="Enter your email"
                className="contactComponent-input"
                required
                value={contactData.email}
                onChange={(e) => {
                  handleOnChange(e, "email");
                }}
              />
            </div>
            <div className="contactComponent-field">
              <label htmlFor="service" className="contactComponent-label">
                Interested In
              </label>
              <select
                id="service"
                name="service"
                className="contactComponent-input"
                required
                value={contactData.interest}
                onChange={(e) => {
                  handleOnChange(e, "interest");
                }}
              >
                <option value="">-- Select One --</option>
                <option value="Car Sales">Car Sales (Buying/Selling)</option>
                <option value="Auto Insurance">Auto Insurance</option>
                <option value="Home Insurance">Home Insurance</option>
                <option value="Life Insurance">Life Insurance</option>
                <option value="Both">Both Cars and Insurance</option>
              </select>
            </div>
            <div className="contactComponent-field">
              <label htmlFor="message" className="contactComponent-label">
                Your Message / Details
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here..."
                className="contactComponent-input"
                required
                value={contactData.message}
                onChange={(e) => {
                  handleOnChange(e, "message");
                }}
              ></textarea>
            </div>
            <Button
              type="submit"
              variant="contained"
              className="contactComponent-submit"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
