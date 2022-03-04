export default class TableRowElement {

    elementObject;

    constructor (elementObject) {
        this.elementObject = elementObject;
    }

    getLineWithData() {
        const line = document.createElement('tr');
        line.classList.add('table-line');
        line.appendChild(this.elementObject.ageElement);
        line.appendChild(this.elementObject.genderElement);
        line.appendChild(this.elementObject.heightElement);
        line.appendChild(this.elementObject.weightElement);
        line.appendChild(this.elementObject.bmiElement);
        line.appendChild(this.elementObject.classificationElement);
        line.appendChild(this.elementObject.actionElement);
        return line;
    }

}