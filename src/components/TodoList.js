import React from 'react'
import {connect} from 'react-redux'

const TodoList = (props) => {
    return (
        <div>
            hello
        </div>
    )
}

const mapStateToProps = ({todoReducer}) => {
    return {
        todos: todoReducer.todos
    }
}

export default connect(mapStateToProps, )(TodoList);

