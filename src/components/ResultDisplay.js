import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function ResultDisplay() {
    const { 
        setExamSyllabus, 
        model1Result, 
        model2Result, 
        loadingModel1, 
        loadingModel2,
        gradeResult1,
        gradeResult2,
        loadingGradeModel1,
        loadingGradeModel2
    } = useAppContext();
    const navigate = useNavigate();

    const currentPath = window.location.pathname;
    const isSyllabusTab = currentPath === '/syllabus';

    const result1 = isSyllabusTab ? model1Result : gradeResult1;
    const result2 = isSyllabusTab ? model2Result : gradeResult2;
    const loading1 = isSyllabusTab ? loadingModel1 : loadingGradeModel1;
    const loading2 = isSyllabusTab ? loadingModel2 : loadingGradeModel2;

    function selectSyllabus(result){
        if (isSyllabusTab) {
            setExamSyllabus(result);
            navigate('/exam');
        }
    }

    return (
      <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Kết quả</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg bg-white h-[600px] flex flex-col">         
            {loading1 ? (
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
                    {result1 || 'Kết quả sẽ được hiển thị ở đây...'}
                  </ReactMarkdown>
                </div>
                {isSyllabusTab && result1 && (
                  <button
                    onClick={() => selectSyllabus(result1)}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
                  >
                    Chọn kết quả
                  </button>
                )}
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg bg-white h-[600px] flex flex-col">
            {loading2 ? (
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
                    {result2 || 'Kết quả sẽ được hiển thị ở đây...'}
                  </ReactMarkdown>
                </div>
                {isSyllabusTab && result2 && (
                  <button
                    onClick={() => selectSyllabus(result2)}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
                  >
                    Chọn kết quả
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default ResultDisplay;
