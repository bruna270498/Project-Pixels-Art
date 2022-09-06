function criaBotao() {
    const botao = document.createElement('button');
    botao.id = 'button-random-color';
    botao.innerText = 'Cores aleatórias';
    botao.addEventListener('click', atribuicaoCor);
    const pai = document.getElementById('color-palette');
    pai.appendChild(botao);
}

function gerarCor() {
    const num = '0123456789ABCDEF';
    let cor = '#';
    for(let gerar=0;gerar<4;gerar+=1) {
      cor += num[Math.floor(Math.random() * 16)];
    }
    if(cor !== '#FFFFFF') {
        return cor;
    };
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
    let cor2 = document.getElementById('purple');
    let cor3 = document.getElementById('blue');
    let cor4 = document.getElementById('green');
    let cores = [cor1, cor2, cor3, cor4];
    const local = localStorage.getItem('colorPalette');
    if(local){
        cores = JSON.parse(localStorage.getItem('colorPalette'));
    }
    cor1.style.backgroundColor = cores[0];
    cor2.style.backgroundColor = cores[1];
    cor3.style.backgroundColor = cores[2];
    cor4.style.backgroundColor = cores[3];
    
}

function addRemoveSelected (elemento) {
    let selecionado = document.querySelector('.selected');
    selecionado .classList.remove('selected');
    elemento.target.classList.add('selected');
}

function botaoClassSelected () {
    const listaDePaleta = document.querySelectorAll('.color');
    for( let cor of listaDePaleta){
        cor.addEventListener('click',addRemoveSelected );
    };
}

function pintarPixels () {
    let selected = document.querySelector('.selected');
    let pixels = document.getElementsByClassName('pixel');

    for(let pixel of pixels){
        pixel.addEventListener('click', function(evento){
            evento.target.style.backgroundColor= selected.style.backgroundColor;
            console.log(i)
        });
    }; 
}

function addCorWhite() {
    let pixels = document.querySelectorAll('.pixel');
    for ( let o of pixels){
        o.style.backgroundColor = '#FFFFFF';
    };  
}

function botaoLimpar() {
    const botao = document.getElementById('clear-board');
    botao.addEventListener('click', addCorWhite);
}

criaBotao();

window.onload = devolverCor();

botaoClassSelected();

pintarPixels();

botaoLimpar();

