var part_1 = "mai";
var part_2 = "lto";
var part_3 = String.fromCharCode(58);
console.log(part_3);
var part_4 = "laura";
var part_5 = Math.pow(2,6);
var part_6 = String.fromCharCode(part_5);
console.log(part_6);
var part_7 = "zeilbeck";
var part_8 = Math.floor(45.99);
var part_9 = String.fromCharCode(part_8);
console.log(part_9);
var part_10 = "metallbau";
var part_11 = String.fromCharCode(46);
console.log(part_11);
var part_12 ="de";

function handleMsg() {
    window.location.href = part_1 + part_2 + part_3 + part_4 + part_6 + part_7 + part_9 + part_10 + part_11 + part_12 + "?subject='Anfrage%20über%20Onlineportfolio'";
}