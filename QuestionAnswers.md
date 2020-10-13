### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).

Everytime a function is created, a closure is created. The closure contains all the variables that were in scope when the function was declared. This alows an inner function to use variables from outer scopes.

2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?

    Closure is used in this function because it is reaching into the outer function's scope to get the value of the variable "name".
    
b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

    Dan's name will always be the same in the sentence. What will change is the value of the roll.

c. What is the lexical scope of `newRoll`? 

    It is local scoped to its current block, it does not need to reach to an outer-scope.
