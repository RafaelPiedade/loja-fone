/*
Etapas:
1-Ter a janela(browser) na mão ok
2-Ter o HTML na mão ok
3-Pegar o coração ok
4-Pegar click no coração
5-No momento que o usuário click dar uma alerta
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  console.log("ae");
}
