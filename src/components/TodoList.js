import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../actions/todoAction'
import Todo from './Todo'


const TodoList = (props) => {

    useEffect(() => {
        props.fetchTodos()
        return () => {
            console.log('cleanup')
        };
    },[])

    return (
        <div>
            {props.todos && props.todos.map((todo) => <Todo todo={todo}/> )}
        </div>
    )
}

const mapStateToProps = ({todoReducer}) => {
    return {
        todos: todoReducer.todos
    }
}

export default connect(mapStateToProps, {fetchTodos})(TodoList);


