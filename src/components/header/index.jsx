import React from 'react';
import Logo from './argentBankLogo.png';
import { Link } from 'react-router-dom'

function Header() {
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
                <Link to="sign-in" class="main-nav-item" href="./sign-in.html">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Header;
        