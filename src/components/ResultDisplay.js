import React from 'react';
import ReactMarkdown from 'react-markdown';

function ResultDisplay({ model1Result, model2Result }) {
    return (
      <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Kết quả</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg bg-white min-h-[300px]">
            <h3 className="font-semibold mb-2 text-lg text-blue-600">Kết quả Model 1</h3>
            <ReactMarkdown className="markdown">
              {model1Result || 'Kết quả sẽ được hiển thị ở đây...'}
            </ReactMarkdown>
          </div>
          <div className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg bg-white min-h-[300px]">
            <h3 className="font-semibold mb-2 text-lg text-purple-600">Kết quả Model 2</h3>
            <ReactMarkdown className="markdown">
              {model2Result || 'Kết quả sẽ được hiển thị ở đây...'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }

export default ResultDisplay;
