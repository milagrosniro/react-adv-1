import {useField } from "formik"

interface IProps{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'checkbox';
    placeholder?: string;
    [x: string] : any
}

const MyTextInput = ({label, ...props}: IProps) => {
    //field = {name, value, onChange, onBlur}
    const [field, meta] = useField(props)
  return (
   <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className="text-input" {...field} {...props}/>
    {
        meta.touched && meta.error && (
            <span className="error">{meta.error}</span>
        )
    }
   </>
  )
}

export default MyTextInput