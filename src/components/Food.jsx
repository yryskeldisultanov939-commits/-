import { Link } from 'react-router-dom';
import '../css/Food.css';
import { IoPersonCircle } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { RiOpenaiLine } from "react-icons/ri";

export default function Food() {
    return (
        <header className="header">
            <div className="logo"><RiOpenaiLine className='AI'/>   Food AI</div>

            <nav className="nav">
                <Link to="/">Главная</Link>
                <Link to="/fridge">Мой холодильник</Link>
                <a href="#">Добавить</a>
                <Link to="/recipes">Рецепты</Link>
                <Link to="/chat">Чат</Link>
            </nav>

            <div className="user">
                <span className='kalakolchik'><GoBellFill /></span>
                <span className="avatar"><IoPersonCircle /></span>
            </div>
        </header>
    );
}
