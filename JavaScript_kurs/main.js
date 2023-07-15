// IF Statements

/*let age = prompt("Trage dein Alter ein");

if(age >= 18) {
  // Wird ausgeführt wenn Bedinung wahr wird
  console.log("Eintritt gewährt")
  // alert("Eintritt gewährt")
} else {
  // Wird in jedem andren Fall ausgeführt
  console.log("Kein Eintritt")
  // alert("Kein Eintritt")
}*/

 

/*function main(){
  
  var input = document.getElementById("inputColor");
  var color = input.value;
  var lowerColorName = color.toLowerCase();

  if(lowerColorName == "grün"){
    alert("Du darfst fahren");
  } else if(lowerColorName == "orange"){
    alert("Du darfs anfahren oder musst bremsen");
  } else if(lowerColorName =="rot"){
        alert("Du musst anhalten");
  } else {
    alert("Keine gültige Ampel-Farbe eingetragen");
  }console.log("Funktion wurde aufgerufen")
  }*/

 // If Statements

/*var color = prompt("Trage eime Ampel-Farbe ein:");
var lowerColorName = color.toLowerCase();

// Wenn grün -> fahren
if(lowerColorName == "grün" ) {
  alert("Du darfst fahren");
} else if (lowerColorName == "orange") {
  alert("Du darfst anfahren oder du musst bremsen");
} else if (lowerColorName == "rot") {
  alert("Du musst bremsen");
} else { alert("Keine gültige Farbe eingetragen");
} */



// Wenn orange -> anfahren/bremsen

// Wenn rot -> anhalten

// Fehlermeldung zurückgeben bei falscher Farbe
 
// Kino Kasse

/* function main(){
  
  var input = document.getElementById("age");
  var age = input.value;
  
  // < & Jahre oder > 60 Jahre -> Sonderpreis 4 €
  
  if(age < 0 || age > 100){
    alert("Bitte trage ein gültiges Alter ein");
  } else if(age <= 6 || age >= 60) {
    alert("Preis beträgt 4 €");
  } else {
    alert("Preis beträgt 6,50 €");
  }}

  // Alle anderen -> 6 € */

  function main(){
    
    var inputMaxSpeed = document.getElementById("maxSpeed");
    var inputSpeed = document.getElementById("speed")
    var inputDir = document.getElementById("dir")
    
    var maxSpeed = parseInt(inputMaxSpeed.value);
    var speed = parseInt(inputSpeed.value);
    var isFacing = inputDir.checked;

    var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10)
    console.log(maxSpeedWithOffset);

    if(speed > maxSpeedWithOffset && isFacing == true){
      alert("Du wurdest geblitzt");
    }

  }