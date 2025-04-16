const secretNumber= Math.floor (Math.random()*10)+1;
const guessInput= document.getElementById ("guessInput");
const guessBtn= document.getElementById ("guessBtn");
const guessResult= document.getElementById ("guessResult");



guessBtn.addEventListener ("click", function () {
    const guess=parseInt(guessInput.value);

    if (guess === secretNumber) {
        guessResult.textContent = "🥳 Correct! You guessed it!";
    } else if (guess < secretNumber) {
        guessResult.textContent = "📉 Too low!";
    } else if (guess > secretNumber) {
      guessResult.textContent = "📈 Too high!";
    } else {
      guessResult.textContent = "❌ Invalid input.";
    }
  });

    
