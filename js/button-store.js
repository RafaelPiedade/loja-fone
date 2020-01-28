const $addCar = window.document.querySelector(".button-store.-second")
const $navCar = window.document.querySelector(".container-store .car")
var carrinho = 0


$addCar.addEventListener('click',adicionarNoCarrinho)




function adicionarNoCarrinho(){
    carrinho++;
    $navCar.textContent = `Carrinho (${carrinho})`;
}