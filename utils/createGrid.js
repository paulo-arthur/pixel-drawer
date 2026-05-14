function createGrid(p_qtt_x, p_qtt_y) {
    return Array.from(
        {length: p_qtt_y},
        () => Array(p_qtt_x).fill("#FFFFFF")
    );    
}

export default createGrid;