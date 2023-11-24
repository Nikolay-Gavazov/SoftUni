import { useEffect, useState } from "react";
const useForm = (initValue, service) => {
const [formValue, setFormValue] = useState(initValue);

    useEffect(() => {
        setFormValue(initValue);
    },[initValue])

    const onChange = (e) =>{
        setFormValue(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
    
        if(service){
            try {
                await service(formValue);
                setFormValue(initValue);
              } catch (error) {
                return error;
              }
        }
    }

    return{
        formValue,
        onChange,
        onSubmit
    }
};

export default useForm;