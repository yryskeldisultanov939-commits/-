import React from 'react';
import '../css/Resept.css'; 
import { Link } from 'react-router-dom';


export default function Resept() {
    return (
        <div className="app">
            <div className="container" style={{ flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ color: '#2d2d2d', marginBottom: '30px' }}>Ваш персональный рецепт</h1>
                
                <div className="card" style={{ width: '100%', maxWidth: '800px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2 className="title" style={{ margin: 0 }}>🍳 Итальянская паста с томатами</h2>
                        <span className="badge" style={{ fontSize: '14px' }}>25 мин</span>
                    </div>

                    <div className="section">
                        <h3>Ингредиенты из вашего холодильника:</h3>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                            <span className="badge">🍅 Томаты</span>
                            <span className="badge">🧄 Чеснок</span>
                            <span className="badge">🍝 Паста</span>
                            <span className="badge">🧀 Сыр</span>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Инструкция по приготовлению:</h3>
                        <div className="recipe-step">
                            <div className="step-num">1</div>
                            <p>Поставьте воду для пасты кипятиться, добавив щепотку соли.</p>
                        </div>
                        <div className="recipe-step">
                            <div className="step-num">2</div>
                            <p>Нарежьте томаты и чеснок. Обжарьте их на сковороде с оливковым маслом 5-7 минут.</p>
                        </div>
                        <div className="recipe-step">
                            <div className="step-num">3</div>
                            <p>Смешайте готовую пасту с соусом и посыпьте тертым сыром перед подачей.</p>
                        </div>
                    </div>

                    <button className="btn" style={{ marginTop: '30px' }} onClick={() => window.history.back()}>
                        <Link to="/fridge">← Вернуться в холодильник</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}