function criaBotao() {
    const botao = document.createElement('button');
    botao.id = 'button-random-color';
    botao.innerText = 'Cores aleatórias';
    botao.addEventListener('click', atribuicaoCor);
    const pai = document.getElementById('botao');
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
     let cor1 = document.getElementsByClassName('black')[0].style.backgroundColor='0,0,0';
     let cor2 = document.getElementsByClassName('purple')[0].style.backgroundColor=gerarCor();
     let cor3 = document.getElementsByClassName('blue')[0].style.backgroundColor=gerarCor();
     let cor4 = document.getElementsByClassName('green')[0].style.backgroundColor=gerarCor();
     

    localStorage.setItem('colorPalette', JSON.stringify([cor1,cor2,cor3,cor4]));

}

function devolverCor() {
    let cor1 = document.getElementsByClassName('black')[0];
    let cor2 = document.getElementsByClassName('purple')[0];
    let cor3 = document.getElementsByClassName('blue')[0];
    let cor4 = document.getElementsByClassName('green')[0];
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

function addRemoveSelected(elemento) {
    let selecionado = document.querySelector('.selected');
    selecionado.classList.remove('selected');
    elemento.target.classList.add('selected')
    

}

function botaoClassSelected() {
    const listaDePaleta = document.querySelectorAll('.color');
    for( let cor of listaDePaleta){
        cor.addEventListener('click',addRemoveSelected)
    };
}

function pintarPixels() {
    let pixels = document.getElementsByClassName('pixel');
    
    for(let pixel of pixels){
        pixel.addEventListener('click', function(evento) {
            let selected = document.getElementsByClassName('selected');
            evento.target.style.backgroundColor= selected[0].style.backgroundColor;
            
            let u = document.getElementsByClassName('pixel')
            let y =[];
            for(let w = 0; w< u.length; w+=1){
                y.push(u[w].style.backgroundColor)
                localStorage.setItem('pixelBoard', JSON.stringify(y))
            }
        });
    };
};

function addCorWhite() {
    let pixels = document.querySelectorAll('.pixel');
    for ( let o of pixels){
        o.style.backgroundColor = '#FFFFFF';
    };  
}

const botao2 = document.getElementById('clear-board');
botao2.addEventListener('click', addCorWhite);

criaBotao();

botaoClassSelected();

pintarPixels();

window.onload = function(){
    devolverCor();

    const pixel = document.getElementsByClassName('pixel')

    const o = JSON.parse(localStorage.getItem('pixelBoard'))

    if(o){
        for(let index = 0; index<pixel.length; index+=1){
            pixel[index].style.backgroundColor = o[index]
        }

    }
    
} 

