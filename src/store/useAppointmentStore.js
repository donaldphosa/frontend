import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useAppointmentStore = create((set, get) => ({
  appointments: [],
  loading: false,
  error: null,
  currentAppointment: null,

  // form state
  formData: {
    employeeName: "",
    employeeSurname: "",
    customerName: "",
    customerSurname: "",
    appointmentType: "",
    price: "",
    appointmentDate: ""
  },

  setFormData: (formData) => set({ formData }),

  resetForm: () =>
    set({
      formData: {
        employeeName: "",
        employeeSurname: "",
        customerName: "",
        customerSurname: "",
        appointmentType: "",
        price: "",
        appointmentDate: ""
      }
    }),

  addAppointment: async (e) => {
    e.preventDefault();
    set({ loading: true });
    

    try {
      const { formData } = get();
      console.log(formData,"formData");
      
      await axios.post(`${BASE_URL}/api/appointments`, formData);
      get().resetForm();
      toast.success("Appointment added successfully");
      document.getElementById("add_appointment_modal").close();
      get().fetchAppointments(); // Refresh list after add
    } catch (error) {
      console.error("Error in addAppointment:", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchAppointments: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/appointments`);
      
      set({ appointments: response.data.data, error: null });
    } catch (err) {
      console.error("Error in fetchAppointments:", err);
      set({
        error:
          err?.response?.status === 429
            ? "Rate limit exceeded"
            : "Something went wrong",
        appointments: [],
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchAppointment: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/appointments/${id}`);
      
      set({
        currentAppointment: response.data.data,
        formData: response.data.data,
        error: null,
      });
    } catch (error) {
      console.error("Error in fetchAppointment:", error);
      set({ error: "Something went wrong", currentAppointment: null });
    } finally {
      set({ loading: false });
    }
  },

  updateAppointment: async (id) => {
    set({ loading: true });
    try {
      const { formData } = get();
      const response = await axios.put(
        `${BASE_URL}/api/appointments/${id}`,
        formData
      );
      set({ currentAppointment: response.data.data });
      toast.success("Appointment updated successfully");
      get().fetchAppointments(); // Refresh list after update
    } catch (error) {
      console.error("Error in updateAppointment:", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  deleteAppointment: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/appointments/${id}`);
      set((prev) => ({
        appointments: prev.appointments.filter((a) => a.id !== id),
      }));
      toast.success("Appointment deleted successfully");
    } catch (error) {
      console.error("Error in deleteAppointment:", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },
}));
