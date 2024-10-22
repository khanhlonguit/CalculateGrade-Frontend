import React from 'react';
import FileUpload from './FileUpload';
import ReactMarkdown from 'react-markdown';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';

function ExamCreation() {
  const {
    examSyllabus,
    examSampleFile,
    setExamSampleFile,
    examModel1,
    setExamModel1,
    examModel2,
    setExamModel2,
    examResult1,
    setExamResult1,
    examResult2,
    setExamResult2,
    loadingExamModel1,
    setLoadingExamModel1,
    loadingExamModel2,
    setLoadingExamModel2
  } = useAppContext();

  const handleFileUpload = (uploadedFile) => {
    setExamSampleFile(uploadedFile);
  };

  const handleGenerateResult = async () => {
    if (!examSampleFile) {
      alert('Vui lòng chọn file đề bài mẫu trước khi tạo kết quả.');
      return;
    }

    if (!examModel1 || !examModel2) {
      alert('Vui lòng chọn cả hai model trước khi tạo kết quả.');
      return;
    }

    let formData = new FormData();
    formData.append('examFile', examSampleFile);
    formData.append('syllabus', examSyllabus);
    formData.append('model1', examModel1);
    formData.append('model2', examModel2);

    try {
        setLoadingExamModel1(true);
        setLoadingExamModel2(true);
      let response = await axios.post('http://localhost:3001/exam-arise', formData);
      setExamResult1(response.data.resultGoogle);
      setExamResult2(response.data.resultGroq);
      setLoadingExamModel1(false);
      setLoadingExamModel2(false);
    } catch (error) {
      console.error('Lỗi khi tạo đề:', error);
      alert('Có lỗi xảy ra khi tạo đề. Vui lòng thử lại.');
    }
  };

  const models = ['gemini-1.5-flash-002', 'gemini-1.5-pro-002', 'mixtral-8x7b-32768', 'llama3-8b-8192', 'gemma2-9b-it', 'llama-3.2-3b-preview'];

  return (
    <div>
      <FileUpload 
        onFileUpload={handleFileUpload} 
        file={examSampleFile}
        label="Bước 1: Chọn file đề bài mẫu"
      />

      <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bước 2: Syllabus</h2>
        <div className="border p-4 rounded bg-white h-[600px] flex flex-col">
            <div className="flex-grow overflow-auto">
                <ReactMarkdown className="markdown">
                    {examSyllabus || 'Chưa có syllabus được chọn'}
                </ReactMarkdown>
            </div>
        </div>
      </div>

      <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bước 3: Chọn model và tạo kết quả</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="w-full md:w-[45%]">
            <label htmlFor="model1" className="block text-sm font-medium text-gray-700 mb-1">Model 1</label>
            <select
              id="model1"
              value={examModel1}
              onChange={(e) => setExamModel1(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            >
              <option value="">Chọn Model 1</option>
              {models.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-[45%]">
            <label htmlFor="model2" className="block text-sm font-medium text-gray-700 mb-1">Model 2</label>
            <select
              id="model2"
              value={examModel2}
              onChange={(e) => setExamModel2(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            >
              <option value="">Chọn Model 2</option>
              {models.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGenerateResult}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Tạo kết quả
          </button>
        </div>
      </div>

      <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Kết quả</h2>
        <div className="flex space-x-4">
          <div className="w-1/2 p-4 border rounded bg-white h-[600px] flex flex-col">
            {loadingExamModel1 ? (
              <div className="flex justify-center items-center h-64">
              <div className="animate-pulse flex space-x-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-auto">
                  <ReactMarkdown className="markdown">
                    {examResult1 || 'Kết quả sẽ được hiển thị ở đây...'}
                  </ReactMarkdown>
                </div>
              </>
            )}
          </div>
          <div className="w-1/2 p-4 border rounded bg-white h-[600px] flex flex-col">
            {loadingExamModel2 ? (
              <div className="flex justify-center items-center h-64">
              <div className="animate-pulse flex space-x-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-auto">
                  <ReactMarkdown className="markdown">
                    {examResult2 || 'Kết quả sẽ được hiển thị ở đây...'}
                  </ReactMarkdown>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamCreation;
