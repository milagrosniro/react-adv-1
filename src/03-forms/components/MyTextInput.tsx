import {ErrorMessage, useField } from "formik"

interface IProps{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'checkbox';
    placeholder?: string;
    [x: string] : any
}

export const MyTextInput = ({label, ...props}: IProps) => {
    //field = {name, value, onChange, onBlur}
    const [field] = useField(props)

  return (
   <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className="text-input" {...field} {...props}/>
    <ErrorMessage name={props.name} component="span"  />
   
   </>
  )
}

export default MyTextInput