import React from 'react'
import {FormikErrors, useFormik} from 'formik'
import '../styles/styles.css'

interface IFormValues{
    firstName: string,
    lastName: string,
    email: string
}

const FormikBasicPage = () => {

    const validate = ({firstName,lastName,email}: IFormValues) =>{
        const errors: FormikErrors<IFormValues> = {};

        if(!firstName){
            errors.firstName= 'Required'
        }else if(firstName.length >= 15){
            errors.firstName='Must be 15 characters or less'
        }

        if(!lastName){
            errors.lastName= 'Required'
        }else if(lastName.length >= 10){
            errors.lastName='Must be 10 characters or less'
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }

        return errors

    }
//useFormik se tiene que inicializar como u objeto
    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        //onSubmit se ejecuta cuando el formulario cumpla con todos los requisitos
        onSubmit: (values) =>{
            console.log(values)
        },
        validate
    });
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
        <form noValidate
        onSubmit={handleSubmit}
        
        >
            <label htmlFor='firstName'>First Name</label>
            <input type='text'
            name='firstName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}>
            </input>

            {touched.firstName && errors.firstName &&
                <span>{errors.firstName}</span>}

            <label htmlFor='lastName'>Last Name</label>
            <input type='text'
            name='lastName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            >
            </input>

            { touched.lastName && errors.lastName &&
                <span>{errors.lastName}</span>}

            <label htmlFor='email'>Email Adress</label>
            <input type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            >
            </input>
            {touched.email && errors.email &&
                <span>{errors.email}</span>}
            

            <button
            type='submit'>
                Submit
            </button>

        </form>
    </div>
  )
}

export default FormikBasicPage