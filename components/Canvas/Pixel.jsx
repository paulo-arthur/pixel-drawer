import { memo } from "react";

function Pixel({
    color,
    onMouseDown,
    onMouseEnter,
    onClick
}) {

    return (
        <div
            className="pixel"

            style={{
                backgroundColor: color
            }}

            onMouseDown={onMouseDown}
            onClick = {onClick}
            onMouseEnter={onMouseEnter}
        />
    );
}

export default memo(Pixel);