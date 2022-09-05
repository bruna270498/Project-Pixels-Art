function criaBotao() {
    const botao = document.createElement('button');
    botao.id = 'button-random-color';
    botao.innerText = 'Cores aleatórias';
    botao.addEventListener('click', atribuicao);
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
function atribuicao() {
    const cor1 = document.getElementById('black').style.backgroundColor='black';
    const cor2 = document.getElementById('purple').style.backgroundColor=gerarCor();
    const cor3 = document.getElementById('blue').style.backgroundColor=gerarCor();
    const cor4 = document.getElementById('green').style.backgroundColor=gerarCor();
    localStorage.setItem('colorPalette', JSON.stringify([cor1,cor2,cor3,cor4]));
    window.onload = JSON.parse(localStorage.getItem('colorPalette'));
}
// function a (){

//     let barra = document.querySelectorAll(".color");

// barra.forEach((item)=>{

    
//     item.addEventListener("click", function(e) {
//         e.preventDefault();
      
//         barra.forEach((i) => {
//             if(i != this){

//                 console.log(i.classList.remove("selected"));
//             }else(console.log(i.classList.toggle('selected')))
//         }); 
//     })
//   });
// }a();
function n () {
    let a = document.querySelectorAll('.color');
    for (let e of a){
    e.addEventListener('click', function () {
        if( a != 'color'){
            e.classList.remove('selected')
        }
        e.classList.toggle('selected');
        // console.log(e)
        return e
    })
    }
 
}n ();

function limpar() {
    let botao = document.getElementById('clear-board');
    let pixels = document.querySelectorAll('.pixel');
    if (pixels != 'white'){
        console.log('diferente')
    }else {console.log('igual')}
   
}limpar()
