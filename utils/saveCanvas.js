export default function saveCanvas() {

        const canvas = canvasRef.current;

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.href = image;
        link.download = "drawing.png";

        link.click();
    }