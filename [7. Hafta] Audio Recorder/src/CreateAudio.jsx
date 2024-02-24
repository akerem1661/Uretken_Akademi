import React, { useRef, useState, useEffect, useReducer } from 'react';
import reducer from './reducers/audioReducer';

const AudioRecorder = () => {
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
 
  const [state, dispatch] = useReducer(reducer, {
    isRecording: false,
    AudioARR: [],
    blobARR: []
  })

  const handleStartRecording = async (props) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const newblobarr = [...state.blobARR, audioBlob];
        const audioUrl = URL.createObjectURL(audioBlob);
        const newArray = [...state.AudioARR, audioUrl];
        dispatch(
          {
            type: 'SET_AUDIOARR',
            value: audioUrl
          });
        console.log(audioUrl);
      };

      mediaRecorderRef.current.start();
      dispatch(
       {
        type : 'SET_ISRECORDING' ,
        value : true
       } 

      );
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };  

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      dispatch(
        {
         type : 'SET_ISRECORDING' ,
         value : false
        } 
 
       );
    }
  };

  return (
    <div className='CreateAudio'>
      <div className='Buttos'>
        <button onClick={handleStartRecording} disabled={state.isRecording}>
          Start Recording
        </button>
        <button onClick={handleStopRecording} disabled={!state.isRecording}>
          Stop Recording
        </button>
      </div>
      <div className='Audios'>
        {state.AudioARR.reverse().map((item, index) => {
          return <li key={index} className='audioLi'>
            <audio src={item} controls></audio>
          </li>

        })}
      </div>
    </div>
  );
};

export default AudioRecorder;
