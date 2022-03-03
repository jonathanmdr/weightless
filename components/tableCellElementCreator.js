export default class TableCellElementCreator {
    createTdElementTypeNumberWith(value) {
        const element = document.createElement('td');
        element.innerHTML = value;
        element.classList.add('number');
        return element;
    }
    
    createTdElementTypeTextWith(value) {
        const element = document.createElement('td');
        element.innerHTML = value;
        element.classList.add('text');
        return element;
    }
    
    createTdElementTypeActionBy(buttonElement) {
        const element = document.createElement('td');    
        element.classList.add('action');
        element.appendChild(buttonElement);
        return element;
    }
}
