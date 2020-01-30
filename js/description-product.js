const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
  /* if ($heart.classList.contains("-active")) {
    $heart.classList.remove("-active");
  } else {
    $heart.classList.add("-active");
  } */

  $heart.classList.toggle("-active");
}


/* document.querySelector(".-star").addEventListener("moeover", () => {
  console.log($stars);
}); */

// pegar estrelas
// mudar cor ao click na estrela

const $stars = window.document.querySelectorAll(".-star .icon");
for (let i = 0; i < $stars.length; i++) {
  $stars[i].addEventListener("click", () => changeStars(i) );
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
} 
