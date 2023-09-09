//declare avriable to target the element having id as playerText
let playertext = document.getElementById("playertext");
//declare variable to target th eelment havng id as restartbtn
let restartbtn = document.getElementById("restartbtn");
//store an array with all the elments conating the same class as "box" with the help of Array library
let boxes = Array.from(document.getElementsByClassName("box"));

//declare the variable to store the CSS property to further use it in JS
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-block');


// declaring constants to store values of "O" and "X"
const O_TEXT = "0";
const X_TEXT = "X";
//initializing currentPlayer to default value of "X"
let currentPlayer = X_TEXT;
// declare an array of size 9 and fill it with null values
let spaces = Array(9).fill(null);


// arrow function as "startGame()" which in turn serves as the main function 
const startGame=()=>{
    //iterating through boxes[] to add events of click and calling the function boxClicked to each element present in that array , named "box"
    boxes.forEach(box => box.addEventListener("click",boxClicked) );
}

//function to b invoked when box is clicked, passed with a parameter
function boxClicked(e){
    // store id of the targeted box
   const id = e.target.id;
   // to check whether or not the id which serves as index of spaces[] contains a value or not: if it doesnot conatins we proceed
   if(!spaces[id]){
    // fill the spaces[] index with currentPlayer 
    spaces[id]=currentPlayer;
    //changing the innerText to the currentPlayer
    e.target.innerText = currentPlayer;

    //checking the condition of winning with the help of a function: if true
    if(playerHasWon() !== false){
        //changing the playerText to winning text
        playertext=`${currentPlayer} has won!`;
        //storing the return value of the function
        let winningBlocks = playerHasWon()

        // map the values to change their backgroungColor
        winningBlocks.map(box =>boxes[box].style.backgroundColor=winnerIndicator)
        return;
    }
    
    //chnaging the currentPlayer , so that they work alternatively , using ternary operator
    currentPlayer = currentPlayer == X_TEXT?O_TEXT:X_TEXT;
   }
}

// an array of arrays conatining all the combinations which leads to a win condition in a 3*3 matrix game board
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// function to check if player has won
function playerHasWon(){
    // iterating through all the winning combinations using for of loop
 for (const condition of winningCombos) {
    let [a,b,c] = condition;
 // checking all the spaces of a,b,c to be same
    if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
        // returning the value of [a.b.c] which got stored in winningBlocks 
        return [a,b,c];
    }

 }
 // if the blocks did not match , it returns false
 return false;
}

// adding event Listener of click to call the function restart() on clicking the function
restartbtn.addEventListener("click",restart);

// function to be invoked on clicking of restart button
function restart(){
    //filling the spaces to null values as defined initially
    spaces.fill(null);

    // iterating through boxes[] to change the innerText and backgroundColor of each element of the array to change that to initial state
    boxes.forEach(box=>{
        box.innerText='';
        box.style.backgroundColor='';
    })
    //changing playerText to original text
    playertext='Tic Tac Toe'
    // changing to default value of current Player
    currentPlayer=X_TEXT;
}
//calling the main function startGame() to invoke and to run its functionality
startGame();