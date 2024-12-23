/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Review from './components/Review';
import  './styles.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
  });

  return (
    <Router>
      <div className="form-container">
        <Routes>
          <Route
            path="/"
            element={<Step1 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/step2"
            element={<Step2 formData={formData} setFormData={setFormData} />}
          />
          <Route path="/review" element={<Review formData={formData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
