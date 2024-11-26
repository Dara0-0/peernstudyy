import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { aToken, getDashData, dashData } = useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  const [requests, setRequests] = useState([
    {
      id: 'REQ001',
      fullName: 'John Doe',
      course: 'OBLICON 1',
      availableTime: '10:00 AM - 12:00 PM',
      studentID: '12345',
      schoolEmail: 'jdd1234@students.uc-bcf.edu.ph',
      status: 'Pending',
    },
    {
      id: 'REQ002',
      fullName: 'Alice Johnson',
      course: 'MATHED 101',
      availableTime: '1:00 PM - 3:00 PM',
      studentID: '12346',
      schoolEmail: 'alj2563@students.uc-bcf.edu.ph',
      status: 'Pending',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [peerFacilitators, setPeerFacilitators] = useState([
    { name: 'David Lee', availability: '10:00 AM - 12:00 PM', subject: 'Mathematics' },
    { name: 'Emma Watson', availability: '1:00 PM - 3:00 PM', subject: 'Physics' },
  ]);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  const handleAssignTutor = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleTutorSelection = (tutor) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === selectedRequest.id
          ? { ...req, status: 'Assigned', assignedTutor: tutor.name }
          : req
      )
    );
    setShowModal(false);
  };

  const handleRejectRequest = (requestId) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === requestId ? { ...req, status: 'Rejected' } : req))
    );
    setShowModal(false);
  };

  return (
    <div className="m-5">
      {/* Summary Cards */}
      {dashData && (
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.appointments_icon} alt="Sessions Icon" />
            <div>
              <p className="text-xl font-semibold text-gray-600">{dashData.totalSessions}</p>
              <p className="text-gray-400">Total Sessions</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="Active Tutors Icon" />
            <div>
              <p className="text-xl font-semibold text-gray-600">{dashData.activeTutors}</p>
              <p className="text-gray-400">Active Tutors</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="Active Students Icon" />
            <div>
              <p className="text-xl font-semibold text-gray-600">{dashData.activeStudents}</p>
              <p className="text-gray-400">Active Students</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="Active Students Icon" />
            <div>
              <p className="text-xl font-semibold text-gray-600">{dashData.activeStudents}</p>
              <p className="text-gray-400">Active Students2</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="Active Students Icon" />
            <div>
              <p className="text-xl font-semibold text-gray-600">{dashData.activeStudents}</p>
              <p className="text-gray-400">Active Students3</p>
            </div>
          </div>
        </div>
      )}

      {/* Requests Table */}
      <div className="w-full max-w-6xl m-5">
        <p className="mb-3 text-lg font-medium">All Requests</p>
        <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
          <div className="hidden sm:grid grid-cols-[1fr_2fr_2fr_2fr_2fr_3fr_1fr_2fr] grid-flow-col py-3 px-6 border-b">
            <p>Request ID</p>
            <p>Full Name</p>
            <p>Course</p>
            <p>Available Time</p>
            <p>Student ID</p>
            <p>School Email</p>
            <p>Status</p>
            <p>Actions</p>
          </div>
          {requests.map((req) => (
            <div
              className="flex flex-wrap justify-between sm:grid sm:grid-cols-[1fr_2fr_2fr_2fr_2fr_3fr_1fr_2fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
              key={req.id}
            >
              <p>{req.id}</p>
              <p>{req.fullName}</p>
              <p>{req.course}</p>
              <p>{req.availableTime}</p>
              <p>{req.studentID}</p>
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
                {req.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleAssignTutor(req)}
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Assign
                    </button>
                    <button
                      onClick={() => handleRejectRequest(req.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assign Tutor Modal */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">
              Assign Tutor for {selectedRequest.fullName}
            </h3>
            {peerFacilitators.filter(
              (tutor) =>
                tutor.subject === selectedRequest.course &&
                tutor.availability === selectedRequest.availableTime
            ).length > 0 ? (
              <ul className="space-y-3">
                {peerFacilitators
                  .filter(
                    (tutor) =>
                      tutor.subject === selectedRequest.course &&
                      tutor.availability === selectedRequest.availableTime
                  )
                  .map((tutor, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-100 p-3 rounded"
                    >
                      <span>{tutor.name}</span>
                      <button
                        onClick={() => handleTutorSelection(tutor)}
                        className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Assign
                      </button>
                    </li>
                  ))}
              </ul>
            ) : (
              <div className="text-center">
                <p className="text-gray-500 mb-4">No tutor available for this schedule.</p>
                <button
                  onClick={() => handleRejectRequest(selectedRequest.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Reject Request
                </button>
              </div>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400 w-full"
            >
              Close
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
