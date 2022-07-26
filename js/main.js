var elHeader = document.querySelector(".site-header__inner");
var elBtn = document.querySelector(".site-header__btn");





elBtn.addEventListener("click" , function(){
  elHeader.classList.toggle("site-header__inner--active");

  elBtn.classList.toggle("site-header__btn--active");
})

