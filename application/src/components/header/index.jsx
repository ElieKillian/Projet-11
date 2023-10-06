import React, {useEffect, useState} from 'react';
import Logo from './argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogs } from '../../reducers/login';


function Header() {

    const dispatch = useDispatch();
    const select = useSelector(state => state.token);
    const Logout = () => { dispatch(setLogs(null))};

    const [selectState, setSelectState] = useState();
     // Utilisation de useEffect pour surveiller les changements de state.token
     useEffect(() => {
        if (select === null || select === undefined) {
            setSelectState(false)
        } else {
            setSelectState(true)
        }
    }, [select]); // Cette dépendance indique que l'effet dépend de la valeur de select


    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            { selectState === false ? (
                <div>
                    <Link to="sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to='user' className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </Link>
                    <Link to='/' onClick={Logout} className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>                
            )}
        </nav>
    );
}

export default Header;
        