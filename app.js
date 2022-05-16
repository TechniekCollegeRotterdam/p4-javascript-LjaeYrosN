let name;//var name

let country;// var country

let p = document.getElementById("output");//var p = id output

const nameChanged = function(event) {
    name = event.target.value;
    changeInput()
}

const countryChange = function(event) {
    country = event.target.value;
    changeInput()
}
const changeInput = function(event) {
 const text = `Je heet ${name} en je komt uit ${country}`
 p.textContent =text
}

