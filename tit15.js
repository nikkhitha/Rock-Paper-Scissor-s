let choices=document.querySelectorAll(".choice")

let d=0;
let userscore=document.querySelector("#userscore")
let e=0;
let compscore=document.querySelector("#compscore")
let msg=document.querySelector("#msg")
let compgenchoice=()=>{
    const options=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
}
const gamedraw=()=>{
    msg.innerText="Game was Draw play Again";
    msg.style.backgroundColor="darkolivegreen"
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        d=d+1;
        userscore.innerText=d;
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        e+=1;
        compscore.innerText=e;
        msg.innerText=`You lost ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         let userchoice=choice.getAttribute("id");
         playgame(userchoice);
    })
})

let playgame=(userchoice)=>{
    const compchoice=compgenchoice();
    if(userchoice===compchoice){
        gamedraw();
    }
    else{
      let userwin=true;
      if(userchoice==="rock"){
        userwin=compchoice === "paper"?false:true;
      }
      else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
      }
      else{
        userwin=compchoice==="rock"?false:true;
      }
      showwinner(userwin,userchoice,compchoice);
    }
}