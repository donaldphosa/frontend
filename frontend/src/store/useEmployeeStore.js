import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

// base url will be dynamic depending on the environment
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";
const BASE_URL = "http://localhost:3000";

export const useEmployeeStore = create((set, get) => ({
  // products state
  employees: [],
  loading: false,
  error: null,
  currentEmployees: null,

  // form state
  formData: {
    name: "",
    phone: "",
    email: "",
    surname: ""
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", phone: "", email: "", surname: "" } }),
  addEmployee: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { formData } = get();

      // If formData is a plain object with name, surname, email, phone:
      await axios.post(`${BASE_URL}/api/employees`, formData);

      // Make sure this is correctly named
      await get().fetchEmployees();

      get().resetForm();
      toast.success("Employee added successfully");

      document.getElementById("add_employee_modal").close();
    } catch (error) {
      console.log("Error in addEmployee function", error?.response?.data || error.message);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },


  fetchEmployees: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/employees`);

      set({ employees: response.data.data, error: null });
    } catch (err) {
      if (err.status == 429) set({ error: "Rate limit exceeded", employees: [] });
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteEmployee: async (id) => {
    console.log("deleteEmployee function called", id);
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/employees/${id}`);
      set((prev) => ({
        employees: prev.employees.filter((employee) => employee.id !== id),
      }));
      toast.success("Employee deleted successfully");
    } catch (error) {
      console.log("Error in deleteEmployee function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },
  

  fetchEmployee: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/employees/${id}`);
      
      
      set({
        currentEmployees: response.data.data,
        formData: response.data.data, 
        error: null,
      });
    } catch (error) {
      console.log("Error in fetchEmployee function", error);
      set({ error: "Something went wrong", currentEmployees: null });
    } finally {
      set({ loading: false });
    }
  },

  updateEmployee: async (id) => {
    set({ loading: true });
    try {
      const { formData } = get();
      const response = await axios.put(`${BASE_URL}/api/employees/${id}`, formData);
      set({ currentEmployees: response.data.data });
      toast.success("employee updated successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error in employee function", error);
    } finally {
      set({ loading: false });
    }
  },
}));
