import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2>&copy;WSB Wroclaw 2021/Rafał Okonski</h2>
      </div>
      <div class="media">
        <a href="https://www.facebook.com">
          <img
            src="https://img.icons8.com/doodle/48/000000/facebook-new.png"
            alt="facebook"
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"
            alt="twitter"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src="https://img.icons8.com/doodle/48/000000/instagram-new.png"
            alt="instagram"
          />
        </a>
        <a href="https://www.reddit.com">
          <img
            src="https://img.icons8.com/doodle/48/000000/reddit--v4.png"
            alt="reddit"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
