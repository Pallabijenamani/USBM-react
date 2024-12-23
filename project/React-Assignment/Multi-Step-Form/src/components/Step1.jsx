/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (formData.name && formData.email) {
      navigate('/step2');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
