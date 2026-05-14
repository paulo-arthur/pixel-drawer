import { useState } from "react";

import createGrid from "../../utils/createGrid";
import Pixel from "./Pixel";

import "./Canvas.css";

export default function Canvas({selectedColor}) {
    const ROWS = 25;
    const COLS = 25;
    const [grid, setGrid] = useState( createGrid(ROWS, COLS) ); 
    const [isDrawing, setIsDrawing] = useState(false);

    function updatePixel (row, col) {
        const newGrid = [...grid];
        newGrid[row] = [...grid[row]];
        newGrid[row][col] = selectedColor;
        setGrid(newGrid);
    }

    function handlePaint(row, col) {
        if (isDrawing) {
            updatePixel(row, col);
    }
}

    return (
        <div className="canvas" onMouseDown={ () => setIsDrawing(true) } onMouseUp={ () => setIsDrawing(false) }>
            {
                grid.map( (row, rowIndex) => (
                    row.map((pixelColor, pixelIndex) => (
                        <Pixel 
                            key = {`${rowIndex}-${pixelIndex}`}
                            color = { pixelColor }
                            onMouseEnter = { 
                                () => (handlePaint(rowIndex, pixelIndex))
                            }
                            ROWS = { ROWS }
                            COLS = { COLS }
                        />
                    ))
                ))
            }
        </div>
    );
}