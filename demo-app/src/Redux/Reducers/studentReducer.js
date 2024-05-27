const initialData={
    name:'Nikit'
}
const studentReducer=(state=initialData,action)=>{
    switch(action.type){
        case'Change_Name':
        return{
        name:action.payload

        }
        default:
        return state
    }
}

export default studentReducer
