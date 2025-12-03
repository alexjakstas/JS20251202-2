"use strict";

let gyvenaAkvariume = +prompt("Įveskite kiek žuvų dabar gyvena akvariume: ");
let pridetaZuvu = +prompt("Įveskite kiek žuvų pridedama kiekvieną dieną: ");
let visoDienu = +prompt("Kiek dienų pridedama žuvų: ")

let isvisoZuvu = gyvenaAkvariume + (pridetaZuvu * visoDienu);

console.log("po " + visoDienu + " dienų akvariume gyvens " + isvisoZuvu + " žuvų");