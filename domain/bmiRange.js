export default class BmiRange {
    bmi;

    constructor(bmi) {
        this.bmi = bmi;
    }

    getBmiClassification() {
        if (this.bmi >= 40) {
            return 'Obesity Grade III';
        }

        if (this.bmi >= 35 && this.bmi <= 39.9) {
            return 'Obesity Grade II';
        }

        if (this.bmi >= 30 && this.bmi <= 34.9) {
            return 'Obesity Grade I';
        }

        if (this.bmi >= 25 && this.bmi <= 29.9) {
            return 'Slightly Overweight';
        }

        if (this.bmi >= 18.6 && this.bmi <= 24.9) {
            return 'Ideal Weight';
        }

        if (this.bmi <= 18.5) {
            return 'Under Weight';
        }

        return 'Unrecognized';
    }

}