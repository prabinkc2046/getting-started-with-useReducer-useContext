import React from 'react';
import { useEmployee } from './EmployeeProvider';
import EmployeeDetails from './EmployeeDetails';
export default function ListEmployee() {
    const {state, dispatch} = useEmployee();
  return (
    <div>
        {state.employees.map(emp => (
            <div key={emp.id}>
                {emp.id === state.visibleEmployeeId ? 
                (
                    <>
                    <EmployeeDetails/>
                    </>
                ) 
                :
                (
                    <>
                    <div>
                    <p>{emp.name}</p> 
                    <button onClick={() => dispatch({type:'SET_VISIBLE_EMPLOYEE_ID', payload: emp.id})}>Show details</button>
                    </div>
                    </>
                )}
            </div>
        ))}
    </div>
  )
}
