import React from 'react'

import {useField } from "formik"

interface IProps{
    label?: string;
    name: string;
    [x: string] : any
}

const MyCheckbox = ({label, ...props}: IProps) => {
    
    const [field, meta] = useField({...props, type:'checkbox'})
  return (
   <>
    <label>
    <input type="checkbox" className="text-input" {...field} {...props}/>
        {label}

    </label>
    
    {
        meta.touched && meta.error && (
            <span className="error">{meta.error}</span>
        )
    }
   </>
  )
}

export default MyCheckbox