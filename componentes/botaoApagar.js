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

const BotaoApagar = ()=>{
    const botaoDeleta = document.createElement('button');       
    botaoDeleta.innerText = 'Apagar'
    botaoDeleta.setAttribute('style', styleButtonRemove);

    botaoDeleta.addEventListener('click', apagarRegistro);
    
    return botaoDeleta;
}

const apagarRegistro = (evento) => {
    const botaoClicado = evento.target

    const linhaInteira = botaoClicado.parentElement.parentElement;
                         //<button>       <td>          <tr>                         
    
    linhaInteira.remove();

    return botaoClicado;

}

export default BotaoApagar