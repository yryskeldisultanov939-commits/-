import React, { useState } from 'react';
import '../css/Settings.css';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('Russian');

    return (
        <div className="settings-container">
            <div className="settings-card">
                <h1>Настройки</h1>

                <section className="settings-section">
                    <h3>Аккаунт</h3>
                    <div className="settings-item">
                        <span>Изменить пароль</span>
                        <button className="settings-link-btn">Изменить</button>
                    </div>
                    <div className="settings-item">
                        <span>Привязанная почта</span>
                        <span className="settings-value">ivan@example.com</span>
                    </div>
                </section>

                <section className="settings-section">
                    <h3>Внешний вид и уведомления</h3>
                    <div className="settings-item">
                        <span>Темная тема</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="settings-item">
                        <span>Уведомления о сроках продуктов</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() => setNotifications(!notifications)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </section>

                <section className="settings-section">
                    <h3>Приложение</h3>
                    <div className="settings-item">
                        <span>Язык интерфейса</span>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="settings-select"
                        >
                            <option value="Russian">Русский</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                </section>

                <button className="save-settings-btn">Сохранить изменения</button>
            </div>
        </div>
    );
};

export default Settings;