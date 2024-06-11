let us=0;
let cs=0;
let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let id=choice.getAttribute("id");
        console.log("choice was clicked",id);
        Result(id);
    })
})
const findComp=()=>{
    let cho=["Rock","Paper","Scissor"];
    let k=(Math.floor(Math.random()*3));
    console.log(cho[k]);
    return cho[k];

}
let result=document.querySelector("#Result");
let UserScore=document.querySelector("#UserScore");
let ComputerScore=document.querySelector("#ComputerScore");
const disDraw=()=>{
    result.innerText="It is a Draw, Play Again";
}
const disWin=(uCho,cCho)=>{
    us++;
    result.innerText=`You Win! Your ${uCho} beats  ${cCho}`;
    UserScore.innerText=us;
}
const disLose=(uCho,cCho)=>{
    cs++;
    result.innerText=`You Lose! ${cCho} beats ${uCho}`;
    ComputerScore.innerText=cs;
}
const Result=(uCho)=>{
       let cCho=findComp();
       if(uCho==cCho){
            disDraw();
       }
       else if(uCho=="Rock"){
            cCho=="Paper"? disLose(uCho,cCho) : disWin(uCho,cCho);
       }
       else if(uCho=="Paper"){
            cCho=="Scissor"? disLose(uCho,cCho) : disWin(uCho,cCho);
       }
       else{
            cCho=="Rock"? disLose(uCho,cCho) : disWin(uCho,cCho);
        }
}


