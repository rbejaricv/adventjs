function daysToXmas(date) {
    const xmas = new Date('Dec 25, 2021');
    const day_in_ms = 86400000;

    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return (xmas.getTime() - date.getTime()) / day_in_ms;
}

function main() {
    const date1 = new Date('Dec 1, 2021')
    console.log(daysToXmas(date1)) // 24
    const date2 = new Date('Dec 24, 2021 00:00:01')
    console.log(daysToXmas(date2)) // 1
    const date3 = new Date('Dec 24, 2021 23:59:59')
    console.log(daysToXmas(date3)) // 1
    const date4 = new Date("December 20, 2021 03:24:00")
    console.log(daysToXmas(date4)) // 5
}

if (require.main === module) {
    main();
}