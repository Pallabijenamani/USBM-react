/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert('Form submitted!');
    navigate('/');
  };

  return (
    <div>
      <h2>Review & Submit</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <button onClick={() => navigate('/step2')}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Review;
