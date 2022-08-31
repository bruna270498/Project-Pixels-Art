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
    const purple = document.getElementById('purple');
    const blue = document.getElementById('blue');
    const green = document.getElementById('green');
    const cores =[black,purple,blue,green];
    return cores;
}

function botaoColor(arrayCores){
    for(let paletaCores of arrayCores){
        if(paletaCores === black){
            return black
        }
        if(paletaCores === purple){
            return purple
        }
        if(paletaCores === blue){
            return blue
        }
        else{ return green}
    }
    console.log(paletaCores)
 
}
botaoColor();