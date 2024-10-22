import React from 'react';
import FileUpload from './FileUpload';
import ModelSelection from './ModelSelection';
import ResultDisplay from './ResultDisplay';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';

function SyllabusTab() {
  const { 
    syllabusFile, 
    setSyllabusFile, 
    setLoadingModel1,
    setLoadingModel2,
    setModel1Result, 
    setModel2Result,
  } = useAppContext();

  const handleFileUpload = (uploadedFile) => {
    setSyllabusFile(uploadedFile);
  };

  const handleGenerateResult = async (modelNumber, selectedModel) => {
    if (!syllabusFile) {
      alert('Vui lòng chọn file syllabus trước khi tạo kết quả.');
      return;
    }

    if (!selectedModel) {
      alert('Vui lòng chọn model trước khi tạo kết quả.');
      return;
    }

    let formData = new FormData();
    formData.append('syllabus', syllabusFile);
    formData.append('model', selectedModel); 

    try {
      if (modelNumber === 1) {
        setLoadingModel1(true);
      } else {
        setLoadingModel2(true);
      } 
      let result = await axios.post('http://localhost:3001/summarize', formData);
      console.log(result.data.result);
      if (modelNumber === 1) {
        setModel1Result(result.data.result);
        setLoadingModel1(false);
      } else {
        setModel2Result(result.data.result);
        setLoadingModel2(false);
      }
    } catch (error) {
      console.error('Lỗi khi tạo kết quả:', error);
      alert('Có lỗi xảy ra khi tạo kết quả. Vui lòng thử lại.');
    }
  };

  return (
    <>
      <FileUpload 
        onFileUpload={handleFileUpload} 
        file={syllabusFile}
        label="Bước 1: Chọn file syllabus"
      />
      <ModelSelection 
        onGenerateResult={handleGenerateResult}
      />
      <ResultDisplay/>
    </>
  );
}

export default SyllabusTab;
