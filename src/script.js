let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let resultMeat = document.getElementById("qtd-meat");
let resultBeer = document.getElementById("qtd-beer");
let resultSoda = document.getElementById("qtd-soda");

function calcMeat() {
    let qtdAdults = inputAdults.value;
    let qtdKids = inputKids.value;
    let durationTime = inputDuration.value;

    if(qtdAdults >= 1 && qtdKids >= 1 && durationTime > 0 && qtdAdults <=9999 && qtdKids <= 9999) {
        let totalQtdMeat = (meatPerPerson(durationTime) * qtdAdults) + ((meatPerPerson(durationTime) * qtdKids) / 2);
        resultMeat.innerText = `${(totalQtdMeat / 1000).toFixed(2)}kg`;
    } else {
        resultMeat.innerText = "Insira"
    }
}

function calcBeer() {
    let qtdAdults = inputAdults.value;
    let qtdKids = inputKids.value;
    let durationTime = inputDuration.value;

    if(qtdAdults >= 1 && qtdKids >= 1 && durationTime > 0 && qtdAdults <=9999 && qtdKids <= 9999) {
        let totalQtdBeer = (beerPerPerson(durationTime) * qtdAdults);
        resultBeer.innerText = `${(totalQtdBeer / 1000).toFixed(2)}l`;
    } else {
        resultBeer.innerText = "um valor"
    }
}

function calcSoda() {
    let qtdAdults = inputAdults.value;
    let qtdKids = inputKids.value;
    let durationTime = inputDuration.value;

    if(qtdAdults >= 1 && qtdKids >= 1 && durationTime > 0 && qtdAdults <=9999 && qtdKids <= 9999) {
        let totalQtdSoda = (sodaPerPerson(durationTime) * qtdAdults) + ((sodaPerPerson(durationTime) * qtdKids) / 2);
        resultSoda.innerText = `${(totalQtdSoda / 1000).toFixed(2)}l`;
    } else {
        resultSoda.innerText = "válido"
    }
}

let meatPerPerson = (durationTime) => {
    if(durationTime >= 6) {
        return 650;
    } else {
        return 400;
    }
}

let beerPerPerson = (durationTime) => {
    if(durationTime >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

let sodaPerPerson = (durationTime) => {
    if(durationTime >= 6) {
        return 1000;
    } else {
        return 700;
    }
}

let btnCalc = document.getElementById("calc-button");
btnCalc.addEventListener("click", calcMeat);
btnCalc.addEventListener("click", calcBeer);
btnCalc.addEventListener("click", calcSoda);