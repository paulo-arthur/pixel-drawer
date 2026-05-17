import { useRef, useState } from "react";
import Canvas from "../components/Canvas/Canvas";
import PaletteBar from "../components/PaletteBar/PaletteBar";
import ToolBar from "../components/ToolBar/ToolBar";

import "../styles/Home.css";

export default function Home () {

    const [selectedColor, setSelectedColor] = useState("#000000");
    const canvasRef = useRef(null);

    function saveCanvas() {
        const canvas = canvasRef.current;

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.href = image;
        link.download = "drawing.png";

        link.click();
    }

    return (
        <main>
            <PaletteBar selectedColor = {selectedColor} setSelectedColor = {setSelectedColor}/>
            <div className="canvas-container" >
                <Canvas selectedColor = {selectedColor} canvasRef = {canvasRef}/>
            </div>
            <ToolBar saveCanvas={saveCanvas}/>
        </main>
    );
}