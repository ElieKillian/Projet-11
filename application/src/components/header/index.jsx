import React, { useEffect, useState } from 'react';
import Logo from './argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogs, setUser } from '../../reducers/login';
import {selectToken , selectIdUser} from '../../reducers/login';

function Header() {

    const dispatch = useDispatch();
    const select = useSelector(selectToken);
    console.log('select :', select);
    const userPage = useSelector(selectIdUser);
    console.log('userPage :', userPage);
    // const backHome = useNavigate();
    
    const Logout = () => { 
        dispatch(setLogs(null))
        dispatch(setUser(null))
        Header();
        // backHome('/')
    };


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
            { userPage === null || userPage === undefined ?(
                <div>
                    <Link to="sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to={`user/${userPage.payload.body.id}`} className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userPage.payload.body.firstName}
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
        