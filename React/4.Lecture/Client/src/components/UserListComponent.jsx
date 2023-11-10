import { useState } from "react";
import PaginationComponent from "./PaginationComponent";
import Search from "./Search";
import UserListTable from "./UserListTable";

const UserListComponent = () => {
    const [showCreate, setShowCreate] = useState(false);
    const onCreateClick = (changeStatus = true) =>{
      setShowCreate(changeStatus);
    }
    return(
        <section className="card users-container">
        <Search/>
        {<UserListTable 
        showCreate={showCreate}
        onCreateClick={onCreateClick}/>}
        {/* New user button  */}
        <button onClick={onCreateClick} className="btn-add btn">Add new user</button>
        <PaginationComponent />
      </section>
    )
};

export default UserListComponent;