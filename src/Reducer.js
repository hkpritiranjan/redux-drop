const initialState={
    postData:{}
}

function Reducer(state=initialState,action){
    switch(action.type){
        case 'FETCH':
            return{
                postData:action.postData
            }
        default:
            return state;
    }
}

export default Reducer;