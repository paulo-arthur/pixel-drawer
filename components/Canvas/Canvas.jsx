import "./Canvas.css";

export default function Canvas({selectedColor}) {
    return (
        <div className="canvas" style={{backgroundColor: selectedColor}}>

        </div>
    );
}