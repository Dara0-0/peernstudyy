import React, { useState } from 'react';

const Dashboard = () => {
  // Example requests data
  const [requests, setRequests] = useState([
    {
      id: '1',
      studentID: '12345',
      fullName: 'John Doe',
      course: 'OBLICON 1',
      availableTime: '10:00 AM - 12:00 PM',
      position: 'Head Tutor',
      schoolEmail: 'jdd1234@students.uc-bcf.edu.ph',
      status: 'Pending',
    },
    {
      id: '2',
      studentID: '12346',
      fullName: 'Alice Johnson',
      course: 'MATHED 101',
      availableTime: '1:00 PM - 3:00 PM',
      position: 'Head Tutor',
      schoolEmail: 'alj2563@students.uc-bcf.edu.ph',
      status: 'Pending',
    },
  ]);

  // State for modal and form visibility
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // State for the edit form
  const [formData, setFormData] = useState({
    fullName: '',
    course: '',
    availableTime: '',
    studentID: '',
    schoolEmail: '',
    position: '',
  });

  const handleEdit = (req) => {
    setSelectedRequest(req);
    setFormData({
      fullName: req.fullName,
      course: req.course,
      availableTime: req.availableTime,
      studentID: req.studentID,
      schoolEmail: req.schoolEmail,
      position: req.position,
    });
    setShowModal(true);
  };

  const handleDelete = (requestId) => {
    setRequests((prev) => prev.filter((req) => req.id !== requestId));
    setShowDeleteConfirmation(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setRequests((prev) =>
      prev.map((req) =>
        req.id === selectedRequest.id ? { ...req, ...formData } : req
      )
    );
    setShowModal(false);
  };

  return (
    <div className="m-5">
      {/* Requests Table */}
      <div className="w-full max-w-7xl m-5">
        <p className="mb-3 text-lg font-medium">All Peer Facilitators</p>
        <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
          <div className="hidden sm:grid grid-cols-[1fr_2fr_2fr_2fr_2fr_2fr_1fr_1fr] grid-flow-col py-3 px-6 border-b bg-gray-200">
            <p className="font-medium">Student ID</p>
            <p className="font-medium">Full Name</p>
            <p className="font-medium">Course</p>
            <p className="font-medium">Available Time</p>
            <p className="font-medium">Position</p>
            <p className="font-medium">School Email</p>
            <p className="font-medium">Status</p>
            <p className="font-medium">Actions</p>
          </div>
          {requests.map((req) => (
            <div
              className="flex justify-between items-center py-3 px-6 border-b hover:bg-gray-50"
              key={req.id}
            >
              <p>{req.studentID}</p>
              <p>{req.fullName}</p>
              <p>{req.course}</p>
              <p>{req.availableTime}</p>
              <p>{req.position}</p>
              <p>
                <a
                  href={`mailto:${req.schoolEmail}`}
                  className="text-blue-500 hover:underline"
                >
                  {req.schoolEmail}
                </a>
              </p>
              <p
                className={`font-medium ${
                  req.status === 'Pending'
                    ? 'text-yellow-500'
                    : req.status === 'Assigned'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {req.status}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(req)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => setShowDeleteConfirmation(true)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Edit Request</h3>
            <form onSubmit={handleSubmitEdit}>
              <div className="mb-3">
                <label className="block">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block">Available Time</label>
                <input
                  type="text"
                  name="availableTime"
                  value={formData.availableTime}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block">Student ID</label>
                <input
                  type="text"
                  name="studentID"
                  value={formData.studentID}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block">School Email</label>
                <input
                  type="text"
                  name="schoolEmail"
                  value={formData.schoolEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-3">
                <label className="block">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Delete Request</h3>
            <p>Are you sure you want to delete this request?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedRequest.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
