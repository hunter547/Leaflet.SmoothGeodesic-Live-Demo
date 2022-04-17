import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return(
    <footer className="footer layout__footer">
      <div className="footer__content">
        <p>{new Date().getFullYear()} &copy; | Created by <a href="https://evanoff.dev" target="_blank">Hunter Evanoff</a></p>
      </div>
    </footer>
  )
}

export default Footer