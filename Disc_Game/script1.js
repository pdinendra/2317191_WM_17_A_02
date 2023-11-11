const disc = document.getElementById('disc-btn');

function discgame(){
    var randomdisc = Math.floor((Math.random()*6)+1);
    var disclocation = "image/"+"Disc-"+randomdisc+".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src",disclocation);
    
    var randomdisc1 = Math.floor((Math.random()*6)+1);
    var disclocation1 = "image/"+"Disc-"+randomdisc1+".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src",disclocation1);

    if(randomdisc>randomdisc1){
        document.querySelector("h1").innerHTML="Player 1 Winner";
    }
    else if(randomdisc<randomdisc1){
        document.querySelector("h1").innerHTML="Player 2 Winner";
    }
    else if(randomdisc=randomdisc1){
        document.querySelector("h1").innerHTML="Draw";
    }
    else{
        document.querySelector("h1").innerHTML="Error";
    }
}