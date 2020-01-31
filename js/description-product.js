const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

$stars.forEach($star => {
  $star.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("-active");
}

/* document.querySelector(".-star").addEventListener("moeover", () => {
  console.log($stars);
}); */

// pegar estrelas
// mudar cor ao click na estrela

/* const $stars = document.querySelectorAll(".star");
for (let i = 0; i < $stars.length; i++) {
  $stars[i].addEventListener("click", () => {
    changeStars(i)
  } );
}
function changeStars(number) {
  for (let i = 0; i < $stars.length; i++) {
    const element = $stars[i];
    if(i <= number){
      element.classList.add('-active')
    }else{
      element.classList.remove('-active')
    }
  }
}  */

/* 
$stars[0].addEventListener("click", handleClickStar);

function handleClickStar() {
  this.classList.toggle("-active");
  console.log(this)
}
 */
