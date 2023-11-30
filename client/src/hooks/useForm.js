import { useState } from "react"

export default function useForm(initialValues,onSubmitHandler,operationError) {
    
    const [formValues,setFormValues] = useState(initialValues)
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({passwordMismatch: false, operationError:false});

    const changeHandler = (e) =>{
        setFormValues(state =>({...state,[e.target.name]: e.target.value}))
    }

    
    const onSubmit = (e) =>{
        e.preventDefault()
        
        setErrors({...errors,operationError:false})
        if(operationError){
            return setErrors({...errors,operationError:true})
        }

        setErrors({...errors,passwordMismatch:false})
        if(formValues.rePassword && formValues.password!==formValues.rePassword){
            return setErrors({...errors,passwordMismatch:true})
        }
        
        if(e.currentTarget.checkValidity() === false){
            return setValidated(true)
        }
        

        if(onSubmitHandler){
            onSubmitHandler(formValues)
        }
    }

    return{
        formValues,
        changeHandler,
        onSubmit,
        validated,
        errors
    }
}