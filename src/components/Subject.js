import React, { useState } from 'react';

const SubjectForm = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [subjects, setSubjects] = useState([{ subjectName: '', marks: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedClass, subjects });
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subjectName: '', marks: '' }]);
  };

  const handleRemoveSubject = () => {
    if (subjects.length > 1) {
      setSubjects(subjects.slice(0, -1));
    }
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = subjects.map((subject, i) =>
      i === index ? { ...subject, [field]: value } : subject
    );
    setSubjects(updatedSubjects);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 mt-16 md:mt-20">
      {/* Title Box */}
      <div className="mb-6 p-2 rounded-lg border border-purple-500 shadow-sm">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Subjects</h2>
          <span className="mx-2 text-gray-500 hidden md:inline">|</span> {/* Hide pipe separator on smaller screens */}
          <span className="text-gray-500 mr-2">🏠</span>
          <span className="text-gray-700">Add New Subject</span>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h6 className="text-center text-gray-950 font-bold text-lg md:text-2xl pb-2">Add New Subject</h6>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">
              Select Class*
            </label>
            <select
              id="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              required
              className="mt-1 block w-full border rounded-3xl p-2 focus:ring-indigo-500 focus:border-indigo-500"
              style={{ borderColor: '#a855f7' }}
            >
              <option value="">Select</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
            </select>
          </div>

          {/* Dynamic Subject Name and Marks */}
          {subjects.map((subject, index) => (
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0" key={index}>
              <div className="w-full md:w-1/2">
                <label htmlFor={`subjectName-${index}`} className="block text-sm font-medium text-gray-700">
                  Subject Name*
                </label>
                <input
                  type="text"
                  id={`subjectName-${index}`}
                  value={subject.subjectName}
                  onChange={(e) => handleSubjectChange(index, 'subjectName', e.target.value)}
                  required
                  className="mt-1 block w-full border rounded-3xl p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  style={{ borderColor: '#a855f7' }}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor={`marks-${index}`} className="block text-sm font-medium text-gray-700">
                  Marks*
                </label>
                <input
                  type="number"
                  id={`marks-${index}`}
                  value={subject.marks}
                  onChange={(e) => handleSubjectChange(index, 'marks', e.target.value)}
                  required
                  className="mt-1 block w-full border rounded-3xl p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  style={{ borderColor: '#a855f7' }}
                />
              </div>
            </div>
          ))}

          {/* Add and Remove Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-4 mt-6 justify-center">
            <button
              type="button"
              className="flex items-center justify-center w-full md:w-32 h-10 bg-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-400 mb-4 md:mb-0"
              onClick={handleAddSubject}
            >
              + Add Subject
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full md:w-32 h-10 bg-black text-white font-semibold rounded-full hover:bg-gray-800"
              onClick={handleRemoveSubject}
            >
              - Remove
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full md:w-[30%] bg-orange-500 text-white font-bold py-2 rounded-3xl hover:bg-orange-600 transition-all duration-300"
            >
              + Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubjectForm;
