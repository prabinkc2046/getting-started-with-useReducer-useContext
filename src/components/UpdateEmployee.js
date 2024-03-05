import React, { useEffect, useRef } from 'react'
import { useEmployee } from './EmployeeProvider';

export default function UpdateEmployee() {
    const nameRef = useRef(null);
    const salaryRef = useRef(null);
    const roleRef = useRef(null);
    const {dispatch, state} = useEmployee();
    const editedEmployee = state.employees.find(emp => emp.id === state.editId);
    
    useEffect(()=>{
        nameRef.current.value=editedEmployee.name;
        salaryRef.current.value = editedEmployee.salary;
        roleRef.current.value = editedEmployee.role;
    },[editedEmployee])

    if (!editedEmployee) return null;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const salary = salaryRef.current.value;
        const role = roleRef.current.value;
        if (name && salary && role){
            dispatch({type:'UPDATE', payload:{name: name, salary: salary, role:role}})
            dispatch({type: 'EDIT', payload: null});
        } else{
            const confirmed = window.confirm("Would you like to go with empty update?" )
            if (confirmed){
                dispatch({type:'UPDATE', payload:{name: name, salary: salary, role:role}})
                dispatch({type: 'EDIT', payload: null});
            }
            
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            ref={nameRef}
            placeholder='name'
            />

            <input
            type='number'
            ref={salaryRef}
            placeholder='salary'
            />

            <input
            type='text'
            ref={roleRef}
            placeholder='role'
            />

            <button type='submit'>Update</button>
        </form>
    </div>
  )
}
