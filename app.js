const wallText = document.querySelectorAll(".wall_text");

window.addEventListener('scroll', parallaxText);

function parallaxText(e){
  wallText.forEach(text =>{
    let x = (window.innerHeight - document.documentElement.scrollTop * 6)/2;
    text.style.transform = `translateX(${x}px)`
  })
}