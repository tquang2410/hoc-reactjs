import React,{useState} from 'react';
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             {id: 1, name: "Ta Quang", age: "24"},
//             {id: 2, name: "Ket", age: "8"},
//             {id: 3, name: "Linga guli guli", age: "9999"}
//         ]
//     }
//     handleAddNewUser = (userOjb) => {
       
//         this.setState({
//             listUsers: [userOjb,...this.state.listUsers]
//         })
     
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         return (
            // <div>
            //     <AddUserInfor
            //         handleAddNewUser = {this.handleAddNewUser}
            //     />
            //     <br /><br />
            //     <DisplayInfor 
            //         listUsers={this.state.listUsers}
            //         handleDeleteUser={this.handleDeleteUser}
            //     />
            // </div>
//         );
//     }
// }
const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            {id: 1, name: "Ta Quang", age: "24"},
            {id: 2, name: "Ket", age: "8"},
            {id: 3, name: "Linga guli guli", age: "9999"}
        ]
    );


        const handleAddNewUser = (userOjb) => {
            setListUsers([userOjb, ...listUsers])
     }
    const handleDeleteUser = (userId) => {

        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
        return (
            <div className='a'>
            <AddUserInfor
                handleAddNewUser = {handleAddNewUser}
            />
            <br /><br />
            <DisplayInfor 
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
        )
}
export default MyComponent