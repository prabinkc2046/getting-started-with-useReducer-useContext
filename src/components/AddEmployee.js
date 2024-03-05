import React, { useRef } from 'react'
import { useEmployee } from './EmployeeProvider';

export default function AddEmployee() {
    const nameRef = useRef(null);
    const salaryRef = useRef(null);
    const roleRef = useRef(null);
    const {dispatch} = useEmployee();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const salary = salaryRef.current.value;
        const role = roleRef.current.value;
        dispatch({type:'ADD', payload:{name: name, salary: salary, role: role}})
        nameRef.current.value = "";
        salaryRef.current.value = "";
        roleRef.current.value = "";
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

            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
