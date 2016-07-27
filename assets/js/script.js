$( document ).ready(function() {

var wins = 0;
var loss = 0;
   
crystalgame();
function crystalgame(){
var number = Math.floor((Math.random() * 101)) + 19;
// 1-3
var valuesnumberone = Math.floor((Math.random()*3)) + 1; 
// 4-6
var valuesnumbertwo	= Math.floor((Math.random()*3)) + 4;
// 7-9
var valuesnumberthree	= Math.floor((Math.random()*3)) + 7;
// 10-12
var valuesnumberfour	= Math.floor((Math.random()*3)) + 10;
var values = [valuesnumberone,valuesnumbertwo,valuesnumberthree,valuesnumberfour];
var numberplayer = 0;


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
// REFERENCE: http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript

shuffle(values);


for(i=0; i < values.length; i++){
	var randomizer = Math.floor(Math.random() * values.length);
	var createcrystal = $("<img>");


	createcrystal.attr("src","assets/images/stars.gif").attr("data-value", values[i]).addClass("crystalguess").addClass("img-circle");

	$("#crystals").append(createcrystal);
}


$("#numtoguess").text(number);



$(".crystalguess").on("click", function(){
	numberplayer += parseInt($(this).data("value"));
	$("#userguess").text(numberplayer);

if(numberplayer == number){
	$("#gamestate").html("Good Job!!");
	wins++;
	$("#moon").fadeIn("slow");
	var comet = new Audio("assets/audio/comet.mp3");
	comet.play();
	$("#wins").text(wins);
	$("#numtoguess").empty();
	$("#crystals").empty();
	crystalgame();


}else if(numberplayer > number){
	$("#gamestate").html("Too Bad");
	$("#moon").fadeOut("slow");
	loss++;
	$("#loss").text(loss);
	$("#numtoguess").empty();
	$("#crystals").empty();
	crystalgame();
}




});



}




});

