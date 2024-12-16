import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from "../assets/images/error.jpg";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md p-5 mt-10">
        <img
          src={errorImg}
          alt="Error"
          className="w-full h-auto mb-8 rounded-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
