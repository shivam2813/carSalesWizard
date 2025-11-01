/* 

Developed by Shivam Arora

on 1 Nov,2026
*/

//lib
import Typography from "@mui/material/Typography";

//component

//context

//css
import "./footerComponent.css";

const FooterComponent = () => {
  return (
    <div className="footerComponent-wrapper">
      <div className="footerComponent-container">
        <Typography variant="p">
          {" "}
          &copy; 2025 Kapoor Advisory. All rights reserved.
        </Typography>
        <div className="footer-links">
          <a href="#carSales" className="footer-link">
            Car Sales
          </a>
          <a href="#insurance" className="footer-link">
            Insurance
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
