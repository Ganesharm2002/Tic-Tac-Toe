let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#resetBtn');
let msg=document.querySelector('.msgContainer');
let sWinner = document.querySelector('#winner');
let newGame = document.querySelector('#newGameBtn');
let game=document.querySelector('.gameContainer');


console.log(newGame);
let turnX = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2]

];
let showWinner=(winner)=>{
    sWinner.innerText=`Congratulation:)😍  Winner is  ${winner}`;
    msg.classList.remove('hide');
}
boxes.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turnX == true) {
            btn.innerText = 'X';
            turnX = false;
       
        }
        else {
            btn.innerText = 'O';
            turnX = true;
        }
        btn.disabled = true;
        checkWinner();
    })



});
let checkWinner = () => {
    for (let pattern of winPatterns) {


        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
              for(let btns of boxes){
                btns.disabled=true;
              }
               showWinner(pos1);
              
                
               game.style.display='none';
               reset.style.transform='scale(0)';
            }
            else{
                sWinner.innerText=`No one Win The Match Tie Game✅`;
                
            }
        }

 
    };
}
let resetGame=()=>{
  enableBtn();
  turnX=true;
  msg.classList.add('hide');
  game.style.display='block';
  reset.style.transform='scale(1)';
  
}

let enableBtn=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);