import { useNavigate } from 'react-router-dom'; 
import '../css/Fridge.css';
import { Link } from 'react-router-dom';

export default function Fridge() {
    const navigate = useNavigate();
    return (
        <div className="app">
            <div className="container">
                {/* ХОЛОДИЛЬНИК */}
                <div className="card">
                    <h2 className="title">Холодильник</h2>

                    <div className="tabs">
                        <span className="tab active">Сегодня</span>
                        <span className="tab">Вчера</span>
                        <span className="tab">Завтра</span>
                        <span className="tab">Все</span>
                    </div>

                    <div className="section">
                        <h3>Овощи</h3>
                        <div className="item">
                            <div className="item-content">
                                <input type="checkbox" className="custom-checkbox" />
                                <div>
                                    <div className="item-name">🍅 Томаты</div>
                                    <div className="item-sub">Использовать сегодня</div>
                                </div>
                            </div>
                            <span className="badge">3 шт</span>
                        </div>

                        <div className="item">
                            <div className="item-content">
                                <input type="checkbox" className="custom-checkbox" />
                                <div>
                                    <div className="item-name">🥒 Огурцы</div>
                                    <div className="item-sub">Использовать сегодня</div>
                                </div>
                            </div>
                            <span className="badge">1 упак.</span>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Белки</h3>
                        <div className="item">
                            <div className="item-content">
                                <input type="checkbox" className="custom-checkbox" />
                                <div>
                                    <div className="item-name">🍗 Курица</div>
                                    <div className="item-sub">Использовать сегодня</div>
                                </div>
                            </div>
                            <span className="badge">3 шт.</span>
                        </div>
                    </div>

                    
                        <Link to="/resept" className="btn1">Сгенерировать рецепты →</Link>
                    
                    <p className="note">Нажмите кнопку, чтобы увидеть идеи</p>
                </div>

                <div className="card">
                    <h2 className="title">Что приготовить</h2>

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

                    <button className="btn2" onClick={() => navigate(0)}>
                        Сгенерировать новые →
                    </button>
                    <p className="hint">Нажмите на рецепт для пошагового плана</p>
                </div>
            </div>
        </div>
    );
}