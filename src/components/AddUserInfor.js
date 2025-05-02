import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//     state = {
//         name: 'Quang',
//         address: 'Nhà mèo',
//         age: 24
//     };
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) +1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <div>My name is {this.state.name} and I'm {this.state.age} yearolds</div>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input 
//                         type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangeInput(event)} 
//                     />
//                     <label>Your age:</label>
//                     <input 
//                         type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangeAge(event)} 
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    //     state = {
    //     name: 'Quang',
    //     address: 'Nhà mèo',
    //     age: 24
    // };
    const [name, setName] = useState('')
    const [address,setAddress] = useState('Nhà mèo')
    const [age, setAge] = useState('')
    const handleOnChangeInput = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)
    }
   const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) +1) + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
                 <div>My name is {name} and I'm {age} yearolds</div>
              <form onSubmit={(event) => handleOnSubmit(event)}>
                             <label>Your name:</label>
                             <input 
                                type="text"
                                value={name}
                                onChange={(event) =>handleOnChangeInput(event)} 
                            />
                            <label>Your age:</label>
                            <input 
                                type="text"
                                value={age}
                                onChange={(event) => handleOnChangeAge(event)} 
                            />
                            <button>Submit</button>
                        </form>
                    </div>
    )
}
export default AddUserInfor