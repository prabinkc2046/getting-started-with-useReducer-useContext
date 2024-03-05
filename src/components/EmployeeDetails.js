import React from 'react';
import { useEmployee } from './EmployeeProvider';
import UpdateEmployee from './UpdateEmployee';
export default function EmployeeDetails() {
    const {state, dispatch} = useEmployee();
    const employ = state.employees.find(emp => emp.id === state.visibleEmployeeId);
    if (!employ) return null;

  return (
    <div>
        <h2>Employ details: {employ.name}</h2>
        <div>
            {employ.id === state.editId ? (
                <>
                <UpdateEmployee/>
                </>
            ) : (
                <>
                <li>Salary: {employ.salary}</li>
                <li>Role: {employ.role}</li>
                <button onClick={() => dispatch({type: 'SET_VISIBLE_EMPLOYEE_ID', payload: null})}>Hide details</button>
                <button onClick={() => dispatch({type:'EDIT', payload: employ.id})}>Edit</button>
                <button onClick={() => dispatch({type:'DEL'})}>Delete</button>
                </>
            )}
        </div>
    </div>
  )
}
