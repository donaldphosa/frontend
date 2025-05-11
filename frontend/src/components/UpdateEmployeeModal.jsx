import { PhoneIcon, MailIcon, Package2Icon, PlusCircleIcon } from "lucide-react";
import { useEmployeeStore } from "../store/useEmployeeStore";

function UpdateEmployeeModal() {
  const { updateEmployee, formData, setFormData , loading } = useEmployeeStore();


  return (
    <dialog id="update_employee_modal" className="modal">
      <div className="modal-box">
        {/* CLOSE BUTTON */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
        </form>

        {/* MODAL HEADER */}
        <h3 className="font-bold text-xl mb-8">Update Employee</h3>

        <form onSubmit={(e)=>{
          e.preventDefault()
          document.getElementById("update_employee_modal").close()
          updateEmployee(formData.id)
          }} className="space-y-6">
          <div className="grid gap-6">
            {/* PRODUCT NAME INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Employee name"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Surname</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Employee surname"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.surname}
                  onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                />
              </div>
            </div>

            {/* PRODUCT PRICE INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Phone Number</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <PhoneIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="082 123 4567"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Employee Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <MailIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="employee@example.com"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              disabled={!formData.name || !formData.phone || !formData.email || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Employee
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* BACKDROP */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
export default UpdateEmployeeModal;
