const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let score = 0;

document.addEventListener("keydown", function(event){
    jump();
});

function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump')
        jump.onanimationend = function(){
            score++;
        }
    }
    setTimeout(function(){
        dino.classList.remove('jump')
    },300)
}


let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // if(cactusLeft < 0){
    //     score++;
    //     document.getElementById("score").innerHTML = `Score: ${score}`;
    // }

    if(cactusLeft < 50 && cactusLeft<0 && dinoTop >=140){
        
        alert('GAME OVER!!!');
        score = 0;
    }
}, 10)