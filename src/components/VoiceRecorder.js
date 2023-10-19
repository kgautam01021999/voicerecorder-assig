import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
import './App.css';

const VoiceRecorder = ({ transcript, startListening, stopListening, listening }) => {
  return (
    <div>
      {listening && <div className="listening-indicator">Listening...</div>}
      <button onClick={startListening} disabled={listening}>
        Start Recording
      </button>
      <button onClick={stopListening} disabled={!listening}>
        Stop Recording
      </button>
      <div className="transcript">Transcript: {transcript}</div>
    </div>
  );
};

export default SpeechRecognition(VoiceRecorder);
