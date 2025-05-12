import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: false,
  error: null,

  // form state for signup and signin
  formData: {
    username: "",
    email: "",
    password: "",
  },

  setFormData: (formData) => set({ formData }),

  resetForm: () =>
    set({
      formData: {
        username: "",
        email: "",
        password: "",
      },
    }),

signUp: async (e, navigate) => {
  e.preventDefault();
  set({ loading: true });

  try {
    const { formData } = get();
    const response = await axios.post(`${BASE_URL}/api/users`, formData);

    set({ user: response.data.data });
    toast.success("Signup successful");

    get().resetForm();
    navigate("/"); // Navigate to homepage after signup
  } catch (error) {
    console.error("Error in signUp:", error);
    toast.error(error?.response?.data?.message || "Signup failed");
  } finally {
    set({ loading: false });
  }
}
,

signIn: async (e, navigate) => {
  e.preventDefault();
  set({ loading: true });

  try {
    const { formData } = get();
    const response = await axios.post(`${BASE_URL}/api/users/signin`, formData);

    set({ user: response.data.data });
    toast.success("Signin successful");

    get().resetForm();
    navigate("/home"); // Navigate to homepage
  } catch (error) {
    console.error("Error in signIn:", error);
    toast.error(error?.response?.data?.message || "Signin failed");
  } finally {
    set({ loading: false });
  }
},


  logout: () => {
    set({ user: null });
    toast("Logged out");
  }
  
}));
