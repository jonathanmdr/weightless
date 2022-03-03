import ButtonRemove from './components/buttonRemove.js'
import ImcCalculator from './domain/imcCalculator.js';
import TableCellElementCreator from './components/tableCellElementCreator.js';
import TableRowElement from './components/tableRowElement.js';
import ImcRange from './domain/imcRange.js';

const buttonCalculate = document.querySelector('[button-calculate]');

buttonCalculate.addEventListener('click', (event) => {
    event.preventDefault();

    const formPersonData = document.querySelector('[form-person-data]');
    const person = getPersonDataBy(formPersonData);

    if (isNotValid(person)) {
        $(function() {
            $('#dialog').dialog();
        });
        return;
    }

    const tableLineData = createLineElementBy(person);
    const tableRowElement = new TableRowElement(tableLineData);
    const tableLine = tableRowElement.getLineWithData();

    addLineToTable(tableLine);

    formPersonData.reset();
});

function getPersonDataBy(form){
    let age = form.inputAge.value;
    let gender = form.inputGender.options[form.inputGender.selectedIndex].value;
    let height = form.inputHeight.value;
    let weight = form.inputWeight.value;

    const imcCalculator = new ImcCalculator();
    let imc = imcCalculator.calculateImcBy(weight, height);

    const imgRance = new ImcRange(imc);
    let classification = imgRance.getImcClassification();

    return {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        imc: imc,
        classification: classification
    }
}

function createLineElementBy(person) {
    const tableCellElementCreator = new TableCellElementCreator();

    return {
        ageElement: tableCellElementCreator.createTdElementTypeNumberWith(person.age),
        genderElement: tableCellElementCreator.createTdElementTypeTextWith(person.gender),
        heightElement: tableCellElementCreator.createTdElementTypeNumberWith(person.height),
        weightElement: tableCellElementCreator.createTdElementTypeNumberWith(person.weight),
        imcElement: tableCellElementCreator.createTdElementTypeNumberWith(person.imc),
        classificationElement: tableCellElementCreator.createTdElementTypeTextWith(person.classification),
        actionElement: tableCellElementCreator.createTdElementTypeActionBy(ButtonRemove())
    }
}

function addLineToTable(line) {
    const table = document.querySelector('[table-body-result]');
    table.appendChild(line);
}

function isNotValid(person) {
    if (person.age && person.gender && person.height && person.weight) {
        return false;
    }

    return true;
}
