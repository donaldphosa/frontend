import { PencilIcon, Trash2Icon } from "lucide-react";

function Appointment({ appointment, onUpdate, onDelete }) {
  return (
    <div className="card bg-base-100 p-4 space-y-2 m-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Appointment Details</h2>
      
      <p className="text-gray-600">
        <strong>Employee Name:</strong> {appointment.employeename}
      </p>
      <p className="text-gray-600">
        <strong>Employee Surname:</strong> {appointment.employeesurname}
      </p>
      <p className="text-gray-600">
        <strong>Customer Name:</strong> {appointment.customername}
      </p>
      <p className="text-gray-600">
        <strong>Customer Surname:</strong> {appointment.customersurname}
      </p>
      <p className="text-gray-600">
        <strong>Appointment Type:</strong> {appointment.appointmenttype}
      </p>
      <p className="text-gray-600">
        <strong>Price:</strong> R{appointment.price}
      </p>
      <p className="text-gray-600">
        <strong>Appointment Date:</strong>{" "}
        {new Date(appointment.appointmentdate).toLocaleString("en-ZA", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      <div className="flex space-x-2 mt-4">
        <button
          className="btn btn-sm btn-warning"
          onClick={() => onUpdate(appointment.id)}
        >
          <PencilIcon className="size-4 mr-1" /> Update
        </button>
        <button
          className="btn btn-sm btn-error"
          onClick={() => onDelete(appointment.id)}
        >
          <Trash2Icon className="size-4 mr-1" /> Delete
        </button>
      </div>
    </div>
  );
}

export default Appointment;
