const ButtonRemove = ()=> {
    const button = document.createElement('button');       
    button.innerText = 'Remove'
    button.classList.add('button');
    button.classList.add('button-remove');
    button.addEventListener('click', removeData);
    return button;
}

const removeData = (event) => {
    const buttonSelected = event.target;
    const lineSelected = buttonSelected.parentElement.parentElement;
    lineSelected.remove();
    return buttonSelected;
}

export default ButtonRemove;