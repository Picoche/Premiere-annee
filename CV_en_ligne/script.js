let scrollPercent;

window.addEventListener('scroll', () => {
  let a = $(window).scrollTop(),
      b = $(document).height(),
      c = $(window).height();

  scrollPercent = (a / (b - c)) * 100;

  console.clear();
  console.log(scrollPercent);
})

const btnTop = document.querySelector("#scrollTop")

window.addEventListener('scroll', () => {
    if (scrollPercent >= "60"){
        btnTop.classList.remove('hiddenTop');
        btnTop.classList.add('showTop');
    }
    else{
        btnTop.classList.remove('showTop');
        btnTop.classList.add('hiddenTop');
    }
})

btnTop.addEventListener('click', () => {
    scrollTo(top)
})

var actuel = 0
var precedent

let intervalle = setInterval(carSelector, 3000)

const image = document.querySelectorAll("#imgs img")

const imgContainer = document.querySelector("#logos")

const showForm = document.querySelector("#headerCol")
const form = document.querySelector("#hiddenForm")

const showFormTel = document.querySelector("#headerColTel")
const formTel = document.querySelector("#hiddenFormTel")

function carSelector() {
    if (actuel < image.length - 1) {
        actuel++
        precedent = actuel - 1
    }
    else if (actuel <= image.length - 1) {
        actuel = 0
        precedent = image.length - 1
    }
    image[actuel].classList.remove("hidden")
    image[actuel].classList.add("show")
    image[precedent].classList.add("hidden")
    image[precedent].classList.remove("show")
}

window.addEventListener("DOMContentLoaded", () => {
    intervalle
})

imgContainer.addEventListener("mouseenter", () => {
    clearInterval(intervalle)
})

imgContainer.addEventListener("mouseleave", () => {
    intervalle = setInterval(carSelector, 3000)
})

function slideDown(element, duration = 1500) {
    element.style.display = "flex"
    element.style.opacity = 0
    let height = element.offsetHeight
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    element.offsetHeight
    element.style.opacity = 1
    element.style.transitionProperty = "height, margin, padding, opacity"
    element.style.transitionDuration = duration + "ms"
    element.style.height = height + "px"
    element.style.removeProperty("padding-top")
    element.style.removeProperty("padding-bottom")
    element.style.removeProperty("margin-top")
    element.style.removeProperty("margin-bottom")
}

showForm.addEventListener("click", (e) => {
    e.preventDefault
    slideDown(form)
})

showFormTel.addEventListener("click", (e) => {
        e.preventDefault
        slideDown(formTel)
})