function totalLandPerimeter(grid) {
    if (!grid || grid.length === 0) {
        return "Total land perimeter: 0";
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 'X') {
                if (row === 0 || grid[row - 1][col] === 'O') {
                    perimeter++;
                }
                if (row === rows - 1 || grid[row + 1][col] === 'O') {
                    perimeter++;
                }
                if (col === 0 || grid[row][col - 1] === 'O') {
                    perimeter++;
                }
                if (col === cols - 1 || grid[row][col + 1] === 'O') {
                    perimeter++;
                }
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}

const grid1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];
console.log(totalLandPerimeter(grid1));

const grid2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];
console.log(totalLandPerimeter(grid2));
