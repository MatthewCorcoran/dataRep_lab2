class bmi {

    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}

let MyBmi = new bmi(2,90);
let calculateBMI = MyBmi.calculateBMI();
console.log(calculateBMI);