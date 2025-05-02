
import React,{ useState } from 'react'
import './DisplayInfor.scss'


// class DisplayInfor extends React.Component {

//     render() {
//         console.log(">>> call me render")
//         const {listUsers} = this.props;
//         return(
//             <div className='display-infor-container'>
             
        
//                 {true && (
//                     <div>
//                         {listUsers.map((user,index) => {
//                             return (
//                                 <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>

//                             )
//                         })}
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const {listUsers} = props; //object
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // this.state = {
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {
          
            setShowHideListUser(!isShowHideListUser)
    }
        return(
            <div className='display-infor-container'>
             <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
             </div>
        
                {isShowHideListUser && (
                    <div>
                        {listUsers.map((user,index) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                )}
            </div>
        )
    }

export default DisplayInfor;