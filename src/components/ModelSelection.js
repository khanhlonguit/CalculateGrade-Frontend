import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaRobot, FaMagic } from 'react-icons/fa';

function ModelSelection({onGenerateResult }) {
  const models = ['gemini-1.5-flash-002', 'gemini-1.5-pro-002', 'mixtral-8x7b-32768', 'llama3-8b-8192', 'gemma2-9b-it', 'llama-3.2-3b-preview'];
  const {syllabusModel1, syllabusModel2, setSyllabusModel1, setSyllabusModel2} = useAppContext();
  return (
    <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bước 2: Chọn model và tạo kết quả</h2>
      <div className="flex justify-between items-start mb-4">
        <div className="w-[48%] flex flex-col items-center">
          <select
            value={syllabusModel1}
            onChange={(e) => setSyllabusModel1(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          >
            <option value="">Chọn Model 1</option>
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
          <button
            onClick={() => onGenerateResult(1, syllabusModel1)}
            className="mt-3 w-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <FaRobot className="mr-2" />
            Tạo kết quả
          </button>
        </div>
        <div className="w-[48%] flex flex-col items-center">
          <select
            value={syllabusModel2}
            onChange={(e) => setSyllabusModel2(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
          >
            <option value="">Chọn Model 2</option>
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
          <button
            onClick={() => onGenerateResult(2, syllabusModel2)}
            className="mt-3 w-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <FaMagic className="mr-2" />
            Tạo kết quả
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModelSelection;
