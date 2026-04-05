let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let newBtn=document.querySelector(".new-btn");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
const  winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[  1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
        box.innerText="0";
        turn0=false;
                

    }else{
         box.innerText="x";
        turn0=true;

    }
    box.disabled=true;
    count++
   let isWinner= checkwiners();
    if(count===9 &&!isWinner){
        drawGame();
    }

})
});
const resetGame=()=>{
    turn0=true;
    enabledBox();
    msgContainer.classList.add("hide");
}
const showWinner=(winner)=>{
msg.innerText=`congratulation winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledBox();
}
const drawGame=()=>{
    msg.innerText="The game is draw";
    msgContainer.classList.remove("hide");
    disabledBox();

}
const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBox=()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}
const checkwiners=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;
         if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                // console.log(" you have won the match",pos2Val)
                showWinner(pos1Val);
            }
            }
           
         }
    };
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);