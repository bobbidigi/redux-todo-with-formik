import React from 'react'

const Todo = (props) => {
    return (
        <div className="card">
            {props.todo}<br/>
            <p>-Kanye West</p>
        </div>
    )
}

export default Todo