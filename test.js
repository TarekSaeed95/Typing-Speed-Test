// ######################### selections ######################### //
let lvl = document.querySelector(".lvl")
let second = document.querySelector(".second")
let introScreen=document.querySelector(".intro-screen")
let container=document.querySelector(".container")
let intro = document.querySelector(".intro")
let startBtn=document.querySelector(".start-btn")
let displayWord=document.querySelector(".display-word")
let inputCell=document.querySelector("input")
let upcomingWordHolder=document.querySelector(".upcoming-word")
let upcomingWord=document.querySelector(".upcoming-words")
let timerHolder=document.querySelector(".left-area")
let timer=document.querySelector(".timer")
let scoreHolder=document.querySelector(".right-area")
let score=document.querySelector(".score")
let totalScore=document.querySelector(".total-score")
let finishLetter=document.querySelector(".finish-letter")
let lvlSelection=document.querySelector("#selection")
let lvlOption=Array.from(document.querySelectorAll("option"))
let success = document.querySelector("audio .success")
let winner = document.querySelector("audio .winner")
let gameover = document.querySelector("audio .gameover")
let word=[]
let easyWords= 
[
"sky",
"sea",
"box",
"cox",
"fax",
"fox",
"wax",
"jet",
"zoo",
"joy"]
let normWords=
[
    "PUZZLE",
    "HIJACK",
    "abroad",
    "access",
    "bottle",
    "coffee",
    "double",
    "enough",
    "estate",
    "follow"];
    let hardWords=
[
    "Exceptional",
    "Positive",
    "Stupendous",
    "Delightful",
    "Magnificent",
    "Marvelous",
    "Tremendous",
    "Righteous",
    "Virtuous",
    "Exemplary"]
    lvl.innerHTML="easy"
    second.innerHTML="6"
    word=easyWords
    timer.innerHTML=parseInt(second.innerHTML)+2

window.onload=function(){document.getElementById("gameplay").play()}

// ######################### SetCons-values ######################### //
lvlSelection.addEventListener("change",function(){
    lvl.innerHTML=this.value
    if (lvl.innerHTML=="normal"){
        second.innerHTML="5"
         word=normWords
         timer.innerHTML=parseInt(second.innerHTML)+2

    }
    else if (lvl.innerHTML=="easy"){
        second.innerHTML="6"
        word=easyWords
        timer.innerHTML=parseInt(second.innerHTML)+2

    }
    else if (lvl.innerHTML=="hard"){
        second.innerHTML="3"
        word=hardWords
        timer.innerHTML=parseInt(second.innerHTML)+2

    }
})

inputCell.onpaste=function(){
    return false
}
score.innerHTML=0
let span=document.createElement("span")
span.classList.add("to-left")
span.textContent="Next Words"
upcomingWordHolder.prepend(span)

// upcomingWord.innerHTML="Next Words"
// ######################### Set Array ######################### //

totalScore.innerHTML=word.length
// ######################### functions ######################### //
function Play (){
    inputCell.focus()
shuffle (word)
countDown()

}
function shuffle (Arr){
    let randomWord=Arr[Math.floor(Math.random() * Arr.length)]
     displayWord.innerHTML=randomWord
     let randomWordIndex=Arr.indexOf(randomWord)
     Arr.splice(randomWordIndex,1)
     Arr.forEach(function(el){
        let div=document.createElement("div")
        div.textContent=el
        upcomingWord.appendChild(div)
     })
    
}
    
    function countDown (){
        {let counter =setInterval(function(){
           if (timer.innerHTML>0){
            timer.innerHTML-- 
            if(inputCell.value.toLowerCase()==displayWord.innerHTML.toLowerCase()){
                inputCell.value="";
                displayWord.innerHTML="";
                shuffle (word);
                timer.innerHTML=second.innerHTML;
                score.innerHTML++;
                document.getElementById("success").play();
                if(word.length==0){
                    upcomingWord.remove()
                }
                if(score.innerHTML==totalScore.innerHTML){
                    clearInterval(counter)
                    displayWord.remove()
                    inputCell.remove()
                    finishLetter.style.cssText="width:fit-content;height:fit-content;padding:30px 40px"
                    timerHolder.remove()
                    scoreHolder.style.margin="auto"
                    finishLetter.textContent="Congrats"
                    intro.style.display="none"

                    document.getElementById("winner").play()

                }
            }
           }
else{if(score.innerHTML!==totalScore.innerHTML){
    clearInterval(counter)
    document.getElementById("gameover").play()

    displayWord.remove()
    inputCell.remove()
    timer.innerHTML=0
    upcomingWord.remove()
    finishLetter.style.cssText="width:fit-content;height:fit-content;padding:30px 40px;cursor:pointer"
    finishLetter.textContent="Lets Try Again.."
    intro.style.display="none"
    timerHolder.remove()
    scoreHolder.style.margin="auto"

    finishLetter.addEventListener("click",function(){
        location.reload();
        
    })

}}
        },1000)}}
    


// ######################### events ######################### //
startBtn.addEventListener("click",function(){
    introScreen.classList.add("throw")
    container.classList.add("get")
    setTimeout(Play,500)
})
