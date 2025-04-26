import React from 'react'

class DisplayInfor extends React.Component {

    render ()
    {   //destructuring array/object
        const {listUsers} = this.props;
        console.log(listUsers)
        return(
            <div>
    
                {
                    listUsers.map((user) => {
                    
                        return (
                            <div key={user.id}>
                                <div>My name's {user.name} </div>
                                <div>My age is {user.age}</div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default DisplayInfor;