function fixFiles(files) {
    let dictionary = {};

    for (let i = 0; i < files.length; i++) {
        const element = files[i];

        if (element in dictionary) {
            files[i] = files[i] + "(" + parseInt(dictionary[element]) + ")";
            dictionary[element] = dictionary[element] + 1;
        } else {
            dictionary[element] = 1;
        }
    }
    return files;
}

function main() {
    const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
    const files2 = ['file', 'file', 'file', 'game', 'game'];
    const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
    console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
    console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)'];
    console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
}

if (require.main === module) {
    main();
}