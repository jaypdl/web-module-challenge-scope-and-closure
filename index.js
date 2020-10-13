// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 declares the counter varaible (count) inside the function. It then assigns the function definition and its closure (count = 0) to the variable counter1.
 * 
 * Counter 2 declares the counter variable in the global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses a closure, we can tell because the count variable is assigned in the scope of the function (countMaker) and it is then assigned to a function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable in cases where you want to reuse the same code for various different items. 
 * Counter 2 would be preferable when you want the value of the counter accessible as a variable for other uses.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();


// counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random()*3);
};
// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
//What I need to do:
//Have score generated for each inning for both Home and Away. - Create For loop
//Each Loop, add to score for Home and Away
//Store those numbers in a object
function finalScore(inningScore, numInnings){
  let home = 0;
  let away = 0;
  for (let i =0; i < numInnings; i++){
    home += inningScore();
    away += inningScore();
  }
  return {"Home": home, "Away": away};
}
console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

//Take the score of the inning for home and away and log for each inning = create for loop
// 


function ending(value) {
  if (value === 1){
    return 'st';
  } else if (value === 2) {
    return 'nd';
  } else if (value === 3){ 
    return 'rd';
  } else {
    return 'th'
  }
}


function getInningScore(get){
  return (get);
  }
function scoreboard (scoreGrabber,inningScore,numInnings,valMod){
  let scores = []
  let randScore = scoreGrabber(inningScore);
  let finalHome = 0;
  let finalAway = 0;
  let home = 0;
  let away = 0;
  for (let i =0; i < numInnings; i++){
    home = randScore();
    away = randScore();
    finalHome += home;
    finalAway += away;
    scores.push(`${i+1}${valMod(i+1)} inning: ${away} - ${home} `);
    }
  scores.push(`Final Score: ${finalAway} - ${finalHome} `);
  return scores;
}
console.log(scoreboard(getInningScore,inning,9,ending));

// function scoreboard (scoreGrabber,inningScore,numInnings){
//   let scores = []
//   let randScore = scoreGrabber(inningScore);
//   let finalHome = 0;
//   let finalAway = 0;
//   for (let i =0; i < numInnings; i++){
//     scores[i] = {
//       "Home": randScore(),
//       "Away": randScore(),
//     }
//     finalHome += scores[i].Home;
//     finalAway += scores[i].Away;
//     }
//   scores[numInnings] = {
//     "Final Home": finalHome,
//     "Final Away": finalAway,
//   }
//   return scores;
// }
// console.log(scoreboard(getInningScore,inning,9));





// function personalDice(name){
//   return function(){
//       // generate random number between 1 and 6
//     const newRoll = Math.floor(Math.random() * 6);
//     console.log(`${name} rolled a ${newRoll}`)
//   }
// }

// const dansRoll = personalDice("Dan");

// const zoesRoll = personalDice("Zoe");


// console.log(dansRoll());
// console.log(dansRoll());
// console.log(zoesRoll());

