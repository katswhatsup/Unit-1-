
const testName = document.getElementsByName("testName");
const testDate = document.getElementsByName("testDate");
const rocketType = document.getElementsByName("rocketType");
const windRating = document.getElementsByName("windRating");
const boosterCount = document.getElementsByName("boosterCount");
const productionServers = document.getElementsByName("productionServers");
let form = document.getElementById("runSimulation");
let errorMessage =document.getElementById("errorMessage")

form.addEventListener("submit", function (event){
    event.preventDefault();

    
    if (testName.value === "" || testDate.value === "" || rocketType.value === "" || windRating.value === ""|| boosterCount.value === "" || productionServers.value === "") {
        errorMessage.innterHTML = "Hey! All fields required!";
    }

});