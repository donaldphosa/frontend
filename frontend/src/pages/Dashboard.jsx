import React, { useEffect, useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import Appointment from '../components/Appointment';
import { useAppointmentStore } from '../store/useAppointmentStore'
import { useEmployeeStore } from '../store/useEmployeeStore';
import UpdateEmployeeModal from '../components/UpdateEmployeeModal'
import UpdateAppointmentModal from '../components/UpdateAppointmentModal';

function Dashboard() {


    const { appointments, fetchAppointments, fetchAppointment, deleteAppointment } = useAppointmentStore();
    const { employees, fetchEmployees, fetchEmployee, deleteEmployee } = useEmployeeStore();
    const [currentModal, setCurrentModal] = useState("Appointments")

    useEffect(() => {
        fetchAppointments()
        fetchEmployees()
        
    }, [])

    return (
        <div className="flex min-h-screen bg-base-200">
            {/* Sidebar */}
            <div className="w-64 bg-base-100 shadow-md p-4">
                <h2 className="text-2xl font-bold mb-8">Sidebar</h2>

                <ul className="menu space-y-2">
                    <li onClick={() => setCurrentModal("Appointments")}>
                        <a className="text-base-content hover:bg-base-300 rounded-lg p-2">Appointments</a>

                    </li>
                    <li onClick={() => setCurrentModal("Employees")}>
                        <a className="text-base-content hover:bg-base-300 rounded-lg p-2">Employees</a>
                    </li>
                </ul>
            </div>
            <UpdateEmployeeModal />
            <UpdateAppointmentModal/>

            {/* Main View */}
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-semibold mb-6">Dashboard View</h1>


                {currentModal === "Appointments" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {appointments.map((appointment) => (
                            <Appointment
                                key={appointment.id}
                                appointment={appointment}
                                onUpdate={() => {
                                    fetchAppointment(appointment.id);                                    
                                    document.getElementById("update_appointment_modal").showModal();
                                }}
                                onDelete={() => {
                                    deleteAppointment(appointment.id);
                                }}
                            />
                        ))}
                    </div>
                )}

                {currentModal === "Employees" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {employees?.map((employee) => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                                onUpdate={() => {
                                    fetchEmployee(employee.id);
                                    document.getElementById("update_employee_modal").showModal();
                                }}
                                onDelete={() => {
                                    deleteEmployee(employee.id);
                                }}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Dashboard;
