import React, { useState } from 'react';
import './ReviewSection.css';
import userImage from '../../../assets/Ellipse 7.png';

const ReviewSection: React.FC = () => {
  const [ratings, setRatings] = useState<number[]>(Array(5).fill(0));
  const [hoverRatings, setHoverRatings] = useState<number[]>(Array(5).fill(0));
  const [showReplyInput, setShowReplyInput] = useState<boolean[]>(Array(5).fill(false));

  const handleRatingClick = (index: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleRatingHover = (index: number, value: number) => {
    const newHoverRatings = [...hoverRatings];
    newHoverRatings[index] = value;
    setHoverRatings(newHoverRatings);
  };

  const handleRatingLeave = (index: number) => {
    const newHoverRatings = [...hoverRatings];
    newHoverRatings[index] = 0;
    setHoverRatings(newHoverRatings);
  };

  const getRatingText = (index: number) => {
    const rating = hoverRatings[index] || ratings[index];
    return `${rating}/5`;
  };

  const ratingTexts = ["Locations", "Services", "Rooms", "Amenities", "Price"];

  const handleReplyClick = (index: number) => {
    const newShowReplyInput = [...showReplyInput];
    newShowReplyInput[index] = true;
    setShowReplyInput(newShowReplyInput);
  };

  return (
    <div className="review-section">
      {/* First Part */}
      <div>
        <h2 className="review-heading">Reviews</h2>
        <div className="review-row">
          <div className="review-col">
            <p>4/4</p>
            <p>Very Good</p>
            <p>8 verified reviews</p>
          </div>
          <div className="review-col">
            {[...Array(3)].map((_, index) => (
              <div key={index}>
                <RatingBar
                  rating={ratings[index]}
                  hoverRating={hoverRatings[index]}
                  onClick={(value) => handleRatingClick(index, value)}
                  onHover={(value) => handleRatingHover(index, value)}
                  onLeave={() => handleRatingLeave(index)}
                />
                <p className="rating-bar-text">
                  <span>{ratingTexts[index]}</span>
                  <span>{getRatingText(index)}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="review-col">
            {[...Array(2)].map((_, index) => (
              <div key={index + 3}>
                <RatingBar
                  rating={ratings[index + 3]}
                  hoverRating={hoverRatings[index + 3]}
                  onClick={(value) => handleRatingClick(index + 3, value)}
                  onHover={(value) => handleRatingHover(index + 3, value)}
                  onLeave={() => handleRatingLeave(index + 3)}
                />
                <p className="rating-bar-text">
                  <span>{ratingTexts[index + 3]}</span>
                  <span>{getRatingText(index + 3)}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Second Part */}
      <div>
        <h2 className="review-heading">Showing 6-8 of 8 comments</h2>
        <hr />
        {[...Array(5)].map((_, index) => (
          <Comment
            key={index}
            name="Ilyas"
            date="27 Nov, 2023"
            text="This is exactly what I was looking for, thank you so much for these tutorials"
            showReplyInput={showReplyInput[index]}
            onReplyClick={() => handleReplyClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const RatingBar: React.FC<{
  rating: number;
  hoverRating: number;
  onClick: (value: number) => void;
  onHover: (value: number) => void;
  onLeave: () => void;
}> = ({ rating, hoverRating, onClick, onHover, onLeave }) => {
  return (
    <div
      className="rating-bar"
      onMouseLeave={onLeave}
    >
      {[1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          className="rating-segment"
          style={{
            backgroundColor: value <= (hoverRating || rating) ? 'brown' : '#e4e5e9',
          }}
          onMouseEnter={() => onHover(value)}
          onClick={() => onClick(value)}
        />
      ))}
    </div>
  );
};

const Comment: React.FC<{ name: string; date: string; text: string; showReplyInput: boolean; onReplyClick: () => void }> = ({ name, date, text, showReplyInput, onReplyClick }) => {
  const ratingTexts = ["Locations", "Services", "Rooms", "Amenities", "Price"];

  return (
    <div className="comment-section">
      <div className="comment-header">
        <div>
          <img
            src={userImage}
            alt="User"
          />
        </div>
        <div className="comment-details">
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="comment-ratings">
        {ratingTexts.map((text, index) => (
          <div key={index} className="comment-rating-col">
            <p>{text}</p>
            <div className="comment-rating-stars">
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="comment-text">{text}</p>
      {showReplyInput ? (
        <textarea className="reply-input" placeholder="Write your reply..."></textarea>
      ) : (
        <button className="reply-button" onClick={onReplyClick}>Reply</button>
      )}
    </div>
  );
};

export default ReviewSection;
