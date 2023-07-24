export class Car{

  constructor(marke, baujahr, ps){
    this.marke = marke;
    this.baujahr = baujahr;
    this.ps = ps;
  }

  drive(speed){
    console.log("Fährt: " + this.marke + " " + speed);
  }

  honk(){
    console.log("Hupt: " +  JSON.stringify(this));
  }

}

export class Ship{

  constructor(marke, baujahr, ps){
    this.marke = marke;
    this.baujahr = baujahr;
    this.ps = ps;
  }

  drive(speed){
    console.log("Fährt: " + this.marke + " " + speed);
  }

  honk(){
    console.log("Hupt: " +  JSON.stringify(this));
  }

}
