import axios from 'axios'

//types
export const FETCH_TODO_START = 'FETCH_TODO_START'
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS'
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE'


//action creator

export const fetchTodos = () => {
    dispatch({type: FETCH_TODO_START})
    axios.get('sdfsdf')
    .then((res) =>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err.response.error)
    })
} 


