import { ErrorMessage, useField } from 'formik';


interface IProps{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'checkbox';
    placeholder?: string;
    [x: string] : any
}

export const MySelect = ({label, ...props}: IProps) => {

    const [field] = useField(props)
  return (
   <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <select {...field} {...props}/>
    <ErrorMessage name={props.name} component="span"  />
    
   </>
  )
}

export default MySelect