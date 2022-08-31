
function criaBotao(){
    const botao = document.createElement('button');
    botao.id ='button-random-color';
    botao.innerText='Cores aleatórias';
    botao.addEventListener('click', botaoColor);
    pai.appendChild(botao)
}
criaBotao();

function botaoColor(){

}