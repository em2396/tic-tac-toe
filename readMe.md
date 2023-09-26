### IdeaBox

## Abstract
The goal of this project was to create a tic-tac-toe board game where two players are sharing the computer. It starts on playerOne or 'X' and once the player has clicked an empty cell on the board, playerTwo goes. If one player wins, the game resets and the person who went second the previous game, goes first for the new game. If no one wins, the banner will dispaly: "It's a draw!" and the game will reset. 

## Installation Instructions
To get this app running, clone it down from GitHub under the "<> Code" dropdown.  
Open it from your terminal or preferred CLI with git clone <SSH key>.   
Move into the directory, open the file in your code editor of choice, and you'll have everything you need!   
The app can be viewed and interacted with in your browser of choice by using `open index.html` in your terminal.  


## Preview of App
![Screenshot](/Users/emaleepoellot/mod1/tic-tac-toe/Screenshot 2023-09-25 at 7.44.44 PM.png)

## Context
This project is from Week 5, Mod 1 of the Turing Front-End Engineering Program. This was a solo project and the final project to continue to the next Module. 

## Contributors
This application was created by [Emalee Poellot](https://github.com/em2396).

## Learning Goals
This project was intended to solidify and demonstrate my collective knowledge of DRY Javascript, as well as iterating through DOM elements and using problem solving to overcome the complexity of multiple functions.

## Wins + Challenges
# Wins
I feel like I had a good idea of what to do and it's good that I feel like I am building my knowledge of CSS and HTML with every new project. 
I didn't struggle with the CSS as much this project. I stuck with the use of flex and wasa able to get the relative dimensions pretty quickly in comparison to the group project.
I realize my CSS isn't super creative but I focused more on the organization of my CSS and ensuring propr naming techniques and accessibility which I feel is more important. This project helped solidify that knowledge.
Learning the .every method so that I didn't have to use a nested for loop when comparing the winning combinations with the current cell choices of each player. 

# Challenges
I got stuck on one particular instance where, on the reset function, everything would be displayed properly on the web page (elements tab had been fully reset, all the console.logs were showing what they should be), but one variable cellToAddToken, which should be empty, was showing the previous games cell token. The issue was how I replaced the HTML. I did boardGame.innerHTML = 'All my code here'; However, this didn't work and I instead had to iterate through the cells classes and reset it that way.
I read the rubric in the beginning but didn't have it handy the whole time and when I got stuck on an area I focused on that and came back to the rubric realizing I had forgotten something. For example, I got the banner to change based on players turns but forgot to implement it when someone won or there was a draw and the implemenetation wasn't working the way I had previouslt updated to change turns, so I had to create a whole new function.
On the particular instance I got stuck on, it held me up on time a lot. I couldn't figure out the issue and couldn't get help until two days after, so I suddenly felt like I was behind on time management. It's definitely a  challenge when one piece of code prevents you from debugging or fixing any issues with the rest of your code. 
