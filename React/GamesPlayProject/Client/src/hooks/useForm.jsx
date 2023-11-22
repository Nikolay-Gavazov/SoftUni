import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useForm = (initValue, service, id = null, getById) => {
const navigate = useNavigate();
const [formValue, setFormValue] = useState(initValue);

    if(id){
        useEffect(() => {
        getById(id).then(result => setFormValue(result));  
        },[])
    }
    const onChange = (e) =>{
        setFormValue(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
    
        if(service){
            try {
                if(id){
                    await service(formValue, id);
                    console.log(formValue);
                    navigate(`/gameList/${id}`);
                    return;
                }
                await service(formValue);
                setFormValue(initValue);
                navigate('/gameList');
              } catch (error) {
                console.log(error);
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