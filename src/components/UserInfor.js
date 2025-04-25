import React from "react";
class UserInfor extends React.Component {
    state = {
        name: 'Quang',
        address: 'Nhà mèo',
        age: 24
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) =>{
        event.preventDefault();
        alert('me')
    }
    render (){
        return (
        
                            <div> My name is {this.state.name} and I'm {this.state.age} yearolds
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleOnChangeInput(event)} 
                    />

                <label>Your age:</label>
                    <input 
                    type="text"
                    value={this.state.age}
                    onChange={(event) => this.handleOnChangeAge(event)} 
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor