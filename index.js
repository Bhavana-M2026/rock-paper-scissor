let userMarks = 0;
let compMarks = 0;

const selector = document.querySelectorAll(".choice");
const message = document.getElementById("msg");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");



selector.forEach( element =>{
    element.addEventListener("click", ()=>{
        let userChoice = element.getAttribute("id");
        playgame(userChoice);
    });
});

function playgame(userChoice){
    //-----------Computer choice------------

    choices = ["rock", "paper", "scissor"];
    CompInd = Math.floor(Math.random() * 3);
    CompChoice = choices[CompInd];

    if(userChoice === CompChoice){
         message.innerText = "It's a Draw!!";
         message.style.backgroundColor = "#01015f";
    }
    
    else{
        let user = true;
        if(userChoice === "rock"){
            user = (CompChoice === "paper") ? false : true;
        }
        else if(userChoice == "paper"){
            user = (CompChoice === "scissor") ? false : true;
        }
        else{
            user = (CompChoice === "rock") ? false : true;
        }

        showWinner(user, userChoice, CompChoice);
    }
}

function showWinner(user, userChoice, CompChoice){
    if(user === true){
        userMarks++;
        userScore.textContent = userMarks;
        message.innerText = `You Win!... your choice ${userChoice} beats ${CompChoice}`;

        message.style.backgroundColor = "green";
    }

    else{
        compMarks++;
        compScore.textContent = compMarks;
        message.innerText = `You lose!... ${CompChoice} beats your ${userChoice} `;
        message.style.backgroundColor = "red";
    }

}



