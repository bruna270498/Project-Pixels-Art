function criaBotao() {
    const botao = document.createElement('button');
    botao.id = 'button-random-color';
    botao.innerText = 'Cores aleatórias';
    botao.addEventListener('click', atribuicaoCor);
    const pai = document.getElementById('color-palette');
    pai.appendChild(botao);
}
criaBotao();
function gerarCor() {
    const num = '0123456789ABCDEF';
    let cor = '#';
    for(let gerar=0;gerar<4;gerar+=1) {
      cor += num[Math.floor(Math.random() * 16)];
    }
    if(cor !== '#FFFFFF') {
        return cor;
    }
}
function atribuicaoCor() {
    const cor1 = document.getElementById('black').style.backgroundColor='black';
    const cor2 = document.getElementById('purple').style.backgroundColor=gerarCor();
    const cor3 = document.getElementById('blue').style.backgroundColor=gerarCor();
    const cor4 = document.getElementById('green').style.backgroundColor=gerarCor();
    localStorage.setItem('colorPalette', JSON.stringify([cor1,cor2,cor3,cor4]));

}
function devolverCor() {
    let cor1 = document.getElementById('black');
    let cor2 = document.getElementById('purple')
    let cor3 = document.getElementById('blue')
    let cor4 = document.getElementById('green')
    let cores = [cor1, cor2, cor3, cor4]
    cores = JSON.parse(localStorage.getItem('colorPalette'))
    cor1.style.backgroundColor = cores[0];
    cor2.style.backgroundColor = cores[1];
    cor3.style.backgroundColor = cores[2];
    cor4.style.backgroundColor = cores[3];
}
function n () {
    let a = document.querySelectorAll('.color');

    for (let e of a){
        const i = document.querySelector('.selected');
        e.addEventListener('click', function () {
        e.classList.toggle('selected');
       
       
         console.log(e)
    })
    }
 
}n ();
function addCorWhite() {
    let pixels = document.querySelectorAll('.pixel');
    for ( let o of pixels){
        o.style.backgroundColor = '#FFFFFF'
        // return o;
        console.log(o)
    };
    
}
function botaoLimpar() {
    const botao = document.getElementById('clear-board');
    botao.addEventListener('click', addCorWhite);
}botaoLimpar()
// window.onload = devolverCor()
