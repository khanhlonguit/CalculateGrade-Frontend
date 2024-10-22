import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Trạng thái cho tab Syllabus
  const [syllabusFile, setSyllabusFile] = useState(null);
  const [model1Result, setModel1Result] = useState('');
  const [model2Result, setModel2Result] = useState('');
  const [loadingModel1, setLoadingModel1] = useState(false);
  const [loadingModel2, setLoadingModel2] = useState(false);
  const [syllabusModel1, setSyllabusModel1] = useState('');
  const [syllabusModel2, setSyllabusModel2] = useState('');

  // Trạng thái cho tab Exam
  const [examSampleFile, setExamSampleFile] = useState(null);
  const [examSyllabus, setExamSyllabus] = useState('');
  const [examModel1, setExamModel1] = useState('');
  const [examModel2, setExamModel2] = useState('');
  const [loadingExamModel1, setLoadingExamModel1] = useState(false);
  const [loadingExamModel2, setLoadingExamModel2] = useState(false);
  const [examResult1, setExamResult1] = useState('');
  const [examResult2, setExamResult2] = useState('');

  const value = {
    syllabusFile,
    setSyllabusFile,
    model1Result,
    setModel1Result,
    model2Result,
    setModel2Result,
    loadingModel1,
    setLoadingModel1,
    loadingModel2,
    setLoadingModel2,
    syllabusModel1,
    setSyllabusModel1, 
    syllabusModel2,
    setSyllabusModel2,
    examSampleFile,
    setExamSampleFile,
    examSyllabus,
    setExamSyllabus,
    examModel1,
    setExamModel1,
    examModel2,
    setExamModel2,
    loadingExamModel1,
    setLoadingExamModel1,
    loadingExamModel2,
    setLoadingExamModel2,
    examResult1,
    setExamResult1,
    examResult2,
    setExamResult2
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
