import ButtonRemove from './components/buttonRemove.js'
import getImcBy from './utils/imcCalculator.js';
import TableCellElementCreator from './utils/tableCellElementCreator.js';

const novoPaciente = document.querySelector('[button-calculate]');

    novoPaciente.addEventListener('click', (event) => {
        event.preventDefault();

        const formPersonData = document.querySelector('[form-person-data]');
        const person = getPersonDataBy(formPersonData);

        const tableCellElementCreator = new TableCellElementCreator();

        const ageElement = tableCellElementCreator.createTdElementTypeNumberWith(person.age);
        const genderElement = tableCellElementCreator.createTdElementTypeTextWith(person.gender);
        const heightElement = tableCellElementCreator.createTdElementTypeNumberWith(person.height);
        const weightElement = tableCellElementCreator.createTdElementTypeNumberWith(person.weight);
        const imcElement = tableCellElementCreator.createTdElementTypeNumberWith(person.imc);
        const classificationElement = tableCellElementCreator.createTdElementTypeTextWith(person.classification);
        const actionElement = tableCellElementCreator.createTdElementTypeActionBy(ButtonRemove());


        const newLine = document.createElement('tr');
        newLine.classList.add('table-line');

         newLine.appendChild(ageElement);
         newLine.appendChild(genderElement);
         newLine.appendChild(heightElement);
         newLine.appendChild(weightElement);
         newLine.appendChild(imcElement);
         newLine.appendChild(classificationElement);
         newLine.appendChild(actionElement);

        const tabela = document.querySelector('[table-body-result]');
        tabela.appendChild(newLine);
        

        formPersonData.reset();
    });

    function getPersonDataBy(form){
        let age = form.inputAge.value;
        let gender = form.inputGender.options[form.inputGender.selectedIndex].value;
        let height = form.inputHeight.value;
        let weight = form.inputWeight.value;
        let imc = getImcBy(weight, height);
        let classification = "none";
        
        return {
            age: age,
            gender: gender,
            height: height,
            weight: weight,
            imc: imc,
            classification: classification
        }
    }
    

