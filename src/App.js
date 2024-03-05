import React from 'react';
import AddEmployee from './components/AddEmployee';
import ListEmployee from './components/ListEmployee';
import { EmployeeProvider } from './components/EmployeeProvider';
export default function App() {
  return (
    <div>
      <EmployeeProvider>
        <AddEmployee/>
        <ListEmployee/>
      </EmployeeProvider>
      
    </div>
  )
}
