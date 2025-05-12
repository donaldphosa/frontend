import {
    CalendarIcon,
    UserIcon,
    PlusCircleIcon,
  } from "lucide-react";
  import { useAppointmentStore } from "../store/useAppointmentStore";
  import { handleInputValidation } from "../handleInput/handleInput";

  
  function UpdateAppointmentModal() {
    const {
      updateAppointment,
      formData,
      setFormData,
      loading,
    } = useAppointmentStore();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.id) {
        console.error("Missing appointment ID");
        return;
      }
      await updateAppointment(formData.id);
      document.getElementById("update_appointment_modal").close();
    };
  
    return (
      <dialog id="update_appointment_modal" className="modal">
        <div className="modal-box">
          {/* CLOSE BUTTON */}
          <button
            onClick={() =>
              document.getElementById("update_appointment_modal").close()
            }
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            X
          </button>
  
          <h3 className="font-bold text-xl mb-8">Update Appointment</h3>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6">
              {/* Employee Name */}
              <InputField
                label="Employee Name"
                icon={<UserIcon className="size-5" />}
                value={formData.employeeName}
                onChange={(val) => {
                  handleInputValidation(e)
                  setFormData({ ...formData, employeeName: val })}}
                placeholder="Enter employee name"
              />
  
              {/* Employee Surname */}
              <InputField
                label="Employee Surname"
                value={formData.employeeSurname}
                onChange={(val) => {
                  handleInputValidation(e)
                  setFormData({ ...formData, employeeSurname: val })}}
                placeholder="Enter employee surname"
              />
  
              {/* Customer Name */}
              <InputField
                label="Customer Name"
                value={formData.customerName}
                onChange={(val) => {
                  handleInputValidation(e)
                  setFormData({ ...formData, customerName: val })}}
                placeholder="Enter customer name"
              />
  
              {/* Customer Surname */}
              <InputField
                label="Customer Surname"
                value={formData.customerSurname}
                onChange={(val) => {
                  handleInputValidation(e)
                  setFormData({ ...formData, customerSurname: val })}}
                placeholder="Enter customer surname"
              />
  
              {/* Appointment Type */}
              <InputField
                label="Appointment Type"
                value={formData.appointmentType}
                onChange={(val) => {
                  handleInputValidation(e)
                  
                  setFormData({ ...formData, appointmentType: val })}}
                placeholder="Consultation / Checkup"
              />
  
              {/* Price */}
              <InputField
                label="Price"
                type="number"
                value={formData.price}
                onChange={(val) => {
                  handleInputValidation(e)
                  setFormData({ ...formData, price: val })}}
                placeholder="Enter appointment price"
              />
  
              {/* Appointment Date */}
              <InputField
                label="Appointment Date"
                type="datetime-local"
                icon={<CalendarIcon className="size-5" />}
                value={formData.appointmentDate}
                onChange={(val) =>{
                  handleInputValidation(e)
                  setFormData({ ...formData, appointmentDate: val })
                }
                }
              />
            </div>
  
            {/* ACTION BUTTONS */}
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  document.getElementById("update_appointment_modal").close()
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary min-w-[120px]"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    <PlusCircleIcon className="size-5 mr-2" />
                    Update Appointment
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    );
  }
  
  function InputField({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    icon,
  }) {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base font-medium">{label}</span>
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
              {icon}
            </div>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={`input input-bordered w-full py-3 ${
              icon ? "pl-10" : "pl-3"
            }`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    );
  }
  
  export default UpdateAppointmentModal;
  