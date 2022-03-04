export default class BmiCalculator {
    calculateBmiBy(weight, height) {
        let bmi = 0;
        let cm = 0;
        
        cm = height / 100;
        bmi = weight / (cm * cm);

        return bmi.toFixed(2);
    }
}
