import {FETCH_TODO_START, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE} from "../actions/todoAction"

const initialState = {
    todos: [],
    todo: '',
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_TODO_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: [...state.todos, action.payload]
            }    

        default:
            return state
    }
}