import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const useForm = (initValue, gameService, id = null, getById) => {
const navigate = useNavigate();
const [formValue, setFormValue] = useState({});

    if(id){
        useEffect(() => {
        getById(id).then(result => setFormValue(result));  
        },[])
    }
    const onChangeHandler = (e) =>{
        setFormValue(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onGameSubmitHandler = async (e) =>{
        e.preventDefault();
    
        if(gameService){
            try {
                if(id){
                    await gameService(formValue, id);
                    console.log(formValue);
                    navigate(`/gameList/${id}`);
                    return;
                }
                await gameService(formValue);
                setFormValue(initValue);
                navigate('/gameList');
              } catch (error) {
                console.log(error);
              }
        }
    }

    return{
        formValue,
        onChangeHandler,
        onGameSubmitHandler
    }
};

export default useForm;