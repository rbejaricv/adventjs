const OVEJAS = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
];

export default function ovejaValida(oveja) {
    return oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a') && oveja.color == "rojo";
}

function contarOvejas(ovejas) {
    return ovejas.filter(ovejaValida);
}

function main() {
    console.log(contarOvejas(OVEJAS));
}

if (require.main === module) {
    main();
}