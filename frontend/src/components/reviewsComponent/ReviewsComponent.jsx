/* 

Developed by Shivam Arora

on 29 Oct,2025
*/

//lib
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
//component

//context

//css
import "./reviewsComponent.css";
import { useEffect, useState } from "react";

const ReviewsComponent = () => {
  const [reviewsData, setReviewData] = useState({ data: [] });

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="reviews-star filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="reviews-star">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  const handleFacebookRoute = () => {
    try {
      window.location.href =
        "https://www.facebook.com/p/Sales-Wizard-Sahil-Kapoor-61552906170018/";
    } catch (e) {
      console.log("error orrcured", e);
      alert("Error in going to facebook.");
    }
  };

  const fetchReviewData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/reviews/reviewsData");
      setReviewData((prevState) => ({
        ...prevState,
        data: res.data.reviewsData,
      }));
    } catch (e) {
      console.log("Error occured: ", e);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      try {
        fetchReviewData();
      } catch (e) {
        console.log("Error occured:", e);
      }
    }
    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="reviewsComponent-wrapper">
      {reviewsData.data.length > 0 ? (
        <div className="reviewsComponent-container">
          <Typography variant="h2" className="reviewsComponent-title">
            Client Success Stories
          </Typography>
          <Typography variant="body1" className="reviewsComponent-subtitle">
            Read our verified 5-star reviews from satisfied car buyers and
            insurance clients.
          </Typography>

          <div className="reviewsComponent-grid">
            {reviewsData.data.length > 0 ? (
              reviewsData.data.map((review) => (
                <div key={review.id} className="reviewsComponent-card">
                  <div className="reviewsComponent-stars">
                    {renderStars(review.rating)}
                  </div>
                  <p className="reviewsComponent-text">"{review.text}"</p>
                  <p className="reviewsComponent-author">— {review.author}</p>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>

          <div className="reviewsComponent-buttonWrapper">
            <Button
              className="reviewsComponent-button"
              variant="contained"
              onClick={() => {
                handleFacebookRoute();
              }}
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.19c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              View More Reviews on Facebook
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewsComponent;
