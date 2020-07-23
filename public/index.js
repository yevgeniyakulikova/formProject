// axios.get('/listnations').then(.......

let cycleDaysControl = false;
let trekkingTurnControl = false;


let equipmentCycle = ["bicicletta", "caschetto", "boraccia"];
let equipmentTrekking = ["scarponi", "bastoni da trekking", "boraccia"];
let equipmentClimb = ["imbragatura", "scarpette da arrampicata", "boraccia"];

function selectionDateByTravel() {
    if (document.getElementById("typeTravel").value == "trekking") {
        document.getElementById("trekkingTurn").classList.remove("d-none");
        trekkingTurnControl = true;
        if (cycleDaysControl == true) {
            console.log("miau");
            document.getElementById("walkDays").classList.add("d-none");
        }
    } else if (document.getElementById("typeTravel").value == "cycling") {
        document.getElementById("walkDays").classList.remove("d-none");
        cycleDaysControl = true;
        if (trekkingTurnControl == true) {
            console.log("piu");
            document.getElementById("trekkingTurn").classList.add("d-none");
            trekkingTurnControl = false;
        }
    } else {
        document.getElementById("walkDays").classList.add("d-none");
        document.getElementById("trekkingTurn").classList.add("d-none");
        cycleDaysControl = false;
        trekkingTurnControl = false;
    }
}


function printCheckbox(equipment){
    let element = document.getElementsByClassName("equipment");
    for ( let r=0; r < element.length; r++){
        equipment.forEach(arr => {
            element[r].innerHTML += `<form action="/home" method="post"><div><input type="checkbox" name="equipment" value="${arr}"><label for="${arr}">${arr}</label></div></form>`
        });
    }
}

function equipmentOptions() {
    if (cycleDaysControl == true) {
        printCheckbox(equipmentCycle)
    } else if (trekkingTurnControl == true){
        printCheckbox(equipmentTrekking)
    } else {
        printCheckbox(equipmentClimb)
    }
}

function personsClimbLimit() {
    if (document.getElementById("typeTravel").value == "climbing")
        document.getElementById("persons").max = 8;
}

function fillClientsCompilations() {
    for (i = 0; i < document.getElementById("persons").value; i++) {
        document.getElementById("secondForm").innerHTML +=
            '</br><div><label for ="client">Nome Cognome:</label><input type="text" id="client" name="fullname"/></div>' +
            '<div class="data"><label for="dateTravel">Data di Nascita:</label><input type="date" id="dateTravel" name="birthday" /></br></div>' +
            '<div class="nt"><label for="nation">Nazionalità:</label><input list="list-nation" name="nation"><datalist id="list-nation" class="nation"></datalist</input></div>'+
            '<fieldset><legend >Di quale attrezzatura sei già munito?</legend><div name="equipment" class="equipment"></div></fieldset>';
    }
}

function getCountryOptions() {
    axios.get("/listnations").then((response) => {
        let nations = response.data;
        let data = document.getElementsByClassName("nation");
        for (let i = 0; i < data.length; i++) {
            data[i].innerHTML += '<option value="">------</option>';
            for (let r = 0; r < nations.length; r++) {
                data[i].innerHTML += `<option value="${nations[r].country}">${nations[r].country}</option>`;
            }
        }
    });
}

//

document.getElementById("typeTravel").addEventListener("change", () => {
    selectionDateByTravel();
    personsClimbLimit();
});

document.getElementById("nextStep").addEventListener("click", () => {
    document.getElementById("firstForm").classList.toggle("d-none");
    document.getElementById("secondForm").classList.toggle("d-none");
    document.getElementById("lastStep").classList.toggle("d-none");
    fillClientsCompilations();
    getCountryOptions();
    equipmentOptions()
});

console.log("patata");
