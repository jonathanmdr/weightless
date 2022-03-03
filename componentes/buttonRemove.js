const styleButtonRemove = `
    border:none;
	border-radius:8px;
	font-size:16px;
	padding:7px 26px;
	text-align:center;
    text-decoration:none;
    display:inline-block;
    font-size:16px;
	color:#FFF;
    background-color:#f44336;
`;

const ButtonRemove = ()=>{
    const button = document.createElement('button');       
    button.innerText = 'Remove'
    button.setAttribute('style', styleButtonRemove);
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