function check() {

	var question1= document.quiz.question1.value;
	var question2= document.quiz.question2.value; 
	var question3= document.quiz.question3.value; 
	var question4= document.quiz.question4.value; 
	var question5= document.quiz.question5.value; 
	var correct= 0;

		if (question1 == "Age 19"){
			correct++;

	}
	    if (question2 == "201"){
	    	correct++;

	} 
	    if (question3 == "1") {
	    	correct++;

	}
	    if (question4 == "Jelly Bean"){
	    	correct++;

	}
	    if (question5 == "18 years"){
	    	correct++;

	}



  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML= "You got out of 5 " + correct + " correct.";
}

var sec = 40;
var myTimer = document.getElementById('myTimer');
var myBtn = document.getElementById('myBtn');
window.onload = countDown;

function countDown() {
  if (sec < 10) {
    myTimer.innerHTML = "0" + sec;
  } else {
    myTimer.innerHTML = sec;
  }
  if (sec <= 0) {
    $("#myBtn").removeClass().addClass("btnEnable");
    myBtn.innerHTML = "Time is up!";
    return;
  }
  sec -= 1;
  window.setTimeout(countDown, 1000);
} 
	  
 