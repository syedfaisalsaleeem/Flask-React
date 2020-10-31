import React from "react";
import ContactForm from "../../Components/ContactForm/ContactFrom";
import "./About.css";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <section className="about">
      <div className="warper">
        <div className="content-info">
          <Typography variant="h4" className="title">
            About Us
          </Typography>
          <div className="text">
            <p>
            We at Salk are utilizing technology to help people achieve their health goals easier, faster, 
            and more effectively by combining medical testing, expert consultations, product recommendations, and progress tracking all in a single customer experience.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default React.memo(About);
