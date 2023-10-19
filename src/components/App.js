import React, { useState } from 'react';
import './App.css';
import VoiceRecorder from './VoiceRecorder';
import FormFields from './FormFields';
import FormSubmit from './FormSubmit';

function App() {
  const [transcript, setTranscript] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    state: '',
    district: '',
    village: '',
    panNumber: '',
    aadhaarNumber: '',
  });

  const handleTranscriptUpdate = (newTranscript) => {
    setTranscript(newTranscript);
  };

  return (
    <div className="App">
      <h1>Voice to Text Form</h1>
      <VoiceRecorder transcript={transcript} updateTranscript={handleTranscriptUpdate} />
      <FormFields formData={formData} updateFormData={setFormData} />
      <FormSubmit formData={formData} />
    </div>
  );
}

export default App;
