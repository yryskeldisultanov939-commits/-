import '../css/Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <div className="home-page">
                <section className="hero">
                    <h1>
                        Питайтесь лучше - <br /> без стресса
                    </h1>

                    <p>
                        Используйте продукты, которые у вас есть дома
                    </p>

                    <Link to="/fridge" className="main-btn">Открыть холодильник →</Link>

                    <Link to="/add" className="subtext">Добавить продукты</Link>
                </section>
            </div>
        </>
    );
}
