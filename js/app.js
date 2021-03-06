$(document).ready(function(){
		/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  	/*--- Variable Declaration---*/
  
  	var numberRandom;
  	var numberGuess;
  	var numberCheck;
  	var counter = 0;
  	var flag = 0;

  	/*--- Function Declaration---*/

  	/*--- Append Function---*/
  	function appendGuess(){
  		$('#guessList').append('<li>'+ numberGuess +'</li>');
  	}

  	/*--- New Game Function---*/

  	function newGame(){
  		$('#count').empty();
  		counter = 0;
  		flag = 0;
  		randomGenerate();
  		$('#guessList li').remove();
  		$('#feedback').text("Make Your Guess!");
  	}
  	/*--- Prevent Function---*/
  	function preventSubmit(){
  		$('.button').submit(function(event){
  			event.preventSubmit;
  		});
  	}

  	/*--- Random Number Function---*/
	function randomGenerate(){
		 numberRandom =  Math.floor(Math.random() * (100)) + 1;
	}
	randomGenerate();
	
	/*--- Counter Function---*/
	function countGuess(){
					counter ++;
					$('#count').val(counter).text(counter);

	}
	/*--- User Input Compare Function---*/

	function checkShowGuess(){
					
					console.log (numberRandom);
					numberGuess = +$("input[name=userGuess]").val();
					numberCheck = Math.abs(numberGuess - numberRandom);

					if (flag === 1) {
						$('#feedback').text("Start a New Game!");
						preventSubmit();
					}

					else if (numberGuess < 1 || numberGuess > 100){
						alert("Enter a number between 1 and 100");
						preventSubmit();
					}
										
					else if (numberCheck > 40){
						$('#feedback').text("Your Guess is Freezing Cold!");
						 appendGuess();
						 countGuess();
					}
					
					else if (numberCheck > 25){
						$('#feedback').text("Your Guess is Getting Cold!");
						appendGuess();
						countGuess();
					}
					else if (numberCheck > 15){
						$('#feedback').text("Your Guess is Getting Warm!");
						appendGuess();
						countGuess();
					}
					else if (numberCheck > 5){
						$('#feedback').text("Your Guess is Getting Hot!");
						appendGuess();
						countGuess();
					}
					else if (numberCheck > 0){
						$('#feedback').text("Your Guess is Too Hot!");
						appendGuess();
						countGuess();
					}
					else if (numberGuess === numberRandom){
						$('#feedback').text("Yay! You Guessed it!!");
						appendGuess();
						countGuess();
						flag = 1;
					}
				}

	/*--- Button Actions---*/
	/*--- New Game Button Action---*/
	$('.new').click(function(){
  		newGame();
  	});
 	
 	/*--- Guess Button Action---*/
	$(".button").click(function(){
		event.preventDefault();
		checkShowGuess();
				
	});


});



	
  		
  	

