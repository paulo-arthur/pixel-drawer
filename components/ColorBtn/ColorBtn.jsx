import "./ColorBtn.css";

export default function ColorBtn({ style, selectedColor, setSelectedColor }) {
    return (
        <button style = { style } onClick={() => setSelectedColor(style.backgroundColor)}></button>
    );
}