export const Reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, employees: [...state.employees, {id: Date.now(), ...action.payload}]};
        
        case 'SET_VISIBLE_EMPLOYEE_ID':
            return {...state, visibleEmployeeId: action.payload}  
        
        case 'DEL':
            return {...state, employees:[...state.employees.filter(emp => emp.id !== state.visibleEmployeeId)], visibleId: null}
        
        case 'EDIT':
            return {...state, editId: action.payload}
        case 'UPDATE':
            return {...state, employees:[...state.employees.map(emp => emp.id === state.editId ? {...emp, ...action.payload} : emp)]}
        default:
            return state
    }
}