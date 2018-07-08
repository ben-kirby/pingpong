//business logic
var numbers = [];
var results = []

var outputList = function(){
    var numberInput = parseInt($("#numberInput").val());

    for (var i = 0; i < numberInput; i++) {
      numbers.push(i+1);
    }
    counter();
    $(".list").toggle();
    $("#reset").show();
};

var counter = function(){
  for (var i = 0; i < numbers.length; i++){
    if (numbers[i] % 15 === 0){
      results.push("Pingpong!");
    }
    else if (numbers[i] % 5 === 0) {
      results.push("Pong!");
    }
    else if (numbers[i] % 3 === 0) {
      results.push("Ping!");
    }
    else {
      results.push(i+1);
    }
  }
};

  var reset = function(){
  numbers = [];
  results = [];
  $("#list").empty();
}
//UI Logic-----------------------------------
$(document).ready(function(){
  $(".number").submit(function(){
    outputList();
    for (var i = 0; i < results.length; i++) {
      $("#list").append($("<li>").text(results[i]));
    }
    $("#submit").hide();
    event.preventDefault();
  });

  $("#reset").click(function(){
    reset();
    $(".list").hide();
    $("#reset").hide();
    $("#submit").show();
  });
});
