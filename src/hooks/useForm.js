import { useState } from "react"

export default function useForm(initialValues,onSubmitHandler) {
    
    const [formValues,setFormValues] = useState(initialValues)

    const changeHandler = (e) =>{
        setFormValues(state =>({...state,[e.target.name]: e.target.value}))
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        if(onSubmitHandler){
            onSubmitHandler(formValues)
        }

    }

    return{
        formValues,
        changeHandler,
        onSubmit
    }
}