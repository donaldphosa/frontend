import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useUserStore'; // adjust path
import { handleInputValidation } from "../handleInput/handleInput";


function Signup() {
  const navigate = useNavigate();
  const { formData, setFormData, signUp, loading } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    handleInputValidation(e)
    signUp(e, navigate); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input input-bordered w-full"
            value={formData.username || ""}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={formData.password || ""}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary w-full" type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/signin" className="link link-primary">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
