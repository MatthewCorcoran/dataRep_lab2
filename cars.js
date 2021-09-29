class Vehicle{

    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Infromation(){
        console.log(`make: ${this.make}, Model: ${this.model}, year: ${this.year}`);
    }
}

class Cars extends Vehicle{
   
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors = doors;
    }

    Infromation(){
        super.Infromation();
        console.log(`doors: ${this.doors}`);
    }
}

let myCar = new Cars('VW','Golf','2011','5');
myCar.Infromation();

