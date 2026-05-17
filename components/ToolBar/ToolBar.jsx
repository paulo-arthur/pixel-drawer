import "./ToolBar.css"

function saveCanvas() {

};

export default function ToolBar({saveCanvas}) {
    return (
        <div className="tool-container">
            <button onClick={saveCanvas}></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    );
}