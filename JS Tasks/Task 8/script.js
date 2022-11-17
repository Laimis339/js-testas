/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get calculationSum() {
        return this.sum();
    }
    sum() {
        return this.a + this.b;
    }
    get calculationSubtract() {
        return this.subtract();
    }
    subtract() {
        return this.a - this.b;
    }
    get calculationMulti() {
        return this.multi();
    }
    multi() {
        return this.a * this.b;
    }
    get calculationDivide() {
        return this.divide();
    }
    divide() {
        return this.a / this.b;
    }
}

const calculator = new Calculator(5, 10);
console.log(calculator.calculationSum);
console.log(calculator.calculationSubtract);
console.log(calculator.calculationMulti);
console.log(calculator.calculationDivide);
