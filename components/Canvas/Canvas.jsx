import { useState, useEffect } from "react";

import "./Canvas.css";

export default function Canvas({ selectedColor, canvasRef }) {

    const ROWS = 20;
    const COLS = 20;

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {

        const canvas = canvasRef.current;

        canvas.width =
            COLS * Math.floor(canvas.offsetWidth / COLS);

        canvas.height =
            ROWS * Math.floor(canvas.offsetHeight / ROWS);

    }, []);

    function drawPixel(e, selectedColor, { ROWS, COLS }) {

        const canvas = e.target;

        const rect = canvas.getBoundingClientRect();

        const ctx = canvas.getContext("2d");

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        ctx.fillStyle = selectedColor;

        ctx.fillRect(

            canvas.width / COLS *
            Math.floor(
                ((e.clientX - rect.left) * scaleX)
                / (canvas.width / COLS)
            ),

            canvas.height / ROWS *
            Math.floor(
                ((e.clientY - rect.top) * scaleY)
                / (canvas.height / ROWS)
            ),

            canvas.width / COLS,
            canvas.height / ROWS
        );
    }

    return (

        <canvas
            ref={canvasRef}

            className="canvas"

            onClick={(e) =>
                drawPixel(e, selectedColor, { ROWS, COLS })
            }

            onMouseLeave={() => setIsDrawing(false)}

            onMouseDown={() => setIsDrawing(true)}

            onMouseUp={() => setIsDrawing(false)}

            onMouseMove={(e) => {

                if (isDrawing) {

                    drawPixel(
                        e,
                        selectedColor,
                        { ROWS, COLS }
                    );
                }
            }}
        />
    );
}