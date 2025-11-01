/* 

Developed by Shivam Arora

on 29 Oct,2025
*/

//lib

//component

//context

//css
import Typography from "@mui/material/Typography";
import "./insuranceComponent.css";

const InsuranceComponent = () => {
  return (
    <div id="insurance" className="insuranceComponent-wrapper">
      <div className="insuranceComponent-container">
        <Typography variant="h2" className="insuranceComponent-title">
          Insurance Services
        </Typography>
        <Typography variant="p" className="insuranceComponent-subtitle">
          Comprehensive policies to protect your family, assets, and future from
          the unexpected.
        </Typography>
        <div className="insuranceComponent-grid">
          {/* Auto Coverage */}
          <div className="insuranceComponent-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="insuranceComponent-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l4 4 6-6"
              />
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15h14"
              />
            </svg>
            <h3 className="insuranceComponent-cardTitle">Auto Coverage</h3>
            <p className="insuranceComponent-cardText">
              From liability to comprehensive, find the right coverage to
              protect your new vehicle and your financial future.
            </p>
          </div>

          {/* Home & Property */}
          <div className="insuranceComponent-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="insuranceComponent-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7m-9 5a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7m14 0H5"
              />
            </svg>
            <h3 className="insuranceComponent-cardTitle">Home & Property</h3>
            <p className="insuranceComponent-cardText">
              Protect your home, contents, and liability against fire, theft,
              and natural disasters with competitive rates.
            </p>
          </div>

          {/* Life Coverage */}
          <div className="insuranceComponent-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="insuranceComponent-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.5V15"
              />
            </svg>
            <h3 className="insuranceComponent-cardTitle">Life Coverage</h3>
            <p className="insuranceComponent-cardText">
              Ensure your family's financial security with term or permanent
              life insurance policies tailored to your needs.
            </p>
          </div>
        </div>
        <div className="insuranceComponent-cta">
          <a href="#contact" className="insuranceComponent-ctaButton">
            Request a Personalized Insurance Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsuranceComponent;
