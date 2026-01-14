import React from 'react';
import '../css/Profile.css'; 

const Profile = () => {
    const user = {
        name: "Султанов Ырыскелди ",
        email: "yrys@example.com",
        avatar: "https://via.placeholder.com/150",
        stats: {
            recipes: 12,
            fridgeItems: 24,
            saved: 5
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img src={user.avatar} alt="Avatar" className="profile-avatar" />
                    <div className="profile-info">
                        <h2>{user.name}</h2>
                        <p className="email">{user.email}</p>
                        <button className="edit-btn">Редактировать профиль</button>
                    </div>
                </div>

                <div className="profile-stats">
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.recipes}</span>
                        <span className="stat-label">Рецептов</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.fridgeItems}</span>
                        <span className="stat-label">В холодильнике</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{user.stats.saved}</span>
                        <span className="stat-label">Избранное</span>
                    </div>
                </div>

                <div className="profile-sections">
                    <h3>Ваша активность</h3>
                    <div className="activity-list">
                        <div className="activity-item">🍎 Добавлено "Яблоко" в холодильник</div>
                        <div className="activity-item">🍳 Приготовлен "Омлет с сыром"</div>
                        <div className="activity-item">⭐ Сохранен новый рецепт "Паста"</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;