




for (var i= 0 ; i < allObjects[indexCheck].buttonCheck.length ; i++){
	if ($(allObjects[indexCheck].buttonCheck[i]).hasClass('clickbutton')){
		chosenAnswer= i;
	  }
        }
   if (chosenAnswer === false){
	alert ("Choose an Option");
	return;
     }