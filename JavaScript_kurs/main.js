/*SECTION - IF Statement
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

 
/*SECTION - Funktion

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
/*SECTION -  IF Statement 2
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

/* SECTION - Kino funktion)
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

  /* function main(){
    
    var product ="Papier";

    switch(product){

      case "Mehl":
        console.log("Mehl kostet 1€");
        break;
      case "Milch":
        console.log("Milch kostet 1,50€");
        break;
        default:
          console.log("product nicht vorhanden");
    }
  }

    
    
    /*SECTION getElementById{
    
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

  }*/

    /*SECTION - Übung Sudenten

  // Übung Studenten

   var students = [
    
  ]

  function calcAverageNC(){

    var totalNC =0;

    for (let i = 0; i < students.length; i++) {
      
      var student = students[i];
      console.log(student)
      

      totalNC += student.NC;
    }

    var averageNC = totalNC / students.length;
    console.log("NC Durschnitt: " + averageNC);

  }
  
  function addStudent(){
    var name =document.getElementById('StudyName').value;
    var id =parseInt(document.getElementById('StudyID').value);
    var nc =parseFloat(document.getElementById('StudyNC').value);
    
    var student = {
      "Name": name,
      "Martikelnummer": id,
      "NC": nc
    };

    students.push(student);
    console.log(students);

  }*/

  /*SECTION - Klassen
  // Klassen

  /*funtion main(){

    var student = {
      "Name": name,
      "Martikelnummer": id,
      "NC": nc
    };

  }


  class Student {
    
    constructor(name, id, nc){
      this.name = name;
      this.id = id;
      this.nc = nc;
    }

  }

  var student = new Student("Satch", 1, 3.0);*/


 
 // Methoden

 /*import * as vehicles from "./car.js"

  var car = new vehicles.Car("VW", 1994,132);
  car.drive(100);

  var car2 = new vehicles.Ship("Frachter", 2010,180);
  car2.drive(210);
  car2.honk();
*/

/*var divEle = document.createElement("div")
divEle.innerText = "Hello World";
document.body.appendChild(divEle);

var link = document.createElement("a");
link.innerText = "Click hier";
link.href = "https://www.google.de";
document.body.appendChild(link);*/

/* var table = document.getElementById("table");
var row = table.insertRow(1);
row.insertCell(0).innerText = "Jannick";
row.insertCell(1).innerText = "Leismann";

var row = table.insertRow(2);
row.insertCell(0).innerText = "John";
row.insertCell(1).innerText = "Doe";

var btn = document.getElementById("test");
row.addEventListener("click", function(){
  var row = table.insertRow(3);
row.insertCell(0).innerText = "Satch";
row.insertCell(1).innerText = "Hanau";
});


function add(){
  table.classList.add("awesomeTable");
}

function remove(){
  table.classList.remove("awesomeTable");
}

function toggle(){
  table.classList.toggle("highlight");
}*/


//JSON
// JavaScript Object Notation

/* function main(){
  var newCar = new Car("VW", 8);
  var carAsJson = JSON.stringify(newCar);
}



class Car {
  constructor(brand, age){
    this.brand = brand;
    this.age = age;
  }

}*/

// Fetch

/*function main(){

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(Response => Response.json())
  .then(json => console.log(json));
}*/

// Try Catch

/* function main(){
  
  try{
    console.log(age)
  } catch(e){
    console.log("Error abgefangen"+ e)
  }
  
  console.log("Hello World")

} */

// Promises

/*function main(){

let promise = new Promise((resolve, reject) => {

  let n = 70;

  if(n < 100){
    resolve("Versprechen gehalten")
  } else {
    reject("Versrechen nicht gehalten")
  }
})

  promise.then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log("Error: " + e)
  })

}*/

// Timeout & Interval

/*function main(){

  console.log("Die Zeit läuft")

  setTimeout(() => {

    console.log("3 Sekunden abgelaufen");
  }, 3000);
  
}*/

// Callbacks

/*function main(){

  frisieren(finish)

}

function finish(price){

    console.log("final Price: " + price, "€");
  
}

function frisieren(callback){

  console.log("Hund fertig frisiert");
  callback(10);

}*/

// Array filter() & map()

// filter
/*function main(){

  let numbers = [1,5,3,29,83,52,10,8,4]

  let smallNumbers = numbers.filter(n =>{
    return n < 10
  });

  console.log(smallNumbers);
 
  // map
  let doubleNumber = numbers.map(n => n * 2);
  console.log(doubleNumber);
}*/

//jquery

/*$("document").ready(() => {
  console.log("ready")
});*/


// load

/*function main(){

  $('#paragraph').load("test.txt");

}*/

// jquery ajax

/*function main(){

  $.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
      $('#paragraph').text(JSON.stringify(res));

  });

}*/