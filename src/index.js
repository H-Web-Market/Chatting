import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './pages/ChatPage/Chat.module.css';
import './pages/ChattingRoomPage/ChattingRoom.module.css'
import './pages/AddReviewPage/AddReview.module.css'
import './styles/font.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
