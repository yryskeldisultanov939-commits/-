import '../css/Fridge.css';
import { Link } from 'react-router-dom';


export default function Fridge() {
    return (
        <div className="app">
            <div className="container">

                {/* ЛЕВАЯ КОЛОНКА */}
                <div className="card fridge">
                    <h2 className="title">Холодильник</h2>

                    <div className="tabs">
                        <span className="tab active">Сегодня</span>
                        <span className="tab">Вчера</span>
                        <span className="tab">Завтра</span>
                        <span className="tab">Все</span>
                    </div>

                    {/* ОВОЩИ */}
                    <div className="section">
                        <h3>Овощи</h3>

                        <div className="item">
                            <div>
                                <div className="item-name">🍅 Томаты</div>
                                <div className="item-sub">Использовать сегодня</div>
                            </div>
                            <span className="badge">3 pcs</span>
                        </div>

                        <div className="item">
                            <div>
                                <div className="item-name">🥒 Огурцы</div>
                                <div className="item-sub">Использовать сегодня</div>
                            </div>
                            <span className="badge">1 упак.</span>
                        </div>
                    </div>

                    {/* БЕЛКИ */}
                    <div className="section">
                        <h3>Белки</h3>

                        <div className="item">
                            <div>
                                <div className="item-name">🍗 Курица</div>
                                <div className="item-sub">Использовать сегодня</div>
                            </div>
                            <span className="badge">3 шт.</span>
                        </div>
                    </div>

                    {/* МОЛОЧНЫЕ */}
                    <div className="section">
                        <h3>Молочные</h3>

                        <div className="item">
                            <div>
                                <div className="item-name">🥛 Молоко</div>
                                <div className="item-sub">200 мл</div>
                            </div>
                            <span className="badge">200 мл</span>
                        </div>
                    </div>

                    <button className="btn fridge-btn">
                        Сгенерировать рецепты →
                    </button>

                    <p className="note">
                        Нажмите кнопку, чтобы увидеть идеи
                    </p>
                </div>


                {/* ПРАВАЯ КОЛОНКА */}
                <div className="card cook">
                    <h2 className="title">Что приготовить сегодня</h2>

                    <div className="recipe">
                        <span>🍳 Омлет с овощами</span>
                        <span className="time">15 мин</span>
                    </div>

                    <div className="recipe">
                        <span>🍗 Куриное жаркое</span>
                        <span className="time">20 мин</span>
                    </div>

                    <div className="recipe">
                        <span>🥗 Глазунья с тостами</span>
                        <span className="time">10 мин</span>
                    </div>

                    <button className="btn">
                        Сгенерировать рецепты →
                    </button>

                    

                    <p className="hint">
                        Можно нажать и увидеть пошаговый план
                    </p>
                </div>


            </div>
        </div>
    );
}
