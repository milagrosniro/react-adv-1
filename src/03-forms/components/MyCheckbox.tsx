import React from 'react'

import {ErrorMessage, useField } from "formik"

interface IProps{
    label?: string;
    name: string;
    [x: string] : any
}

export const MyCheckbox = ({label, ...props}: IProps) => {
    
    const [field] = useField({...props, type:'checkbox'})
  return (
   <>
    <label>
    <input type="checkbox" className="text-input" {...field} {...props}/>
        {label}

    </label>
    
    <ErrorMessage name={props.name} component="span"  />
   </>
  )
}

export default MyCheckbox