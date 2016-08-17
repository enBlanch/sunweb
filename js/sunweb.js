$(document).ready(function(){
	var clicks = 0;

// buton click efect and text change
// this efect wil bi aplyes to all buttons in the web 
// we colud specify if we use an id instead of a class
// but in this case the resoult is the same becouse there is only a button

	$(".button").click(function() {
		$( this ).fadeOut('fast');
		if (clicks == 0){
			$( this ).text("Click Again");
			clicks = 1;
		}
		else if (clicks == 1){
			$( this ).text("well done");
			clicks = 2;
		}
		else{
			$( this ).text("Start again");
			clicks = 0;
		}
		$( this ).fadeIn('fast');

	});
})