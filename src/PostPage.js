import React from "react";
import { connect } from "react-redux";

function PostPage(props) {
    console.log('props --- ', props)
    const PostDetails = (postData) => {
        return(
                <div>
                <div><h1>{postData.id} {postData.title ? postData.title : 'no data'}</h1></div>
                <div>{postData.body ? postData.body : 'no data'}</div>
                </div>
        )
    }
    return (
        <div>
            <div>
                <select onChange={(e) => props.fetchPostData(e.target.value)}>
                    <option>select option</option>
                    <option value={1}>post 1</option>
                    <option value={2}>post 2</option>
                    <option value={3}>post 3</option>
                    <option value={4}>post 4</option>
                </select>
            </div>
            <hr></hr>
            {PostDetails(props.postData)}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        postData: state.postData
    }
}
const fetchDataFromApiCall = (id) => {
    console.log('coming')
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id).then((resp) => resp.json()).then((response) => {
            console.log('response :- ', response)
            dispatch({
                type: 'FETCH',
                postData: response
            })
        }).catch((err) => (console.log(err)))
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchPostData: (id) => {
            console.log('call 1111');if(id){
                dispatch(fetchDataFromApiCall(id))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);