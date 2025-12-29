import React, { useState } from 'react';
import "../css/Add.css";

export default function Add() {
    const [images, setImages] = useState([]);

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
        <div className="add-page">
            <div className="container-wrapper">
                <div 
                    className={`plus-card ${images.length >= 10 ? "disabled" : ""}`} 
                    onClick={openFile}
                >
                    <div className="plus">+</div>
                    <div className="text">
                        {images.length >= 10 ? "Лимит достигнут" : "Добавить чек"}
                    </div>
                    <div className="counter">{images.length} / 10</div>
                </div>

                <div className="receipts-list">
                    {images.map((imgUrl, index) => (
                        <div key={index} className="receipt-preview-card">
                            <img src={imgUrl} alt={`Чек ${index + 1}`} className="receipt-img" />
                            <button className="remove-btn" onClick={() => removeImage(index)}>×</button>
                        </div>
                    ))}
                </div>
            </div>

            <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                hidden
            />
        </div>
    );
}