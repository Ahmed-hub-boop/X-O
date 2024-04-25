let turn = 'X';
let title = document.querySelector(".title");
let squers = Array.from(document.querySelectorAll(".sqr"));

function winner(){
    //first cond
    if(squers[0].innerHTML==squers[1].innerHTML && squers[1].innerHTML==squers[2].innerHTML && squers[0].innerHTML!=""){
        end(0,1,2);
    }
    else if(squers[3].innerHTML==squers[4].innerHTML && squers[4].innerHTML==squers[5].innerHTML && squers[3].innerHTML!=""){
        end(3,4,5);
    }
    else if(squers[6].innerHTML==squers[7].innerHTML && squers[7].innerHTML==squers[8].innerHTML && squers[6].innerHTML!=""){
        end(6,7,8);
    }
    //second cond
    else if(squers[0].innerHTML==squers[3].innerHTML && squers[3].innerHTML==squers[6].innerHTML && squers[0].innerHTML!=""){
        end(0,3,6);
    }
    else if(squers[1].innerHTML==squers[4].innerHTML && squers[4].innerHTML==squers[7].innerHTML && squers[1].innerHTML!=""){
        end(1,4,7);
    }
    else if(squers[2].innerHTML==squers[5].innerHTML && squers[5].innerHTML==squers[8].innerHTML && squers[2].innerHTML!=""){
        end(2,5,8);
    }
    //third cond
    else if(squers[0].innerHTML==squers[4].innerHTML && squers[4].innerHTML==squers[8].innerHTML && squers[0].innerHTML!=""){
        end(0,4,8);
    }
    else if(squers[2].innerHTML==squers[4].innerHTML && squers[4].innerHTML==squers[6].innerHTML && squers[2].innerHTML!=""){
        end(2,4,6);
    }
    else if(squers[0].innerHTML!=""&&squers[1].innerHTML!=""&&squers[2].innerHTML!=""
    &&squers[3].innerHTML!=""&&squers[4].innerHTML!=""&&squers[5].innerHTML!=""
    &&squers[6].innerHTML!=""&&squers[7].innerHTML!=""&&squers[8].innerHTML!=""){
        title.innerHTML=`Draw`
        setInterval(function(){title.innerHTML+="."},1000);
        setTimeout(function(){location.reload()},4000)
    }
}


function game(id){
    let element = document.getElementById(id);
    if(turn==='X' && element.innerHTML==""){
        element.innerHTML='X'
        turn="O";
        title.innerHTML=`<span>O</span> Turn`;
    }
    else if(turn==="O" && element.innerHTML==""){
        element.innerHTML='O'
        turn="X";
        title.innerHTML=`<span>X</span> Turn`;
    }
    winner();
}


function end(n1,n2,n3){
    title.innerHTML=`<span>${squers[n1].innerHTML}</span> Winner`;
    n1++; n2++; n3++;
    document.getElementById('sq'+n1).classList.add("win");
    document.getElementById('sq'+n2).classList.add("win");
    document.getElementById('sq'+n3).classList.add("win");
    setInterval(function(){title.innerHTML+="."},1000);
    setTimeout(function(){location.reload()},4000)
}