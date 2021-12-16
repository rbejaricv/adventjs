const carta = 'bici coche balón _playstation bici coche peluche'

function not_crossed(gift) { return !gift[0] == '_'; }

export default function listGifts(letter) {
    letter = letter.trim().split(" ").filter(not_crossed);
    return {}
}

function main() {
    console.log(listGifts(carta));
}

if (require.main === module) {
    main();
}