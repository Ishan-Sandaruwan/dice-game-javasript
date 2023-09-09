const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    clicked();
})


function clicked(){

    var randomNumber1 = Math.ceil((6*(Math.random())));
    var randomNumber2 = Math.ceil((6*(Math.random())));

    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    const title = document.querySelector("h1");

    img1.setAttribute("src",`./images/dice${randomNumber1}.png`);
    img2.setAttribute("src",`./images/dice${randomNumber2}.png`);

    if(randomNumber1>randomNumber2){
        title.textContent = "🚩 Player 1 Wins ";
    }else if(randomNumber1<randomNumber2){
        title.textContent = "Player 2 Wins 🚩";
    }else{
        title.textContent = "Draw!";
    }

}