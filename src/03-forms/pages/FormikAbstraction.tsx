
import {Formik,Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../components/MyTextInput'
import '../styles/styles.css'
import MySelect from '../components/MySelect';
import MyCheckbox from '../components/MyCheckbox';

const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>
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
                    <MyTextInput label='First Name' name='firstName' placeholder='First Name'/>

                    <MyTextInput label='Last Name' name='lastName' placeholder='Last Name'/>

                    <MyTextInput label='Email' name='email' placeholder='Email' type='email'/>
        
                    <MySelect name='jobType' label='Job Type' >
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr</option>
                    </MySelect>

                    <MyCheckbox name='terms' label='Terms and conditions'/>
       
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

export default FormikAbstraction