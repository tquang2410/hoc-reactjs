import React from 'react';
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: "Ta Quang", age: "24"},
            {id: 2, name: "Ket", age: "8"},
            {id: 3, name: "Linga guli guli", age: "9999"}
        ]
    }
    handleAddNewUser = (userOjb) => {
       
        this.setState({
            listUsers: [userOjb,...this.state.listUsers]
        })
     
    }
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser = {this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor 
                    listUsers={this.state.listUsers}
                    
                />
            </div>
        );
    }
}
export default MyComponent