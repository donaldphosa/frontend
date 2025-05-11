import { PencilIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee, onUpdate, onDelete }) {
  const navigate = useNavigate()
  return (
    <div className="card bg-base-100 p-4 space-y-2 m-10">
      <h2 className="text-xl font-semibold">{employee.name}</h2>
      <p className="text-gray-500">Email: {employee.email}</p>
      <p className="text-gray-500">Phone: {employee.phone}</p>

      <div className="flex space-x-2 mt-4">
        <button className="btn btn-sm btn-warning" onClick={() => {
          onUpdate(employee.id)
        }}>
          <PencilIcon className="size-4 mr-1" /> Update
        </button>
        <button className="btn btn-sm btn-error" onClick={() => onDelete(employee.id)}>
          <Trash2Icon className="size-4 mr-1" /> Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
