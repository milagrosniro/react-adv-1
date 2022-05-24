
import {Formik,Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>
        <Formik 
        initialValues={ {
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: '',

         }}
         onSubmit={(values)=>{
            console.log(values)
         }}
         validationSchema={
            Yup.object({
                firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                lastName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                email: Yup.string()
                            .email('Email incorrecto')
                            .required('Requerido'),
                terms: Yup.boolean()
                //oneOf permite solo los valores True
                        .oneOf([true], 'Debe aceptar las condiciones'),
                jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                            .required('Requerido')

               })
         }
        >
             {
            (formik) =>(
                <Form         
                >
                    <label htmlFor='firstName'>First Name</label>
                    {/* Field sirve para agregar lo componentes al formik, se tiene que enviar el name, para saber que parte del values tiene q controlar y el tipo */}
                    <Field name='firstName' type='text' />
        
                    <ErrorMessage name='firstName'
                    component={'span'}/>
        
                    <label htmlFor='lastName'>Last Name</label>
                    <Field name='lastName' type='text'/>
                    <ErrorMessage name='lastName'
                    component={'span'}/>
        
                   
        
                    <label htmlFor='email'>Email Adress</label>
                    <Field name='email' type='email' />
                    <ErrorMessage name='email' component={'span'} />

                    <label htmlFor='jobType'> Job Type</label>
                    <Field name='jobType' as='select' >
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr</option>
                    </Field>
                        
                    <ErrorMessage name='jobType' component='span' />

                    <label >
                    <Field name='terms' type='checkbox' />
                        Terms and conditions
                        </label>
                    <ErrorMessage name='terms' component='span' />
                    
        
                    <button
                    type='submit'>
                        Submit
                    </button>
        
                </Form>

            )
        }

        </Formik>
       
      
    </div>
  )
}

export default FormikComponents