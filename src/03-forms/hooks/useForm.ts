import { useState } from "react"

// interface IRegisterData{
//     name: string,
//     email: string,
//     password1: string,
//     password2:string
// }

export const useForm = <T>(initiState: T) =>{

    const [formData, setFormData] = useState(initiState)
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData(prev =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const resetForm = () =>{
        setFormData({...initiState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return{
        //properties
        ...formData,
        formData,

        //methods
        onChange,
        resetForm,
        isValidEmail
    }
}