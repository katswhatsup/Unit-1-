window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json) {
           console.log(json);


            let indexNum = Math.floor(Math.random()*7);
            let planets=document.getElementById("planets");
            planets.innerHTML = `
                <ul>
                    <li>Name: ${json[indexNum].name}</li>
                    <li>Diameter: ${json[indexNum].diameter}</li>
                    <li>Star: ${json[indexNum].star}</li>
                    <li>Distance: ${json[indexNum].distance}</li>
                    <img style="width: 350px; height: 350px;" src="${json[indexNum].image}">
                    <li>Moons: ${json[indexNum].moons}</li>
                </ul>
                `;
        });
 });
});