
let score=0;

const pickUserHand= (hand) =>{
    console.log(hand);

    let disappear=document.querySelector(".hands");
    disappear.style.display="none";

    let appear=document.querySelector(".contest");
    appear.style.display="flex";


    // Set the user pick

    if(hand=="rock")
    document.getElementById("userpickimage").src="images/Rock.png";
    else if(hand=="paper")
    document.getElementById("userpickimage").src="images/Paper.png";
    else
    document.getElementById("userpickimage").src="images/Scissors.png";
    
    
let cphand=computerpick();
console.log(cphand);
console.log(hand);
result(cphand,hand);

}

// Computer Hand

const computerpick=() =>{
    let arr=["rock","paper","scissor"];

    let cphand=Math.floor(Math.random()*3);
    // console.log(cphand);

    console.log(arr[cphand]);
    if(arr[cphand]=="rock")
    document.getElementById("housechoice").src="images/Rock.png";
    else if(arr[cphand]=="paper")
    document.getElementById("housechoice").src="images/Paper.png";
    else
    document.getElementById("housechoice").src="images/Scissors.png";
    
return cphand;
}

// Display Result


const result=(cphand,hand) =>{
    if(hand=="paper" && cphand==2)
    descision("lose");
    else if(hand=="paper" && cphand==1)
    descision("tie");
    else if(hand=="paper" && cphand==0)
    descision("win");

    if(hand=="rock" && cphand==1)
    descision("lose");
    else if(hand=="rock" && cphand==0)
    descision("tie");
    else if(hand=="rock" && cphand==2)
    descision("win");


    if(hand=="scissor" && cphand==0)
    descision("lose");
    else if(hand=="scissor" && cphand==2)
    descision("tie");
    else if(hand=="scissor" && cphand==1)
    descision("win");
}

const descision=(descisionpara) =>{
    console.log(descisionpara);

    if(descisionpara=="win"){
        document.querySelector(".message").innerHTML="You Win";
        score++;
        document.querySelector(".score h1").innerHTML=score;
    }
    
    else if(descisionpara=="tie"){
        document.querySelector(".message").innerHTML="Its a Tie";
    }
    
    else if(descisionpara=="lose"){ 
        document.querySelector(".message").innerHTML="You Lose!!!";
    }

    

}


const restartGame=()=>{

    
    let disappear=document.querySelector(".hands");
    disappear.style.display="flex";

    let appear=document.querySelector(".contest");
    appear.style.display="none";

}
