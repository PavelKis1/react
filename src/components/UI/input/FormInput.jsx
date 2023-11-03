import React from 'react'
import classes from './FormInput.module.css'
function FormInput(props) {
    return (
        <input className={classes.FormInput} {...props}/>
    )
}

export default FormInput