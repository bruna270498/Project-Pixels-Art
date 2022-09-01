function criaBotao(){
    const botao = document.createElement('button');
    botao.id ='button-random-color';
    botao.innerText='Cores aleatórias';
    botao.addEventListener('click', botaoColor);
    const pai =document.getElementById('color-palette')
    pai.appendChild(botao)
}
criaBotao();

function arrayCores(){
    const black = document.getElementById('black');
    black.style.backgroundColor = 'black';
    const purple = document.getElementById('purple');
    purple.style.backgroundColor = 'purple';
    const blue = document.getElementById('blue');
    blue.style.backgroundColor = 'blue'
    const green = document.getElementById('green');
    green.style.backgroundColor = 'green'
    const cores =[black,purple,blue,green];
    return cores;
  
}

function botaoColor(){
    const black = arrayCores()[0];
    const purple = arrayCores()[1];
    const blue = arrayCores()[2];
    const green = arrayCores()[3];
    const cores=[black,purple,blue,green]
    let resultado=;
    for(let paleta=0; paleta<cores.length;paleta+=1){
        resultado=paleta;    }

    // switch (cores) {
    //     case black:
    //         // return black
    //         console.log(black)
    //         break;
    //     case purple:
    //         // return purple
    //         console.log(purple)
    //         break;
    //     case blue:
    //         return blue
    //         break;
    
    //     default: 
    //         return green
    //         break;
    // }
    if( resultado == black){
        // return paleta;
     console.log(black)
    }
    if(purple){
        // return paleta;
        console.log(purple)
    }
    if(blue){
        // return paleta;
        console.log(blue)
    }
    if(green){
        // return paleta;
        console.log(green)
    }
    

}
// localStorage.setItem('cor',botaoColor)
// localStorage.getItem(key)

