//Variaveis
const container = document.querySelector("section");
const card = document.querySelector(".card");

//items form

const title = document.querySelector('.title');
const buttons = document.querySelectorAll('input');
const placeholder = document.querySelectorAll('form input::placeholder');


//movimentação do container
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//mouse in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  title.style.textShadow = '0 20px 20px rgb(0 0 0 / 20%), 0px 0px 50px rgb(0 0 0 / 20%)';

  for(i = 0; i < buttons.length; i++) {
    buttons[i].style.transform = "translateZ(150px)";
    buttons[i].style.boxShadow = '0 20px 20px rgb(0 0 0 / 20%), 0px 0px 50px rgb(0 0 0 / 20%)';
  }

  for(i = 0; i < placeholder.length; i++) {
    placeholder[i].style.transform = "translateZ(350px)";
    placeholder[i].style.boxShadow = '0 20px 20px rgb(0 0 0 / 20%), 0px 0px 50px rgb(0 0 0 / 20%)';
  }

});

//mouse out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    title.style.textShadow = 'none';

    for(i = 0; i < buttons.length; i++) {
      buttons[i].style.transform = "translateZ(0px)";
      buttons[i].style.boxShadow = "none";
    }
  
    for(i = 0; i < placeholder.length; i++) {
      placeholder[i].style.transform = "translateZ(0px)";
      placeholder[i].style.textShadow = 'none';
    }
});