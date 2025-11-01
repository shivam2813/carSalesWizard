/* 

Developed by Shivam Arora

on 28 Oct,2025
*/

//lib
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//component

//context

//css
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection-wrapper">
      <div className="heroSection-dataWrapper">
        <div className="heroSection-mainHeadline">
          <Typography variant="h1" fontWeight={800}>
            Your Trusted Partner for{" "}
            <Typography
              component="span"
              variant="h1"
              fontWeight={800}
              sx={{ color: "#FF4D00" }}
            >
              Wheels and Protection.
            </Typography>
          </Typography>
        </div>
        <div className="heroSection-belowHeadline">
          <Typography variant="h4">
            Sahil Kapoor offers seamless experience, whether you're finding the
            perfect vehicle or securing comprehensive coverage for what matters
            most.
          </Typography>
        </div>
        <div className="heroSection-buttonWrapper">
          <div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f97316",
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="heroSection-contactButton"
              href="#contact"
            >
              Contact US
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
