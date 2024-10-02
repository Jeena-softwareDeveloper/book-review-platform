// Review submission form component code
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bookId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();
    const review = { bookId, rating, comment };
    await axios.post('/api/reviews', review);
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={submitReview}>
      <h3>Leave a Review</h3>
      <label>Rating</label>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      <label>Comment</label>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
