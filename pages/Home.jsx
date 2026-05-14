import { useState } from "react";
import Canvas from "../components/Canvas/Canvas";
import PaletteBar from "../components/PaletteBar/PaletteBar";
import ToolBar from "../components/ToolBar/ToolBar";

import "../styles/Home.css";

export default function Home () {

    const [selectedColor, setSelectedColor] = useState("#000000");

    return (
        <main>
            <PaletteBar selectedColor = {selectedColor} setSelectedColor = {setSelectedColor}/>
            <div className="canvas-container">
                <Canvas selectedColor = {selectedColor}/>
            </div>
            <ToolBar />
        </main>
    );
}