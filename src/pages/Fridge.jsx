import { useNavigate } from 'react-router-dom';
import '../css/Fridge.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Fridge() {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    const [activeTab, setActiveTab] = useState('Сегодня');

    const productsData = {
        'Сегодня': [
            { category: 'Овощи', items: [{ name: '🍅 Томаты', sub: 'Использовать сегодня', count: '3 шт' }, { name: '🥒 Огурцы', sub: 'Использовать сегодня', count: '1 упак.' }] },
            { category: 'Белки', items: [{ name: '🍗 Курица', sub: 'Использовать сегодня', count: '3 шт.' }] }
        ],
        'Вчера': [
            { category: 'Молочные продукты', items: [{ name: '🥛 Молоко', sub: 'Куплено вчера', count: '1 л' }] },
            { category: 'Фрукты', items: [{ name: '🍎 Яблоки', sub: 'Свежие', count: '5 шт' }] }
        ],
        'Все': [
            { category: 'Весь список', items: [{ name: '📦 Все продукты', sub: 'Общий список', count: '-' }] }
        ]
    };

    const openFile = () => {
        if (images.length < 10) {
            document.getElementById("fileInput").click();
        } else {
            alert("Можно добавить не более 10 чеков");
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && images.length < 10) {
            const imageUrl = URL.createObjectURL(file);
            setImages([...images, imageUrl]);
        }
        event.target.value = null;
    };

    const removeImage = (indexToRemove) => {
        setImages(images.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="fridge-page">
            <div className="container-wrapper">
                {images.length > 0 && (
                    <div className="receipts-list">
                        {images.map((imgUrl, index) => (
                            <div key={index} className="receipt-preview-card">
                                <img src={imgUrl} alt={`Чек ${index + 1}`} className="receipt-img" />
                                <button className="remove-btn" onClick={() => removeImage(index)}>×</button>
                            </div>
                        ))}
                    </div>
                )}

                <div className={`plus-card ${images.length >= 10 ? "disabled" : ""}`} onClick={openFile}>
                    <div className="plus">+</div>
                    <div className="text">{images.length >= 10 ? "Лимит достигнут" : "Добавить чек"}</div>
                    <div className="counter">{images.length} </div>
                </div>
            </div>

            <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} hidden />

            <div className="app">
                <div className="container">
                    <div className="card">
                        <h2 className="title">Холодильник</h2>

                        <div className="tabs">
                            {['Сегодня', 'Вчера',  'Все'].map((tab) => (
                                <span
                                    key={tab}
                                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </span>
                            ))}
                        </div>

                        {productsData[activeTab].map((section, idx) => (
                            <div className="section" key={idx}>
                                <h3>{section.category}</h3>
                                {section.items.map((item, itemIdx) => (
                                    <div className="item" key={itemIdx}>
                                        <div className="item-content">
                                            <input type="checkbox" className="custom-checkbox" />
                                            <div>
                                                <div className="item-name">{item.name}</div>
                                                <div className="item-sub">{item.sub}</div>
                                            </div>
                                        </div>
                                        <span className="badge">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        ))}

                        <Link to="/resept" className="btn1">Сгенерировать рецепты →</Link>
                        <p className="note">Нажмите кнопку, чтобы увидеть идеи</p>
                    </div>

                    <div className="card">
                        <h2 className="title">Что приготовить</h2>
                        <div className="recipe"><span>🍳 Омлет с овощами</span><span className="time">15 мин</span></div>
                        <div className="recipe"><span>🍗 Куриное жаркое</span><span className="time">20 мин</span></div>
                        <div className="recipe"><span>🥗 Глазунья с тостами</span><span className="time">10 мин</span></div>
                        <button className="btn2" onClick={() => navigate(0)}>Сгенерировать новые →</button>
                        <p className="hint">Нажмите на рецепт для пошагового плана</p>
                    </div>
                </div>
            </div>
        </div>
    );
}