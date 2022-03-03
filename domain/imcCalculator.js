export default class ImcCalculator {
    calculateImcBy(weight, height) {
        let imc = 0;
        let cm = 0;
        
        cm = height / 100;
        imc = weight / (cm * cm);

        return imc.toFixed(2);
    }
}
