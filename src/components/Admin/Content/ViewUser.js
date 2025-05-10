import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import _ from 'lodash';
const ViewUser = (props) => {
    const {show, setShow, dataUpdate} = props;

    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setImage('');
        setPreviewImage('');
        props.resetUpdateData();
    };


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        console.log('run useEffect');
        if(!_.isEmpty(dataUpdate)){
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage('');
            setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
        }
    }, [dataUpdate]);

    // Removed handleUploadImage
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    // Removed handleSubmitCreateUser

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>View user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label  className="form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   value={email}
                                   disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Password</label>
                            <input type="password"
                                   className="form-control"
                                   value={password}
                                   disabled
                            />
                        </div>

                        <div className="col-md-6">
                            <label  className="form-label">Username</label>
                            <input type="text"
                                   className="form-control"
                                   value={username}
                                   disabled
                            />
                        </div>
                        <div className="col-md-4">
                            <label  className="form-label">Role</label>
                            <select
                                className="form-select"
                                value={role}
                                disabled
                            >
                                <option value="USER">USERS</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-lable label-upload" htmlFor='labelUpload'>
                                <FaPlusCircle /> Upload File Image
                            </label>
                            <input
                                type="file"
                                id="labelUpload" hidden
                                disabled
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ViewUser;