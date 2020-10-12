### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).

Closure is the variables that were in scope when a function was created. 

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

    Closure is used when personalDice is assigned with an argument to a variable. You can tell because the name is remembered each time.

b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

    Dan's name will always be the same in the sentence. What will change is the value of the roll.

c. What is the lexical scope of `newRoll`? 

    It is local scoped to its current block.
