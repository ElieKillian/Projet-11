import React from 'react';
import Logo from './argentBankLogo.png';
import { Link } from 'react-router-dom';

function Header(user) {
    return (
        <nav class="main-nav">
            <Link to="/" class="main-nav-logo">
                <img
                    class="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {/* {if(user != (nul || undefined)) {
                    <a class="main-nav-item" href="./user.html">
                        <i class="fa fa-user-circle"></i>
                        {user}
                    </a>
                }} */}
                <Link to="sign-in" class="main-nav-item">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Header;
        