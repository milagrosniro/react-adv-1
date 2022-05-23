
import {useFormik} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikYupPage = () => {

   
//useFormik se tiene que inicializar como u objeto
    const { handleSubmit,  errors, touched, getFieldProps} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        //onSubmit se ejecuta cuando el formulario cumpla con todos los requisitos
        onSubmit: (values) =>{
            console.log(values)
        },
        //esta propiedad arma un esquema de validacion, para eso se usa Yup que sirve para hacer validaciones faciles
       validationSchema: Yup.object({
        firstName: Yup.string()
                    .max(15, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
        lastName: Yup.string()
                    .max(15, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
        email: Yup.string()
                    .email('Email incorrecto')
                    .required('Requerido')
       }),
       
    });
  return (
    <div>
        <h1>Formik Yup</h1>
        <form noValidate
        onSubmit={handleSubmit}
        
        >
            <label htmlFor='firstName'>First Name</label>
            <input type='text'
            //getFieldsProps sirve para reemplazar el name, onchange y onblur, Formik ya los reconoce por si solo
            {...getFieldProps('firstName')}>
            </input>

            {touched.firstName && errors.firstName &&
                <span>{errors.firstName}</span>}

            <label htmlFor='lastName'>Last Name</label>
            <input type='text'
            {...getFieldProps('lastName')}
            >
            </input>

            { touched.lastName && errors.lastName &&
                <span>{errors.lastName}</span>}

            <label htmlFor='email'>Email Adress</label>
            <input type='email'
            {...getFieldProps('email')}
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

export default FormikYupPage