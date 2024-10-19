import React, { useState } from 'react';
import image from '../images/images.jpeg'; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');

    try {
      const response = await fetch('https://school-backend-theta.vercel.app/auth/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('token', data.token);

        // Check role and redirect accordingly
        const userRole = data.data.role; 
        console.log(userRole)// Assuming the role is sent back in the response
        if (userRole === 'Admin') {
          navigate('/dashboard'); // Redirect to admin dashboard
        } else if (userRole === 'Student') {
          navigate('/studentDashboard'); // Redirect to student dashboard
        } else if (userRole === 'Parent') {
          navigate('/parentDashboard'); // Redirect to parent dashboard
        } else {
          setError('Unknown role.'); // Handle unexpected roles
        }
      } else {
        // Show backend error message
        setError(data.error || 'Failed to log in.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-3/4 max-w-4xl shadow-lg">
        <div className="w-1/2 hidden md:block">
          <img
            src={image} // Correct the path here
            alt="Illustration"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white p-8">
          <div className="flex justify-center mb-6">
            <img src={image} alt="images" className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border p-2 w-full rounded"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border p-2 w-full rounded pr-10" // Add padding to right for the icon
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute h-10 right-2 top-1/2 transform -translate-y-1/2"
                aria-label="Toggle password visibility"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="text-right pb-2">
              <a href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-white py-2 rounded-3xl hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-6">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Get Started For Free!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
