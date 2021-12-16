const true1 = "bici coche (balón) bici coche peluche";
const true2 = "(muñeca) consola bici";
const false1 = "bici coche (balón bici coche";
const false2 = "peluche (bici [coche) bici coche balón";
const false3 = "(peluche {) bici";
const false4 = "() bici";


const invalid_chars = ['[', ']', '{', '}'];

function isValid(letter) {
    let par = 0;

    if (letter.includes("()")) {
        return false;
    }

    for (let i = 0; i < invalid_chars.length; ++i) {
        if (letter.includes(invalid_chars[i])) {
            return false;
        }
    }

    for (let i = 0; i < letter.length; ++i) {
        if (letter[i] == '(') {
            ++par;
        } else if (letter[i] == ')') {
            --par;
        }
        if (par < 0) {
            return false;
        }
    }

    return (par == 0);
}

function main() {
    console.log(isValid(true1));
    console.log(isValid(true2));
    console.log(isValid(false1));
    console.log(isValid(false2));
    console.log(isValid(false3));
    console.log(isValid(false4));
}

if (require.main === module) {
    main();
}