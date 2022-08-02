var elHeader = document.querySelector(".site-header__inner");
var elBtn = document.querySelector(".site-header__btn");

var elLabelOne = document.querySelector(".detal__label--one");
var elLabelTwo = document.querySelector(".detal__label--two");
var elLabelThre = document.querySelector(".detal__label--thre");





elBtn.addEventListener("click" , function(){
  elHeader.classList.toggle("site-header__inner--active");

  elBtn.classList.toggle("site-header__btn--active");
});


elLabelOne.addEventListener("click" , function(){
  elLabelOne.classList.add("detal__label--active");
  elLabelTwo.classList.remove("detal__label--active");
  elLabelThre.classList.remove("detal__label--active");
});

elLabelTwo.addEventListener("click" , function(){
  elLabelTwo.classList.add("detal__label--active");
  elLabelOne.classList.remove("detal__label--active");
  elLabelThre.classList.remove("detal__label--active");
});

elLabelThre.addEventListener("click" , function(){
  elLabelThre.classList.add("detal__label--active");
  elLabelTwo.classList.remove("detal__label--active");
  elLabelOne.classList.remove("detal__label--active");
});

