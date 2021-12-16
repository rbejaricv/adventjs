const carta = 'bici coche balón _playstation bici coche peluche'

function not_crossed(gift) { return !(gift[0] == '_'); }

function listGifts(letter) {
    let object = {};
    letter = letter.trim().split(" ").filter(not_crossed);
    letter.forEach(gift => { object[gift] = (object.hasOwnProperty(gift)) ? object[gift] + 1 : 1; });
    return object;
}

function main() {
    console.log(listGifts(carta));
}

if (require.main === module) {
    main();
}