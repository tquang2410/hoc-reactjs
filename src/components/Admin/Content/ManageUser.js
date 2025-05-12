import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";
import './ManageUser.scss'
import {FcPlus} from 'react-icons/fc';
import React, {useEffect,useState} from 'react';
import {getAllUsers, getUserWithPaginate} from "../../../services/apiService";
import ModalUpdateUSer from "./ModalUpdateUser";
import ViewUser from "./ViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";


const ManageUser = (props) => {
    const LIMIT_USER = 6;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    // Component did mount
    useEffect( () => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);
    const fetchListUsers = async () => {
        let res =  await getAllUsers()
        if(res.EC === 0)
        {
            setListUsers(res.DT);
        }
    }
    const fetchListUsersWithPaginate = async (page) => {
        let res =  await getUserWithPaginate(page, LIMIT_USER)
        if(res.EC === 0)
        {
            console.log('res.dt = ', res.DT);
            setListUsers(res.DT.users);
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
   const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);

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
                    <button className="btn btn-primary"
                            onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus/> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUserPaginate
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        listUsers={listUsers}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    />
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
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>

        </div>
    )
}
export default ManageUser;