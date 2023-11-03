import React from 'react'
import classes from './FormButton.module.css'
function FormButton({children, ...props}) {
    return (
        <button {...props} className={classes.FormBtn}>
            {children}
        </button>
    )
}

export default FormButton