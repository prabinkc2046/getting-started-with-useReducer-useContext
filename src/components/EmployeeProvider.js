import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";
const EmployeeContext = createContext();
export const useEmployee = () => useContext(EmployeeContext);

export const EmployeeProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('209a7aa7-b2a7-42b3-9268-f4fd8e85a320')) || {
        employees: [],
        visibleEmployeeId: null,
        editId: null
    };

    const [state, dispatch] = useReducer(Reducer, initialState);
    useEffect(()=>{
        localStorage.setItem('209a7aa7-b2a7-42b3-9268-f4fd8e85a320', JSON.stringify(state));
    },[state])

    return (
        <EmployeeContext.Provider value={{state, dispatch}}>
            {children}
        </EmployeeContext.Provider>
    )
}