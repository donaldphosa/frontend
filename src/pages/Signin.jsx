import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useUserStore'; // adjust path
import { handleInputValidation } from "../handleInput/handleInput";


function Signin() {
  const navigate = useNavigate();
  const { formData, setFormData, signIn, loading } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    handleInputValidation(e)
    signIn(e, navigate); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary w-full" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account? <a href="/signup" className="link link-primary">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
