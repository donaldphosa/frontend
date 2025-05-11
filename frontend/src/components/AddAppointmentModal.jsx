import { UserCircle, CalendarCheck, Package2Icon, PlusCircleIcon } from "lucide-react";
import { useAppointmentStore } from "../store/useAppointmentStore";

function AddAppointmentModal() {
  const { addAppointment, formData, setFormData, loading } = useAppointmentStore();

  return (
    <dialog id="add_appointment_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
        </form>

        <h3 className="font-bold text-xl mb-8">Add New Appointment</h3>

        <form onSubmit={addAppointment} className="space-y-6">
          <div className="grid gap-6">
            {/* EMPLOYEE NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Employee Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.employeeName}
                  onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
                />
              </div>
            </div>

            {/* EMPLOYEE SURNAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Employee Surname</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="input input-bordered w-full py-3"
                value={formData.employeeSurname}
                onChange={(e) => setFormData({ ...formData, employeeSurname: e.target.value })}
              />
            </div>

            {/* CUSTOMER NAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Customer Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <UserCircle className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Jane"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                />
              </div>
            </div>

            {/* CUSTOMER SURNAME */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Customer Surname</span>
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="input input-bordered w-full py-3"
                value={formData.customerSurname}
                onChange={(e) => setFormData({ ...formData, customerSurname: e.target.value })}
              />
            </div>

            {/* APPOINTMENT TYPE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Appointment Type</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <CalendarCheck className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="In-store / Home visit"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.appointmentType}
                  onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                />
              </div>
            </div>

            {/* PRICE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-base-content/50">R</span>
                </div>
                <input
                  type="text"
                  placeholder="100.00"
                  className="input input-bordered w-full pl-10 py-3"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
            </div>

            {/* DATE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Date and Time</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarCheck className="size-5" />
                </div>
                <input
                  type="datetime-local"
                  className="input input-bordered w-full pl-10 py-3"
                  placeholder="01/01/2000"
                  value={formData.appointmentDate}
                  onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* MODAL ACTIONS */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={
                !formData.employeeName ||
                !formData.employeeSurname ||
                !formData.customerName ||
                !formData.customerSurname ||
                !formData.appointmentType ||
                !formData.price ||
                !formData.appointmentDate ||
                loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Place Appointment
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddAppointmentModal;
