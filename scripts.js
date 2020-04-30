//First part:
//Developer Console
//Statement
//Numbers
//Numeric operators (+, -, *, /)
//Variables
//Strings
//Booleans and operators (&&, ||)
//Arrays
//Objects
//Examples:
//1+1
//colors
//name
//etc.


//Second part:
console.log('Scrip file is loaded.');


//Third part:
$('h1').html('This is done by <em>JavaScript</em>!');
$ ('p').css('border', '1px solid red');
$('p').css('padding', '10px');
$('h2').toggleClass('blue');


function myFunction() {
    //number of p is smaller then 5
    if ($('p').length < 5) {
        $('main').append('<p>New message</p>');
    } else {
        console.log('We reached the maximum paragraph number');
    }
    $('p').css('border', '1px solid green');
    $('p').css('padding', '10px');
}

myFunction();
myFunction();


$("#add").click(myFunction);
$("#remove").click(function () {
    $('p:last-child').remove();
});


//Fouth part:
//if (condition true/false) {
//    $(true);
//} else {
//    condition is false
//}
let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
  });

//$('#box-container').append('<div class="box"></div>);
//$('.box.last-child').css('background', colors[0]);
//$('#box-container').append('<div class="box"></div>);
//$('.box.last-child').css('background', colors[1]);
//$('#box-container').append('<div class="box"></div>);
//$('.box.last-child').css('background', colors[2]);
//$('#box-container').append('<div class="box"></div>);
//$('.box.last-child').css('background', colors[3]);
//$('#box-container').append('<div class="box"></div>);
//$('.box.last-child').css('background', colors[4]);

for (let index = 0; index < 100; index++) {
    console.log("I'll do my homework every day.");
    
}