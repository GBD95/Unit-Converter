// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound


let input = document.querySelector("#input-num");
let inputValue = input.value;
const convertBtn = document.querySelector("#convert-btn");

//Length
let meterToFeet = document.querySelector("#meterToFeet");
let feetToMeter = document.querySelector("#feetToMeter");
//Volume
let literToGallon = document.querySelector("#literToGallon");
let gallonToLiter = document.querySelector("#gallonToLiter");
//Mass
let kgToPound = document.querySelector("#kgToPound");
let poundToKg = document.querySelector("#poundToKg");


convertBtn.addEventListener('click', convert);

function convert(){
    //Length
    meterToFeet.textContent = `${input.value} meters = ${input.value * 3.281.toFixed(3)} feet`
    feetToMeter.textContent = `${input.value} feet = ${(input.value / 3.281).toFixed(3)} meters`
    //Volume
    literToGallon.textContent = `${input.value} liter = ${(input.value * 0.264).toFixed(3)} gallons`
    gallonToLiter.textContent = `${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liters`
    //Mass
    kgToPound.textContent = `${input.value} kg = ${(input.value * 2.204).toFixed(3)} pounds`
    poundToKg.textContent = `${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kg`

}

