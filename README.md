# TicTacToe

HTML-
The Html file is named as index.html and is linked with stylesheet in the head section and script in the body section.
In this I have made the outer box with class=”container”, it contains a heading enclosed in h1 tag with id =”playertext” and a button named “Restart” with an id of “restartbtn”.
Another div is created with and id gameboard , it contains 9 div elements starting from 0 to 8 with their class=”box” and their id as their number.

CSS-
Moving on to stylesheet a universal selector is used (*) to give some styling . Along with this two CSS variables are created inside “:root” named orange and winning-block both contains the hex code of the respective colors. These variables are called whenever we need to define the color like orange is called in h1 and button. The variables are used to maintain consistency of the code and so that we do not have to define the hex code again and again.
Rest CSS styling is done using class and id.
One added thing is the nth-child(..) property is used in the box class to remove border-right.

JAVASCRIPT-
For its main functionality:
Playertext and restartbtn are targeted by their ids.
A variable is created named boxes which consists of an array that is made from all the items named their classes as “box”. It is created with the help of “Array.from()” function.

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-block');


In the above snippet, a variable is created named winnerIndicator which uses getComutedStyle().getPropertyValue() functions which are used to inbuilt css variables to use in JS.
Two constants are defined for “O” and “X”, and by default current player is set to “X”.
An array of 9 elements is created and filled with null , named as spaces.

let spaces = Array(9).fill(null);

An arrow function is created with a name “startGame()” which serves as the main function of this game:
In this function the array named “boxes” is iterated through forEach loop and each element of the array i.e., “box” is attached to an event of clicked, with the help of “addEventListener()” calling another function named “boxClicked()” on clicking the box.

“boxCLicked()”:
This function takes as “e” as an parameter which then is used to target the event. Event is used to get the id of the box which is clicked by the user , if “spaces[id]” is empty i.e., assigned with null value then, it is replaced by “currentPlayer” and moreover the innerText of the targeted box is changed to “currentPlayer”.
Another condition is also checked I this function of winning the user :
For this, we check the condition inside an if statement if the function “playerHasWon()” is true or false: if it stands to true we update the “playerText” with “currentPlayer” has won. This is done through “template literals”.
We assign the function “playerHasWon()” to a variable named “winningBlocks”. And then map the contents of this variable to change the background color of the winning blocks.
After that we rotate the current player in between “O” and “X”, with the help of ternary operator as:

currentPlayer = currentPlayer == X_TEXT?O_TEXT:X_TEXT;


We create an array of arrays named “winningCombos” which contains all the triplets in a 3*3 matrix which makes the player to win in the game.

playerHasWon():
Using the forof loop we iterated through the “winningCombos” with a variable named “condition” and then store it in an array as [a,b,c]. we check this array with regards to spaces to checks whether the symbol at position a,b,c is same if this stands to be true we return [a,b,c] which is used in the function boxClicked to change the bg color., otherwise returns false.
At Last , an EventListener is added to Restart button which calls the function restart() on click event.
restart():
In this we again fill the spaces[] with null values and change the properties of the elements of boxes[] which includes changing the innerText of each box to empty String and also the background color to empty value, it is done by iterating through the boxes[] by forEach loop.
playerText is changed to its original state “TIC TAC TOE” and currentPlayer to “X”.

startGame() function is called.

