export default class TableCellElementCreator {

    createTdElementTypeNumberWith(value) {
        const element = this.#createElementBy('td', 'number');
        element.innerHTML = value;
        return element;
    }

    createTdElementTypeTextWith(value) {
        const element = this.#createElementBy('td', 'text');
        element.innerHTML = value;
        return element;
    }

    createTdElementTypeActionBy(buttonElement) {
        const element = this.#createElementBy('td', 'action');
        element.appendChild(buttonElement);
        return element;
    }

    #createElementBy(elementType, styleType) {
        const element = document.createElement(elementType);
        element.classList.add(styleType);
        return element;
    }

}
