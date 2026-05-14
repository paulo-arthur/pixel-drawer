import "./ColorBtn.css";

export default function ColorBtn({ color, selected, setSelectedColor }) {
    return (
        <button 
            style = { { backgroundColor: color } }
            onClick={() => setSelectedColor(color) }
            className={`${selected ? "selected-button" : ""}`}
        ></button>
    );
}