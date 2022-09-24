"use strict";
const car = {
    motor: "200XZT",
    color: "red",
    isAirBag: true,
};
const gmCar = {
    isAirBag: false
};
// gmCar.__proto__ = car;  eski versiya
Object.setPrototypeOf(gmCar, car); //yangi
const newCar = Object.create(car);//Boshqa yo'li

console.log(car);
console.log(gmCar);
console.log(gmCar.color);
//qisqacha qilib prototype yaratish || prototype ga yo'naltirilgan meros