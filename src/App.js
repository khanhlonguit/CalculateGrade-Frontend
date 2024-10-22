import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import SyllabusTab from './components/SyllabusTab';
import ExamCreation from './components/ExamCreation';
import { AppProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-4">
          <div className="max-w-[1600px] mx-auto bg-white rounded-xl shadow-2xl p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Hệ thống Hỗ trợ Giảng dạy</h1>
            <NavigationBar />
            <Routes>
              <Route path="/grade" element={<div>Nội dung chấm bài</div>} />
              <Route path="/syllabus" element={<SyllabusTab />} />
              <Route path="/exam" element={<ExamCreation />} />
              <Route path="/" element={<Navigate to="/syllabus" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
