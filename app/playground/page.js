"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewInput = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleRatingHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the review data (rating and review text) to the server

    // You can send the review data to your backend or handle it as needed
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <div>
              <FaStar
                key={index}
                className="star"
                color={
                  ratingValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"
                }
                size={30}
                onClick={() => handleRatingClick(ratingValue)}
                onMouseEnter={() => handleRatingHover(ratingValue)}
                onMouseLeave={() => handleRatingHover(0)}
              />
            </div>
          );
        })}
      </div>
      {/* <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={handleReviewChange}
          rows={4}
          cols={50}
          placeholder="Write your review here..."
        ></textarea>
      </div> */}
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewInput;
