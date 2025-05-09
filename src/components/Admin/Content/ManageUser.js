import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";
import './ManageUser.scss'
import {FcPlus} from 'react-icons/fc';
import React, {useEffect,useState} from 'react';
import {getAllUsers} from "../../../services/apiService";
import ModalUpdateUSer from "./ModalUpdateUser";
import ViewUser from "./ViewUser";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

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
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
        console.log('user', user);
    }
    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    }
    const resetUpdateData = () => {
        setDataUpdate({});

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
                    <TableUser
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        listUsers={listUsers}/>
                </div>
            </div>
                    <ModalCreateUser
                        show={showModalCreateUser}
                        setShow={setShowModalCreateUser}
                        fetchListUsers={fetchListUsers}
                    />
                    <ModalUpdateUSer
                        show={showModalUpdateUser}
                        setShow={setShowModalUpdateUser}
                        dataUpdate={dataUpdate}
                        fetchListUsers={fetchListUsers}
                        resetUpdateData={resetUpdateData}
                    />
                    <ViewUser
                        show={showModalViewUser}
                        setShow={setShowModalViewUser}
                        dataUpdate={dataUpdate}
                        fetchListUsers={fetchListUsers}
                        resetUpdateData={resetUpdateData}
                    />
        </div>
    )
}
export default ManageUser;