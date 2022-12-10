// MOSTRAR QUANDO OS LINKS DO MENU ESTUVEREM ATIVOS
//captura os links para fazer modificação
const links = document.querySelectorAll('.header-menu a');
// capitura a url completa do link e dps o href
function ativarLink(link){
    const url = location.href;
    const href = link.href;
//se dentro da url estiver incluido o href adicione a classe ativo no link
    if(url.includes(href)){
        link.classList.add('ativo');
    }
//vamos no css e passamos a classe e como ela deve ficar
}
//para cada links chame a função ativarLink
links.forEach(ativarLink);


//ATIVAR LINKS DO ORCAMENTO QUANDO CLICAM EM COMPRAR
//captura os parametros da url
const parametros = new URLSearchParams(location.search);
// captura o elemento pelo id
function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
//se o elemento tiver parametros verdadeiros, ative-os
    if(elemento){
    elemento.checked = true;
    }
    console.log(elemento);
}
//para cada parametros chame a função ativar produto
parametros.forEach(ativarProduto);


//GALERIA DE BICICLETAS
const galeria = document.querySelectorAll('.bike-img img');
const galeriaContainer = document.querySelector('.bike-img');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media){
        galeriaContainer.prepend(img);
    }
}
function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}
galeria.forEach(eventosGaleria);