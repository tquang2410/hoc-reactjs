import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfo';
export default class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name : "Ta Quang", age: "24"},
            {id: 2, name : "Ket", age: "8"},
            {id: 3, name : "Linga guli guli", age: "9999"}
        ]
    }
    // JSX
    render() {
        const myInfor = ['ab','c','d']
        return (
            //DRY: don't repeat yourself
                <div>
                <UserInfor/>
                <br /><br />
                <DisplayInfor 
                listUsers={this.state.listUsers}
                

                />
           
            </div>
           
        );
    }
}
