const initialData={
    cartCount:0
}
const cartReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'Add_To_Cart':
            return{
                cartCount:++state.cartCount
            }
            case 'Remove_From_Cart':
            return{
                cartCount:--state.cartCount
            }
            default:
            return state
        

    }



}

export default cartReducer