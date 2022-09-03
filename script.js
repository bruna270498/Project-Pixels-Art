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
function a (){
    let c = document.getElementById('black')
    let g = document.getElementById('blue')
    let j = [c,g]
    for(let o of j){
        o.addEventListener('click', function(){
            if( o   === 'selected'){
            o = this.className = 'color'
          console.log(o)}else{ console.log(o=this.className='selected')}
        })
    }
    for(let u of o)
}a()
function b() {
    a()
   
}