/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (formData.address && formData.city) {
      navigate('/review');
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div>
      <h2>Step 2: Address Info</h2>
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <button onClick={() => navigate('/')}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
