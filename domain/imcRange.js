export default class ImcRange {
    imc;

    constructor(imc) {
        this.imc = imc;
    }

    getImcClassification() {
        if (this.imc >= 40) {
            return 'Obesity Grade III';
        }

        if (this.imc >= 35 && this.imc <= 39.9) {
            return 'Obesity Grade II';
        }

        if (this.imc >= 30 && this.imc <= 34.9) {
            return 'Obesity Grade I';
        }

        if (this.imc >= 25 && this.imc <= 29.9) {
            return 'Slightly Overweight';
        }

        if (this.imc >= 18.6 && this.imc <= 24.9) {
            return 'Ideal Weight';
        }

        if (this.imc <= 18.5) {
            return 'Under Weight';
        }

        return 'Unrecognized';
    }

}