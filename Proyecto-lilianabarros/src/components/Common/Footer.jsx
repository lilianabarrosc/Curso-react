import React from "react";

const Footer = () => (
    <footer style={{backgroundColor:"#f50057"}}>
        <p> &copy; {new Date().getFullYear()} - Liliana Barros </p>
    </footer>
);

Footer.displayName = "Footer";

export default Footer;