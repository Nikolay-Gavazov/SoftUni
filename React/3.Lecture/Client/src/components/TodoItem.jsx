const TodoItem = ({text, isCompleted, _id, changeStatusHandler}) => {
    const onChangeStatus = () =>{
        changeStatusHandler(_id);
    }
    return (
        <tr className= {`todo ${isCompleted && "is-completed"} `}>
            <td>{text}</td>
            <td>{isCompleted ? "Completed" : "Not Completed"}</td>
            <td className="todo-action">
                <button onClick={onChangeStatus} className="btn todo-btn" >Change status</button>
            </td>
        </tr>
    )
};

export default TodoItem;
