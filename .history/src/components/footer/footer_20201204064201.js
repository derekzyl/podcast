import React from "react";
import "./footer.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div class="footer">
      <div className="footer-top">
        <form action="">
          <input type="text" name="email" id="" placeholder="Enter email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-credits">&copy;Copyright new Date ${year}</div>
    </div>
  );
}

export default Footer;
