import React from 'react'
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

const RegisterPage = () => {

   const {formData, onChange, email, password1, password2, name, resetForm, isValidEmail} = useForm({
    name: '',
    email: '',
    password1: '',
    password2:''
   })
   
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate={true}
        onSubmit={(e)=>onSubmit(e)}
        >


            <input
            type="text"
            placeholder='Name'
            value= {name}
            onChange={(e) =>onChange(e)}
            name='name'
            className={`${name.trim().length <=0 && 'has-error'}`}
            >
            </input>

            {name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e)=>onChange(e)}
            name='email'
            className={`${!isValidEmail(email) && 'has-error'}`}
            >
            </input>

            { !isValidEmail(email) && <span>Email no es valido</span>

            }

            <input
            type="password"
            placeholder='Password'
            value={password1}
            onChange={onChange}
            name= 'password1'
            >
            </input>

            {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password1.trim().length <6 && password1.trim().length >0 && <span>La contraseña tiene tener 6 caracteres</span>}

            <input
            type="password"
            placeholder='Repeat Password'
            value={password2}
            onChange={onChange}
            name='password2'
            >
            </input>

            {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            {password2.trim().length <6 && password2.trim().length >0 && <span>La contraseña tiene tener 6 caracteres</span>}
            {password2.trim().length >0 && password1 !== password2 && <span>Las contraseñas deberias ser iguales</span>}

            <button
            type='submit'
            
            >
                Create
            </button>
            
            <button onClick={resetForm}       
            >
               Reset Form
            </button>
        </form>
    </div>
  )
}

export default RegisterPage