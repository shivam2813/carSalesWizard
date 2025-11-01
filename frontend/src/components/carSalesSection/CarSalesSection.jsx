/* 

Developed by Shivam Arora

on 28 Oct,2025
*/

import Typography from "@mui/material/Typography";

//lib

//components

//context

//css
import "./carSalesSection.css";

const CarSalesSection = () => {
  return (
    <div id="carSales" className="carSalesSection-wrapper">
      <div className="carSalesSection-container">
        <Typography className="carSalesSection-title" variant="h2">
          Car Sales
        </Typography>
        <Typography variant="p" className="carSalesSection-subtitle">
          Find quality used cars and vehicles that fit your budget and
          lifestyle, backed by expert advice.
        </Typography>
        <div className="carSalesSection-grid">
          <div className="carSalesSection-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="carSalesSection-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9.5 2h5C15.88 2 17 3.12 17 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-5C8.12 22 7 20.88 7 19.5v-15C7 3.12 8.12 2 9.5 2z"
              />
            </svg>
            <h3 className="carSalesSection-cardTitle">Certified Quality</h3>
            <p className="carSalesSection-cardText">
              Every vehicle is thoroughly inspected and maintained to ensure
              reliability and safety on the road.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="carSalesSection-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="carSalesSection-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <h3 className="carSalesSection-cardTitle">Financing Options</h3>
            <p className="carSalesSection-cardText">
              We work with multiple lenders to help you secure the best possible
              loan rates, regardless of your credit history.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="carSalesSection-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="carSalesSection-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.727A8 8 0 016.343 4.273L4 4m0 0l-2 2m2-2l2 2m10.314 12.454a8 8 0 01-11.314 0"
              />
            </svg>
            <h3 className="carSalesSection-cardTitle">Stress-Free Trade-Ins</h3>
            <p className="carSalesSection-cardText">
              Get a fair market valuation for your current vehicle and apply it
              easily towards your new purchase.
            </p>
          </div>
        </div>

        <div className="carSalesSection-cta">
          <a href="#contact" className="carSalesSection-ctaButton">
            Contact to Know Inventory & Schedule Test Drive
          </a>
        </div>
      </div>
    </div>
  );
};
export default CarSalesSection;
