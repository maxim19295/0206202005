export const requestReducer = (state,action)=>{
    if(action.type==='ADD'){
        return {...state, requestsList: [...state.requestsList, {id: state.requestsList.length+1, name: action.name, date: action.date, text: action.text}]}
    }
    return state;
}