import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../css/Food.css';
import { IoPersonCircle } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { RiOpenaiLine } from "react-icons/ri";
import '../css/ProfileMenu.css';
import { MdOutlinePerson } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";


export default function Food() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo"><RiOpenaiLine className='AI' /> Food AI</div>

            <nav className="nav">
                <Link to="/">Главная</Link>
                <Link to="/fridge">Мой холодильник</Link>
                <Link to="/add">Добавить</Link>
                <Link to="/recipes">Рецепты</Link>
                <Link to="/chat">Чат</Link>
            </nav>

            <div className="user-container"> 
                <div className="icon-user" onClick={() => setIsOpen(!isOpen)}>
                    <span className="avatar"><IoPersonCircle /></span>
                </div>

                {/* 3. Маленькое окно, которое появляется по условию */}
                {isOpen && (
                    <div className="profile-dropdown">
                        <div className="dropdown-header">Личный кабинет</div>
                        <ul className="dropdown-menu">
                            <li><Link to="/profile"><MdOutlinePerson className='profile-icon' />Профиль</Link></li>
                            <li><Link to="/settings"><MdSettings className='settings-icon' />Настройки</Link></li>
                            <li><Link to="/support"><BiSupport className='support-icon' />Поддержка</Link></li>
                            <li><Link to="/dark-theme"><MdDarkMode className='dark-theme'/>Темная тема</Link></li>
                            <hr />
                            <li className="logout">Выйти</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}