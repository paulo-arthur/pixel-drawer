import { useState, useRef, useEffect } from "react";
import "./Canvas.css";

export default function Canvas({selectedColor}) {
    const ROWS = 16;
    const COLS = 16;
    const [isDrawing, setIsDrawing] = useState(false);

    const canvasRef = useRef(null);
    useEffect(() => {

        const canvas = canvasRef.current;

        canvas.width = COLS * Math.floor( canvas.offsetWidth / COLS );
        canvas.height = ROWS * Math.floor( canvas.offsetHeight / ROWS );
    }, []);

    function handlePaint(row, col) {
        if (isDrawing) {
            updatePixel(row, col);
        }
    }

    function drawPixel(e, selectedColor, {ROWS, COLS}) {
        const canvas = e.target;
        const rect = canvas.getBoundingClientRect();

        var ctx = canvas.getContext("2d");

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        ctx.fillStyle = selectedColor;
        ctx.fillRect(
            canvas.width / COLS * Math.floor( (e.clientX - rect.left) * scaleX / (canvas.width / COLS) ), 
            canvas.height / ROWS * Math.floor( (e.clientY - rect.top)  * scaleY / (canvas.height / ROWS) ), 
            canvas.width / ROWS,
            canvas.height / COLS);
    }

    return (
        <canvas 
            className="canvas"
            onClick={ (e) => drawPixel (e, selectedColor, {ROWS, COLS}) }
            onMouseLeave={ () => setIsDrawing(false) } 
            onMouseDown={ () => setIsDrawing(true) }
            onMouseUp={ () => setIsDrawing(false) }
            onMouseMove={ (e) => {
                if (isDrawing) {
                    drawPixel(e, selectedColor, {ROWS, COLS});
                }
            } }
            ref={canvasRef}>
        </canvas>
    );
}