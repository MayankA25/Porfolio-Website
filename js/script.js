burger = document.getElementsByClassName("burger")[0];
header = document.getElementsByTagName("header")[0];
heading = document.getElementsByClassName("heading")[0];
intro = document.getElementsByClassName("intro")[0]






header.style.display = "block";
heading.style.display = "none";

burger.addEventListener("click", ()=>{
  if(header.style.display == "none"){
    header.style.display = "block";
    heading.style.display = "none";
    intro.style.removeProperty("top");
  }
  else if (header.style.display == "block"){
    header.style.display = "none";
    heading.style.display = "block";
    intro.style.top = "20%"
  }
})
