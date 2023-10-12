import { useSelector, useDispatch } from 'react-redux';
import {selectToken, selectUser, setUser} from '../../reducers/login';
import { useState } from 'react';
import Bar from '../../components/bar';

function User(){

    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const [modale, setModale] = useState(false);
    const [userName,setName] = useState();   
    const changeUsername = useDispatch();

    if (modale === true){

        const usernameSubmit = async (event) => {
            event.preventDefault();

            if (userName.length >= 4){
                let sendUserName = {userName};

                let response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token.payload}`
                    },
                    body: JSON.stringify(sendUserName)
                });

                let result = await response.json();

                changeUsername(setUser(result));

                alert('Your username has been modified');

                setModale(false)
            } else { 
                alert(('Your username is too short'));
        } 

        };

        const cancel = () => {
            setModale(false);
        }

        return (
            <div className='main bg-dark'>
                <div className='sign-in-content'>
                    <h1>Change your username</h1>
                    <p>min characters  : 4 <br/> max : 20</p>
                    <form>
                        <div className='input-wrapper'>
                            {/* <label htmlFor="username">new name</label> */}
                            <input
                                value={userName} 
                                onChange={(e) => setName(e.target.value)} 
                                type="text" id="username"
                                maxLength={20}
                            />
                        </div>
                        <button onClick={usernameSubmit} className="sign-in-button">Change</button>
                        <button onClick={cancel} className="sign-in-button">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <main className="main bg-dark">
        {token ? (
            <div>
                <div className="header">
                    <h1>Welcome back<br />{user.payload.body.userName}</h1>
                    <button onClick={() => {setModale(true)} } className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Bar
                title = 'Argent Bank Checking (x8349)'
                money = '$2,082.79'
                />
                <Bar 
                title = 'Argent Bank Savings (x6712)'
                money = '$10,928.42'
                />
                <Bar
                title = 'Argent Bank Credit Card (x8349)'
                money = '$184.30'
                />
            </div>
        ) : (null)}
        </main> 
    )
}; 

export default User;