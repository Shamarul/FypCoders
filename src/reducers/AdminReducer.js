const initState = {
    success : null,
    error: null
}

const AdminReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADDITEM_ERROR':
            console.log('login error');
            return {
                ...state,
                error: true,
            }
        case 'ADDITEM_SUCCESS':
            console.log('login success');
            return {
                ...state,
                success: true,
            }
        default:
            return state;
    }
}

export default AdminReducer;