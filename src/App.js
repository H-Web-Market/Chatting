import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/ChatPage/Chat'; // Chat 컴포넌트
import ChattingRoom from './pages/ChattingRoomPage/ChattingRoom';
import AddReview from './pages/AddReviewPage/AddReview';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Chat />} />  채팅 목록 화면
                <Route path="/Chat/:chatId" element={<ChattingRoom />} />  {/* 채팅방 상세 페이지 */}
                <Route path="/AddReview/:chatId" element={<AddReview/>}/>
            </Routes>
        </Router>
    );
}

export default App;
