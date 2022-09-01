function criaBotao(){
    const botao = document.createElement('button');
    botao.id ='button-random-color';
    botao.innerText='Cores aleatórias';
    botao.addEventListener('click', gerarCor);
    const pai =document.getElementById('color-palette')
    pai.appendChild(botao)
}
criaBotao();
function gerarCor(){
    const num = '0123456789ABCDEF';
    let cor = '#'
    
    for(let gerar=0;gerar<4;gerar+=1){
      cor += num[Math.floor(Math.random() * 9)];
    }
    return cor
}
function atribuicao(color){
    const corr = document.getElementById('black');
    const m = corr.style.backgroundColor=color;
    return m;
}
atribuicao('red');


// function arrayCores(){
//     const black = document.getElementById('black');
//     black.style.backgroundColor = 'black';
//     const purple = document.getElementById('purple');
//     purple.style.backgroundColor = 'purple';
//     const blue = document.getElementById('blue');
//     blue.style.backgroundColor = 'blue'
//     const green = document.getElementById('green');
//     green.style.backgroundColor = 'green'
//     const cores =[black,purple,blue,green];
//     return cores;
  
// }

// function botaoColor(){
//     const black = arrayCores()[0];
//     const purple = arrayCores()[1];
//     const blue = arrayCores()[2];
//     const green = arrayCores()[3];
//     const cores=[black,purple,blue,green]
   
//     if( black){
//         // return paleta;
//      console.log(black)
//     }
//     if(purple){
//         // return paleta;
//         console.log(purple)
//     }
//     if(blue){
//         // return paleta;
//         console.log(blue)
//     }
//     if(green){
//         // return paleta;
//         console.log(green)
//     }
    

// }
// localStorage.setItem('cor',botaoColor)
// localStorage.getItem(key)

