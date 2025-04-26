import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfo';
export default class MyComponent extends React.Component {

    // JSX
    render() {
        const myInfor = ['ab','c','d']
        return (
                <div>
                <UserInfor/>
                <br /><br />
                <DisplayInfor
                    name =" Ta Quang"
                    age = {26}
                    myInfor = {myInfor}
                />
                <hr/><hr/>
                <DisplayInfor
                    name =" Test Props"
                    age = "999"
                />
            </div>
           
        );
    }
}
