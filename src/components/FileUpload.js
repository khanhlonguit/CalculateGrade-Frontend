import React from 'react';
import { FaCloudUploadAlt, FaFileAlt } from 'react-icons/fa';

function FileUpload({ onFileUpload, file, label }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">{label}</h2>
      <div className="flex justify-start">
        <div className="relative w-48">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex items-center justify-center w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <FaCloudUploadAlt className="h-5 w-5 mr-2" />
            Chọn file
          </label>
        </div>
      </div>
      {file && (
        <div className="mt-4 p-3 bg-blue-100 rounded-lg max-w-md">
          <p className="text-sm text-blue-800 flex items-center">
            <FaFileAlt className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="truncate">{file.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
