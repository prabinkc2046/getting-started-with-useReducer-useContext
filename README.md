# Employee Management System

## Introduction

The Employee Management System is a web application designed to manage a list of employees. It provides functionalities to view, add, update, and delete employee records.

## Context and State Management

The system uses `useContext` hook along with a custom context called `EmployeeContext` to manage the state of the list of employees across different components. The context provides a centralized place to store and manipulate the employee data without prop drilling.

### EmployeeProvider

The `EmployeeProvider` component wraps the application and serves as the provider for the `EmployeeContext`. It ensures that the employee data is accessible to all components within its scope.

### Reducer

A reducer function is implemented to handle various actions such as adding a new employee, deleting an employee, and updating employee details. The reducer updates the state of the employee list based on the dispatched actions.

## Components

### ListEmployee

The `ListEmployee` component displays a list of employees. It retrieves the employee data from the `EmployeeContext` using the `useContext` hook. Users can view, add, update, and delete employees from this component.

### EmployeeDetails

The `EmployeeDetails` component displays detailed information about a selected employee. It also utilizes the `EmployeeContext` to access the employee data and provides options to update or delete the employee.

### AddEmployee

The `AddEmployee` component allows users to add a new employee to the system. It retrieves the employee list from the `EmployeeContext` and dispatches actions to add a new employee record.

## Bonus Features

### Local Storage

The system implements local storage functionality to persist employee data even after page refresh. This ensures that the employee records are retained across sessions, providing a seamless user experience.

## Usage

To use the Employee Management System in your application:

1. Import the `EmployeeProvider` component and wrap your application with it to provide access to the employee context.
2. Implement the `ListEmployee`, `EmployeeDetails`, and `AddEmployee` components, utilizing the `useContext` hook to access and manipulate employee data.
3. Customize the reducer function to handle additional actions or functionalities as per your requirements.

## Conclusion

The Employee Management System offers a robust solution for managing employee data in a web application. By leveraging `useContext` for state management and implementing a reducer function, it provides a scalable and efficient way to handle employee records across different components. 
