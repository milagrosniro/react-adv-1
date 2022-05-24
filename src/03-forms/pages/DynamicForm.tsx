import data from '../data/custom-form.json'
import {Form, Formik} from 'formik'
import { MyTextInput } from '../components'

 export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
        initialValues={
            {
                name: '',

            }
        }

        onSubmit={(values)=>{
            console.log(values)
        }}
        >
            {(formik)=>(
                <Form>

                    {
                        data.map(({type,name,label,placeholder}, index) =>{
                            return <MyTextInput key={index} type={(type as any)} name={name}
                            label={label} 
                            placeholder={placeholder} />
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