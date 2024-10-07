const arrowUp = document.getElementsByClassName("fa-arrow-up")[0]
const preloader = document.getElementsByClassName("preloader")[0]
const clickToOpen = document.getElementsByClassName("clickToOpen")[0]


setTimeout(()=>{
    clickToOpen.style.display = "block"
}, 3000)

arrowUp.addEventListener("click", ()=>{
    preloader.style.animationName = "preloader"
    preloader.style.animationDuration = "2s";
    preloader.style.animationTimingFunction = "ease-in-out"

    setTimeout(()=>{
        preloader.style.display = "none"
    }, 2000)
})