//business logic
var numbers = [];

var makeList = function(){
  for (var i = 0; i < numbers.length; i++) {

    if ((numbers[i] % 3 === 0) && (numbers[i] % 5 ===0)) {
      $("#list").append($("<li>").text("pingpong"));
    }
    else if (numbers[i] % 3 === 0) {
      $("#list").append($("<li>").text("ping"));
    }
    else if (numbers[i] % 5 === 0) {
      $("#list").append($("<li>").text("pong"));
    }
    else {
      $("#list").append($("<li>").text(numbers[i]));
    }
  }
}

var outputList = function(){
    var numberInput = parseInt($("#numberInput").val());

    for (var i = 0; i < numberInput; i++) {
      numbers.push(i+1);
    }
    makeList();
    $(".list").toggle();
    $("#reset").show();
}

var reset = function(){
  $(".list").hide();
  numbers = [];
  $("#list").empty();
  $("#reset").hide();
}
//UI Logic-----------------------------------
$(document).ready(function(){
  $(".number").submit(function(){
    outputList();
    event.preventDefault();
  });

  $("#reset").click(function(){
    reset();
  });
});
