import React from 'react'

class DisplayInfor extends React.Component {
    render ()
    {   //destructuring array/object
        const {age, name} = this.props
        return(
            <div>
                <div>My name's {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfor;