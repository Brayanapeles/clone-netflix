import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/640px-Netflix_logo.svg.png" alt="logo_netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="icone_de_usuario_netlix" />
                </a>
            </div>
        </header>
    );
}