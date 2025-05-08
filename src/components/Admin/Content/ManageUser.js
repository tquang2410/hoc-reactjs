import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";
import './ManageUser.scss'
import {FcPlus} from 'react-icons/fc';
import React, {useEffect,useState} from 'react';
import {getAllUsers} from "../../../services/apiService";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    useEffect( () => {
        fetchListUsers();
    }, []);
    const fetchListUsers = async () => {
        let res =  await getAllUsers()
        if(res.EC === 0)
        {
            setListUsers(res.DT);
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}> <FcPlus/> Add new users</button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers}/>
                </div>
            </div>
                    <ModalCreateUser
                        show={showModalCreateUser}
                        setShow={setShowModalCreateUser}
                        fetchListUsers={fetchListUsers}

                    />
        </div>
    )
}
export default ManageUser;