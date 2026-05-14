import { memo } from "react";

function Pixel({
    color,
    onMouseDown,
    onMouseEnter
}) {

    return (
        <div
            className="pixel"

            style={{
                backgroundColor: color
            }}

            onMouseDown={onMouseDown}

            onMouseEnter={onMouseEnter}
        />
    );
}

export default memo(Pixel);