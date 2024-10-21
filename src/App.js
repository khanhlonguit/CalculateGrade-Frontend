import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ModelSelection from './components/ModelSelection';
import ResultDisplay from './components/ResultDisplay';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [model1Result, setModel1Result] = useState('');
  const [model2Result, setModel2Result] = useState('');

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleGenerateResult = async (modelNumber, selectedModel) => {
    let formData = new FormData();
    formData.append('syllabus', file);
    formData.append('model', selectedModel); 
    let result = await axios.post('http://localhost:3001/summarize', formData);
    console.log(result.data.result);
    if (modelNumber === 1) {
      setModel1Result(result.data.result);
    } else {
      setModel2Result(result.data.result);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Tóm tắt Syllabus Môn học</h1>
        
        <FileUpload onFileUpload={handleFileUpload} />
        
        <ModelSelection onGenerateResult={handleGenerateResult} />
        
        <ResultDisplay model1Result={model1Result} model2Result={model2Result} />
      </div>
    </div>
  );
}

export default App;
