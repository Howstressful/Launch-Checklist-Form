// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

const pilot = document.getElementById('pilotName');
const copilot = document.getElementById('copilotName');
const fuel = document.getElementById('fuelLevel');
const mass = document.getElementById('cargoMass');
const form = document.getElementById('form');
const error = document.getElementById('error');
const submit = document.getElementById('submit');

let pStatus = document.getElementById('pilotStatus');
let cStatus = document.getElementById('copilotStatus');
let fStatus = document.getElementById('fuelStatus')
let carStatus = document.getElementById('cargoStatus');
let launch = document.getElementById('launchStatus');
let faulty = document.getElementById('faultyItems');

let list = document.getElementById('list');




/*
form.addEventListener("submit", (e) => {
   
var message = "";

if(pilot.value == "" || pilot.value == null || isNaN(pilot.value) == false){
message += "Please enter a valid input for pilot name.\n";
pilot.style.borderColor = "red";
}

if(copilot.value == '' || copilot.value == null || isNaN(copilot.value) == false){
message += "Please enter a valid input for copilot name.\n";
copilot.style.borderColor = " red";
}

if(fuel.value == '' || fuel.value == null || isNaN(fuel.value) == true){
message += "Please enter a valid input for fuel level.\n";
fuelLevel.style.borderColor = "red";
}

if(mass.value == '' || mass.value == null || isNaN(mass.value) == true){
message += "Please enter a valid input for cargo mass.\n";
cargoMass.style.borderColor = "red";
}

if(messages != ""){
   e.preventDefault()
  error.innerText = alert(message);
   }

   })
*/


form.addEventListener('submit', (e) => {
   
  var message = "";
  e.preventDefault();

   if(pilot.value == "" || pilot.value == null || isNaN(pilot.value) == false){
   message += "Please enter a valid input for pilot name.\n";
   pilot.style.borderColor = "red";
   
   }
   
   if(copilot.value == '' || copilot.value == null || isNaN(copilot.value) == false){
   message += "Please enter a valid input for copilot name.\n";
   copilot.style.borderColor = " red";
   }
   
   if(fuel.value == '' || fuel.value == null || isNaN(fuel.value) == true){
   message += "Please enter a valid input for fuel level.\n";
   fuelLevel.style.borderColor = "red";
   }
   
   if(mass.value == '' || mass.value == null || isNaN(mass.value) == true){
   message += "Please enter a valid input for cargo mass.\n";
   cargoMass.style.borderColor = "red";
   
   }
   
if(message != ""){
   alert(message)
   return false;
}
      
     
      
   
      })









window.addEventListener("load", function(){
   form.addEventListener("submit",function(){  


  console.log(typeof mass.value)
      pStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
      cStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`
       
      console.log(pStatus.innerHTML.trim());
      console.log(cStatus.innerHTML.trim());
    

      if(fuel.value < "10000"){
      faulty.style.visibility = "visible";
     
      fStatus.innerHTML =  "Not enough fuel for launch"
      launch.innerHTML = "Shuttle not ready for launch"
      launch.style.color = "red";
      console.log(fStatus.innerHTML.trim());
      console.log(launch.innerHTML.trim());
      }
     
      if(mass.value > 5){
         faulty.style.visibility = "visible";
         
         carStatus.innerHTML =  "Too much cargo for launch"
         launch.innerHTML = "Shuttle not ready for launch"
         launch.style.color = "red";
         console.log(carStatus.innerHTML.trim());
         console.log(launch.innerHTML.trim());
         }
     if (fuel.value > "1000" && mass.value < 5){
     launch.innerHTML = "Shuttle is ready for launch";
     launch.style.color = "green";   
     console.log(launch.innerHTML.trim());
   }
      })
})


