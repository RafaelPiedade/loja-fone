const $search = document.querySelector("[type=search]");
console.log($search)
$search.addEventListener('click',()=>{
    console.log(this)
    $search.classList.toggle('-active')
})
