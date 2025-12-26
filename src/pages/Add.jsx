import "../css/Add.css";

export default function Add() {
    const openFile = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <div className="add-page">
            <div className="plus-card" onClick={openFile}>
                <div className="plus">+</div>
                <div className="text">Добавить  чек </div>
            </div>

            <input
                id="fileInput"
                type="file"
                webkitdirectory="true"
                directory=""
                hidden
            />
        </div>
    );
}
