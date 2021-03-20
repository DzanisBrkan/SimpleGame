var character = document.getElementById("character");
var block = document.getElementById("block");
var cloud = document.getElementById("cloud");
// var gameOver = document.getElementById("gameOver").style.display = "none";


function jump () {
     // problem je sto ako previse puta skocimo (dodamo klasu)
    // onda ce on dodati vise puta a nece isteci 500ms zato dodajemo if
    if(character.classList != "animate")
    {
        // dodajemo klasu animate 
        character.classList.add("animate");
             // uklanjamo klasu animate 
     setTimeout(function()
        {
            character.classList.remove("animate");
        },500);
    }   
}

var checkDead = setInterval(function () {
    // vraca top poziciju lika da bi mogli odrediti da li dira block
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // vraca top poziciju bloka
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft <20 && blockLeft>0 && characterTop>=130)
    {
        block.style.animation = "none";
        block.style.display = "none";
        cloud.style.animation = "none";
        cloud.style.display = "none";
        character.style.animation = "none";
        character.style.display = "none";
        alert("Game Over");
        window.location.href = "index.html";
        // gameOver.style.display = "initial";
    }

}, 10)