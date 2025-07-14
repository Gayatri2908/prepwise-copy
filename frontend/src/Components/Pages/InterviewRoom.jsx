// import React, { useState, useRef, useEffect } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { TextToSpeech } from "./TextToSpeech";
// import { Latest_Message } from "../redux/actionType";

// export const InterviewRoom = () => {
//   const token = localStorage.getItem("token");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const webcamRef = useRef(null);
//   const [conversation, setConversation] = useState([]);
//   const [interview, setInterview] = useState(null);
//   const type = useSelector((store) => store.authReducer.type);
//   const [cameraStatus, setCameraStatus] = useState("pending");
//   const [micStatus, setMicStatus] = useState("pending");
//   const [isRecording, setIsRecording] = useState(false);
//   const mediaRecorderRef = useRef(null);
//   const [audioChunks, setAudioChunks] = useState([]);

//   useEffect(() => {
//     checkPermissions();
//     startListening();
//   }, []);

//   const checkPermissions = async () => {
//     try {
//       await navigator.mediaDevices.getUserMedia({ video: true });
//       setCameraStatus("allowed");
//     } catch (error) {
//       setCameraStatus("denied");
//     }
//     try {
//       await navigator.mediaDevices.getUserMedia({ audio: true });
//       setMicStatus("allowed");
//     } catch (error) {
//       setMicStatus("denied");
//     }
//   };

//   const startInterview = async () => {
//     if (!type) return;
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/interview/start`,
//         { type },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setConversation((prev) => [...prev, { role: "assistant", content: response.data.question }]);
//       dispatch({ type: Latest_Message, payload: response.data.question });
//       setInterview(response.data.newinterview);
//       startRecording();
//     } catch (error) {
//       console.error("Interview Start Error:", error);
//     }
//   };

//   const startRecording = () => {
//     setIsRecording(true);
//     navigator.mediaDevices
//       .getUserMedia({ audio: true })
//       .then((stream) => {
//         mediaRecorderRef.current = new MediaRecorder(stream);
//         mediaRecorderRef.current.ondataavailable = (event) => {
//           if (event.data.size > 0) {
//             setAudioChunks((prev) => [...prev, event.data]);
//           }
//         };
//         mediaRecorderRef.current.start();
//       })
//       .catch(() => console.error("Microphone Access Error"));
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current && isRecording) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     }
//   };

//   const handleStop = async () => {
//     if (!interview) return;
//     stopRecording();
//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_URL}/interview/end/${interview._id}`,
//         { conversation },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       dispatch({
//         type: Latest_Message,
//         payload: "Interview completed! Click 'End Interview' to see your feedback.",
//       });
//     } catch (error) {
//       console.error("Interview Stop Error:", error);
//     }
//   };

//   const startListening = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) return;

//     const recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.interimResults = false;
//     recognition.lang = "en-US";

//     recognition.onresult = (event) => {
//       const transcript = event.results[event.results.length - 1][0].transcript;
//       setConversation((prev) => [...prev, { role: "user", content: transcript }]);
//     };

//     recognition.start();
//   };

//   const exitInterviewRoom = () => {
//     navigate("/userdashboard");
//   };

//   return (
//     <div className="min-h-screen flex justify-between pt-24 pb-7 pl-4">
//       <div className="relative flex-grow bg-gray-200">
//         <div className="py-20 px-4 relative">
//           {cameraStatus === "denied" && (
//             <div className="bg-red-500 text-white p-4 rounded-md">
//               🚫 Camera access denied! Please enable camera permissions.
//             </div>
//           )}

//           <div className="flex gap-4">
//             <div className="relative border-2 w-1/2 h-96 rounded-lg border-blue-500">
//               <img className="absolute w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="https://herobot.app/wp-content/uploads/2022/11/AI-bot-1.jpg" alt="AI Avatar" />
//             </div>

//             <div className="relative border-2 w-1/2 h-96 rounded-lg border-gray-50 overflow-hidden">
//               {cameraStatus === "allowed" ? (
//                 <Webcam ref={webcamRef} audio={true} videoConstraints={{ facingMode: "user" }} />
//               ) : (
//                 <div className="text-center text-red-600 font-bold p-4">🚫 Camera Blocked</div>
//               )}
//             </div>
//           </div>

//           <div className="mt-8 flex gap-4">
//             <button onClick={startInterview} className="bg-black text-white py-2 px-4 rounded-md border">Start Interview</button>
//             <button onClick={handleStop} className="bg-red-500 text-white py-2 px-4 rounded-md border">Stop</button>
//             <button onClick={exitInterviewRoom} className="bg-black text-white py-2 px-4 rounded-md border">End Interview</button>
//           </div>
//         </div>
//       </div>

//       <TextToSpeech conversation={conversation} setConversation={(msg) => setConversation((prev) => [...prev, msg])} interview={interview} />
//     </div>
//   );
// };


import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextToSpeech } from "./TextToSpeech";
import { Latest_Message } from "../redux/actionType";

export const InterviewRoom = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const [conversation, setConversation] = useState([]);
  const [interview, setInterview] = useState(null);
  const [cameraStatus, setCameraStatus] = useState("pending");
  const [micStatus, setMicStatus] = useState("pending");
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const type = useSelector((store) => store.authReducer.type);

  useEffect(() => {
    checkPermissions();
    startListening();
  }, []);

  const checkPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStatus("allowed");
    } catch {
      setCameraStatus("denied");
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicStatus("allowed");
    } catch {
      setMicStatus("denied");
    }
  };

  const startInterview = async () => {
    if (!type) return;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/interview/start`,
        { type },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setConversation((prev) => [
        ...prev,
        { role: "assistant", content: response.data.question },
      ]);
      dispatch({ type: Latest_Message, payload: response.data.question });
      setInterview(response.data.newinterview);
      startRecording();
    } catch (error) {
      console.error("Interview Start Error:", error);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };
      mediaRecorderRef.current.start();
    });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleStop = async () => {
    if (!interview) return;
    stopRecording();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/interview/end/${interview._id}`,
        { conversation },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: Latest_Message,
        payload:
          "Interview completed! Click 'End Interview' to see your feedback.",
      });
    } catch (error) {
      console.error("Interview Stop Error:", error);
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript;
      setConversation((prev) => [
        ...prev,
        { role: "user", content: transcript },
      ]);
    };

    recognition.start();
  };

  const exitInterviewRoom = () => {
    navigate("/userdashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6 pb-10 flex gap-6">
      {/* Main white card (left) */}
      <div className="w-2/3">
        <div className="bg-white rounded-lg shadow-md p-6">
          {cameraStatus === "denied" && (
            <div className="bg-red-500 text-white p-4 rounded-md mb-4">
              🚫 Camera access denied! Please enable camera permissions.
            </div>
          )}

          {/* AI and Webcam Section */}
          <div className="flex gap-4 mb-6">
            {/* AI Avatar */}
            <div className="w-1/2 h-96 border-2 border-blue-500 rounded-lg flex items-center justify-center bg-gray-50">
              <img
                className="w-40 h-40"
                src="https://herobot.app/wp-content/uploads/2022/11/AI-bot-1.jpg"
                alt="AI Avatar"
              />
            </div>

            {/* Webcam Feed */}
            <div className="w-1/2 h-96 border-2 border-gray-300 rounded-lg overflow-hidden bg-black">
              {cameraStatus === "allowed" ? (
                <Webcam
                  ref={webcamRef}
                  audio={true}
                  className="w-full h-full object-cover"
                  videoConstraints={{ facingMode: "user" }}
                />
              ) : (
                <div className="text-center text-red-600 font-bold p-4">
                  🚫 Camera Blocked
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={startInterview}
              className="bg-black text-white py-2 px-4 rounded-md border"
            >
              Start Interview
            </button>
            <button
              onClick={handleStop}
              className="bg-red-500 text-white py-2 px-4 rounded-md border"
            >
              Stop
            </button>
            <button
              onClick={exitInterviewRoom}
              className="bg-black text-white py-2 px-4 rounded-md border"
            >
              End Interview
            </button>
          </div>
        </div>
      </div>

      {/* Right-side Chat Panel */}
      <div className="w-1/3">
        <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
          {/* 🆕 Scrollable Chat Area */}
          <div className="flex-1 overflow-y-auto mb-4 p-2 border rounded bg-gray-50 h-[400px]">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded text-sm ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-green-100 text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* 🗣️ TextToSpeech input */}
          <TextToSpeech
            conversation={conversation}
            setConversation={(msg) => setConversation((prev) => [...prev, msg])}
            interview={interview}
          />
        </div>
      </div>
    </div>
  );
};
