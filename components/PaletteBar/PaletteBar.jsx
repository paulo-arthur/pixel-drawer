import ColorBtn from "../ColorBtn/ColorBtn";
import { COLORS } from "../../constants/colors";

import "./PaletteBar.css";

export default function PaletteBar({selectedColor, setSelectedColor}) {
    return (
        <div className="external-container">
            {COLORS.map((color_hue) => (
                <div>
                    {color_hue.map((color) => (
                        <ColorBtn key={ color_hue.indexOf(color) } color={ color } selected = {color === selectedColor} setSelectedColor = {setSelectedColor} />
                        
                    ))}
                </div>
            ))}
        </div>
    );
}