function towersOfHanoiMoves(n, source = 'A', auxiliary = 'B', target = 'C') {
    if (n === 1) {
        // console.log(`Move disk 1 from rod ${source} to rod ${target}`);
        return 1;
    } else {
        const movesAtoB = towersOfHanoiMoves(n - 1, source, target, auxiliary);
        // console.log(`Move disk ${n} from rod ${source} to rod ${target}`);
        const movesBtoC = towersOfHanoiMoves(n - 1, auxiliary, source, target);
        return movesAtoB + 1 + movesBtoC;
    }
}

const numberOfDisks = 3;
const minimalMoves = towersOfHanoiMoves(numberOfDisks);
console.log(`Minimal number of moves for ${numberOfDisks} disks: ${minimalMoves}`);
