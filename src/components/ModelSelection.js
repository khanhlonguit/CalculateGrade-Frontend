import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaRobot, FaMagic } from 'react-icons/fa';

function ModelSelection({onGenerateResult }) {
  const { 
    syllabusModel1, 
    setSyllabusModel1, 
    syllabusModel2, 
    setSyllabusModel2,
    gradeModel1, 
    setGradeModel1, 
    gradeModel2, 
    setGradeModel2 
  } = useAppContext();

  const models = ['gemini-1.5-flash-002', 'gemini-1.5-pro-002', 'mixtral-8x7b-32768', 'llama3-8b-8192', 'gemma2-9b-it'];

  // Xác định model và setModel dựa trên URL hiện tại
  const currentPath = window.location.pathname;
  const model1 = currentPath === '/syllabus' ? syllabusModel1 : gradeModel1;
  const setModel1 = currentPath === '/syllabus' ? setSyllabusModel1 : setGradeModel1;
  const model2 = currentPath === '/syllabus' ? syllabusModel2 : gradeModel2;
  const setModel2 = currentPath === '/syllabus' ? setSyllabusModel2 : setGradeModel2;

  return (
    <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        {currentPath === '/syllabus' ? 'Bước 2: Chọn model và tạo kết quả' : 'Bước 4: Chọn model và tạo kết quả'}
      </h2>
      <div className="flex justify-between items-start">
        <div className="w-[48%] flex flex-col items-center">
          <select
            value={model1}
            onChange={(e) => setModel1(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
          >
            <option value="">Chọn Model 1</option>
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="w-[48%] flex flex-col items-center">
          <select
            value={model2}
            onChange={(e) => setModel2(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
          >
            <option value="">Chọn Model 2</option>
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={onGenerateResult}
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <FaMagic className="mr-2" />
          Tạo kết quả
        </button>
      </div>
    </div>
  );
}

export default ModelSelection;
