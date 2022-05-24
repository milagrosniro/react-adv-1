import data from '../data/custom-form.json'
import {Form, Formik} from 'formik'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup'

const initialValues : {[key: string]: any} = {};

const requiredFields: {[key: string]: any} = {};

for (const input of data) {
    initialValues[input.name] = input.value  
    if(!input.validations) continue;

    let schema = Yup.string()
    
    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }
        if(rule.type === 'minLength'){
            schema = schema.min((rule as any).value || 2, `Debe tener al menos ${(rule as any).value  || 2}  caracteres`)
        }
        if(rule.type === 'email'){
            schema = schema.email('Ingrese email correcto')
        }
    }

    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

 export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
            console.log(values)
        }}
        >
            {(formik)=>(
                <Form noValidate>

                    {
                        data.map(({type,name,label,placeholder, options}) =>{
                            if(type === 'input' || type === 'password' || type === 'email'){

                                return <MyTextInput key={name} type={(type as any)} name={name}
                                label={label} 
                                placeholder={placeholder} />
                            }else if( type === 'select'){
                               return <MySelect label={label} name={name} key={name}>
                                        <option value=''> Select an option</option>
                                        {options?.map(option =>{
                                            return <option key={option.id} value={option.id}>{option.label} </option>
                                        })}
                                     </MySelect>
                            }else if(type === 'checkbox'){

                            }
                            
                            else{
                                throw new Error(`El type: ${type} no es soportado`)
                            }
                        })
                    }
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default DynamicForm