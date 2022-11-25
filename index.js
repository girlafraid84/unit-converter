/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")
let inputNum = document.getElementById("input")


const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204



let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
    let baseValue = inputNum.value
    lengthOutput.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue / meterToFeet} meters`
    volumeOutput.textContent = `${baseValue} liters = ${baseValue * literToGallon} gallons | ${baseValue} gallons = ${baseValue / literToGallon} liters`
    massOutput.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound} pounds | ${baseValue} pounds = ${baseValue / kiloToPound} kilometers`
    
})


