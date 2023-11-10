import { useEffect, useState } from "react";
import * as dataService from "../services/dataService";
import TableRow from "./TableRow";
import Spinner from "./Overlaps/Spinner";
import UserDetails from "./UserComponents/UserDetails";
import CreateUser from "./UserComponents/CreateUser";
import DeleteUser from "./UserComponents/DeleteUser";
import EditUser from "./UserComponents/EditUser";

const UserListTable = ({
    showCreate, 
    onCreateClick}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    useEffect(() => {
        dataService.getAll()
            .then(result => setUsers(result))
            .catch(err=> console.log(err))
            .finally(setIsloading(false));
    }, [])
    const infoClickHandler = async (userId) => {
        setUser(await dataService.getUser(userId));
        setShowInfo(true);
    }
    const setShowInfoHandler = () => {
        setShowInfo(false);
    }
    const deleteUserandler = async (userId) => {
        await dataService.deleteUser(userId);
        setUsers(state => state.filter(user => user._id !== userId));
        setShowDelete(false);
    }
    const onDeleteClickHandler = (status = true, _id) => {
        setDeleteId(_id);
        setShowDelete(status);
    }
    const addNewUser = (user) => {
        setUsers(state => [...state, user]);
    }
    const onEditClickHandler = async (_id) => {
        setUser(await dataService.getUser(_id));
        console.log(user);
        showEditModal(true);
    }
    const showEditModal = (status = true) =>{
        setShowEdit(status)
    }
    const setEditUser = (id, userEdit)=>{
        setUsers(state => state.map(user => user._id == id ? [...userEdit]:user))
    }
    return (
        <>
            {isLoading && <div className="loading-shade">
                <Spinner />
            </div>}
            {showInfo && <UserDetails
                setShowInfoHandler={setShowInfoHandler}
                key={user._id}
                _id={user._id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                phoneNumber={user.proneNumber}
                createdAt={user.createdAt}
                updatedAt={user.updatedAt}
                imageUrl={user.imageUrl}
                country={user.address?.country}
                city={user.address?.city}
                street={user.address?.street}
                streetNumber={user.address?.streetNumber}
            />}
            {showCreate && <CreateUser 
            onCreateClick={onCreateClick}
            addNewUser={addNewUser}
            />}
            {showDelete && <DeleteUser
            deleteUserandler={deleteUserandler}
            onDeleteClickHandler={onDeleteClickHandler}
            _id={deleteId}/>}
            {showEdit && <EditUser
            user= {user}
            showEditModal={showEditModal}
            setEditUser={setEditUser}/>}
            <div className="table-wrapper" >

                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>
                                First name
                                <svg
                                    className="icon"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Last name
                                <svg
                                    className="icon"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Email
                                <svg
                                    className="icon"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Phone
                                <svg
                                    className="icon"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg
                                    className="icon active-icon"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <TableRow
                                key={user._id}
                                _id={user._id}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                phoneNumber={user.phoneNumber}
                                createdAt={user.createdAt}
                                imageUrl={user.imageUrl}
                                infoClickHandler={infoClickHandler}
                                onDeleteClickHandler={onDeleteClickHandler}
                                onEditClickHandler={onEditClickHandler}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
};

export default UserListTable;