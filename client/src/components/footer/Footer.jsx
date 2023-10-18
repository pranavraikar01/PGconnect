import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            We connect the one who is willing to get a house to stay even if he
            is new to the city and the ones who are genuinely willing to give
            their house on rent.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 7738684362</span>
          <span>Name : PGconnect</span>
          <span>Email : PGconnect@gmail.com</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Chembur, Mumbai</span>
          <span>Maharashtra</span>
        </div>
      </div>
      <div className={classes.footers}>
        <p>&copy; 2023 PGconnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
