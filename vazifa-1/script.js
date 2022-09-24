let numberOfSeries = prompt("Nechta serial ko'rgingiz?");
let seriesDB = {
    count : numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    privat: false
};
let serie1 = prompt("Ohirgi korgan serial");
let serie1baho = prompt("necha baho");

let serie2 = prompt("Ohirgi korgan serial");
let serie2baho = prompt("necha baho");
seriesDB.series = {
    serieOne: {
        serie1,
        serie1baho
    },
    serieTwo: {
        serie2,
        serie2baho
    }
};

console.log(seriesDB.series);