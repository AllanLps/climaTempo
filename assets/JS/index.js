let select = document.querySelector('#main-selecao');
let para = document.querySelector('#para');
let imagem = document.querySelector('#main-img1');
let fundo = document.querySelector('body');



addEventListener('change', selecao);
addEventListener('change', trocaImagem);
addEventListener('change', trocarFundo);

function selecao(){
    let escolha = select.value;

    if(escolha === 'sol') {
        para.textContent ='Dia ensolarado? Curta uma praia, vá ao parque, saia de casa e aproveite esse dia de sol!'  
    } else if (escolha === 'nublado'){
        para.textContent = 'Tempo está nublado e frio? Aproveite para relaxar em casa, leia um livro ou assista um filme, mas se for sair, leve seu guarda-chuva ;)'
    } else if (escolha === 'nevando') {
        para.textContent = 'A neve está caindo - está congelando! Melhor ficar em casa com uma xícara de chocolate quente ou construir um boneco de neve'
    } else if (escolha === 'chovendo') {
        para.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda chuva, e não fique fora por muito tempo.'
    } else {
        para.textContent = ''
    }
}

function trocaImagem(){
    let selecionaImagem = select.value;

    if(selecionaImagem === 'sol'){
        imagem.src = 'assets/img/sol.png'
    } else if (selecionaImagem === 'nublado') {
        imagem.src = 'assets/img/nuvem.png'
    } else if (selecionaImagem === 'nevando') {
        imagem.src = 'assets/img/neve.png'
    } else if (selecionaImagem === 'chovendo') {
        imagem.src = 'assets/img/chuva.png'
    } else{
        imagem.src = 'assets/img/img1.png'
    }
}

function trocarFundo(){
    let selecionarFundo = select.value;

    if(selecionarFundo === 'sol') {
        fundo.style.background = '#64C6FF';
    } else if (selecionarFundo === 'nublado') {
        fundo.style.background = '#949596';
    } else if (selecionarFundo === 'nevando') {
        fundo.style.background = '#428CB2';
    } else if (selecionarFundo === 'chovendo') {
        fundo.style.background = '#DEB42A';
    } else {
        fundo.style.background = '#5271FF';
    }
}