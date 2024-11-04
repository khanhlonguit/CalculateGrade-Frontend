import React from 'react';
import FileUpload from './FileUpload';
import ModelSelection from './ModelSelection';
import ResultDisplay from './ResultDisplay';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function GradeTab() {
  const { 
    examFile, 
    setExamFile,
    submissionFiles,
    setSubmissionFiles,
    examSyllabus,
    gradeModel1,
    gradeModel2,
    gradeResult1,
    setGradeResult1,
    gradeResult2,
    setGradeResult2,
    loadingGradeModel1,
    setLoadingGradeModel1,
    loadingGradeModel2,
    setLoadingGradeModel2
  } = useAppContext();

  const handleExamFileUpload = (uploadedFile) => {
    setExamFile(uploadedFile);
  };

  const handleSubmissionFilesUpload = (uploadedFiles) => {
    if (uploadedFiles.length > 5) {
      alert('Chỉ được chọn tối đa 5 file bài làm.');
      return;
    }
    setSubmissionFiles(uploadedFiles);
  };

  const handleGenerateResult = async () => {
    if (!examFile || submissionFiles.length === 0) {
      alert('Vui lòng chọn file đề bài và ít nhất một file bài làm.');
      return;
    }

    if (!gradeModel1 || !gradeModel2) {
      alert('Vui lòng chọn cả hai model trước khi tạo kết quả.');
      return;
    }

    let formData = new FormData();
    formData.append('pdfFile', examFile);
    submissionFiles.forEach((file, index) => {
      formData.append(`submission`, file);
    });
    formData.append('syllabus', examSyllabus);
    formData.append('model1', gradeModel1);
    formData.append('model2', gradeModel2);

    try {
      setLoadingGradeModel1(true);
      setLoadingGradeModel2(true);
      console.log(formData);
      let response = await axios.post('http://localhost:3001/evaluate', formData);
      console.log(response.data);
      setGradeResult1(response.data.evaluation);
      setGradeResult2(response.data.evaluationMixtral);
    } catch (error) {
      console.error('Lỗi khi chấm bài:', error);
      alert('Có lỗi xảy ra khi chấm bài. Vui lòng thử lại.');
    } finally {
      setLoadingGradeModel1(false);
      setLoadingGradeModel2(false);
    }
  };

  return (
    <div>
      <FileUpload 
        onFileUpload={handleExamFileUpload} 
        file={examFile}
        label="Bước 1: Chọn file đề bài"
        id="exam-file"
      />
      <FileUpload 
        onFileUpload={handleSubmissionFilesUpload} 
        file={submissionFiles}
        label="Bước 2: Chọn file bài làm (tối đa 5 file)"
        multiple={true}
        id="submission-files"
      />

      <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bước 3: Syllabus</h2>
        <div className="border p-4 rounded bg-white h-[300px] overflow-auto">
          <ReactMarkdown className="markdown">
            {examSyllabus || 'Chưa có syllabus được chọn'}
          </ReactMarkdown>
        </div>
      </div>

      <ModelSelection onGenerateResult={handleGenerateResult} />

      <ResultDisplay/>
    </div>
  );
}

export default GradeTab;
