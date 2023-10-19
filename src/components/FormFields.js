import React from 'react';
import './App.css';

const FormFields = ({ formData, updateFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-fields">
      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
      <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" />
      <input type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="District" />
      <input type="text" name="village" value={formData.village} onChange={handleInputChange} placeholder="Village" />
      <input type="text" name="panNumber" value={formData.panNumber} onChange={handleInputChange} placeholder="PAN Number" />
      <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleInputChange} placeholder="Aadhaar Number" />
    </div>
  );
};

export default FormFields;
