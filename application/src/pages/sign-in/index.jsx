import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setLogs, setUser } from '../../reducers/login';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const redirect = useNavigate();

    const Submit = async (event) => {
        event.preventDefault();

        let user = {
            email,
            password
        }

        let response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        });

        let result = await response.json();

        // console.log('resut :', result);

        if(result.body !== (null || undefined)){

            dispatch(setLogs(result.body.token));

            let responseUser = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'POST',
                headers: {'Authorization' : `Bearer ${result.body.token}`},
            });
    
            let resultUser = await responseUser.json();     

            // console.log('resultUser :',resultUser);

            dispatch(setUser(resultUser));

            redirect(`/user/${resultUser.body.id}`);

        } else {alert(result.message)};
    }

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="text" id="username"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" id="password" 
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button onClick={Submit} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}; 

export default Login;