import React from 'react'
import {withFormik,  Form, Field} from 'formik'
import * as yup from 'yup'

const TodoForm = (props) => {
    return (
        <Form>
            <Field type="text" 
            name="todo" 
            placeholder="new quote"
            value={props.values.todo}/>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            todo: values.todo || ''        }
    },
    validationSchema: yup.object().shape({
      todo: yup.string().required('please enter a quote')  
    }),
    handleSubmit: values => {}
})(TodoForm)
