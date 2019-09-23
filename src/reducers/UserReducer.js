const initState = {
    success : null,
    error: null
}

const UserReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADDCART_ERROR':
            console.log('login error');
            return {
                ...state,
                error: true,
            }
        case 'ADDCART_SUCCESS':
            console.log('login success');
            return {
                ...state,
                success: true,
            }
        default:
            return state;
    }
}

export default UserReducer;