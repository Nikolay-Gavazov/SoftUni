import TodoListTable from "./TodoListTable";

const TodoListContainer = () => {
  return (
    <section className="todo-list-container">
      <h1>Todo List</h1>
      <div className="add-btn-container">
        <button className="btn">+ Add new Todo</button>
      </div>
      <div className="table-wrapper">
        <TodoListTable />
      </div>
    </section>
  );
};

export default TodoListContainer;
