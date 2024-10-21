import React, { useState } from 'react';

const models = ['gemini-1.5-flash-002', 'gemini-1.5-pro-002', 'mixtral-8x7b-32768', 'llama3-8b-8192', 'gemma2-9b-it', 'llama-3.2-3b-preview'];

function ModelSelection({ onGenerateResult }) {
  const [model1, setModel1] = useState('');
  const [model2, setModel2] = useState('');

  return (
    <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bước 2: Chọn model để đưa ra kết quả</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-5/12">
          <select
            value={model1}
            onChange={(e) => setModel1(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Chọn Model 1</option>
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => onGenerateResult(1, model1)}
          className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Tạo kết quả Model 1
        </button>
        <div className="w-full md:w-5/12">
          <select
            value={model2}
            onChange={(e) => setModel2(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Chọn Model 2</option>
            {models.map((model, index) => (
              <option key={index} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => onGenerateResult(2, model2)}
          className="w-full md:w-auto bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
        >
          Tạo kết quả Model 2
        </button>
      </div>
    </div>
  );
}

export default ModelSelection;
