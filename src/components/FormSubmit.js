// FormSubmit.js
import React from 'react';
import axios from 'axios';
import './App.css';

const FormSubmit = ({ formData }) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://example.com/api/saveFormData', formData);
      if (response.status === 200) {
        // Data saved successfully, you can handle the success action here
        console.log('Form Data Submitted Successfully');
      } else {
        // Handle errors or display error messages
        console.error('Error submitting form data');
      }
    } catch (error) {
      // Handle Axios request error
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <div className="form-submit">
      <button onClick={handleSubmit} disabled={!Object.values(formData).every(Boolean)}>
        Submit
      </button>
    </div>
  );
};

export default FormSubmit;
