import { useState, useRef, useEffect } from "react";

import createGrid from "../../utils/createGrid";

import "./Canvas.css";

export default function Canvas({selectedColor}) {
    const ROWS = 25;
    const COLS = 25;
    const [grid, setGrid] = useState( createGrid(ROWS, COLS) ); 
    const [isDrawing, setIsDrawing] = useState(false);

    const canvasRef = useRef(null);
    useEffect(() => {

        const canvas = canvasRef.current;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

    }, []);

    function handlePaint(row, col) {
        if (isDrawing) {
            updatePixel(row, col);
        }
    }

    function drawPixel(e) {
        const canvas = e.target; 
        const rect = canvas.getBoundingClientRect();

        var ctx = canvas.getContext("2d");

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        ctx.fillRect((e.clientX - rect.left) * scaleX - 5, (e.clientY - rect.top) * scaleY - 5, 10, 10);
    }

    return (
        <canvas 
            className="canvas"
            onClick={ drawPixel }
            onMouseLeave={ () => setIsDrawing(false) } 
            onMouseDown={ () => setIsDrawing(true) } 
            onMouseUp={ () => setIsDrawing(false) }
            ref={canvasRef}>
        </canvas>
    );
}