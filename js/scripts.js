//business logic
var numbers = [];
var listNumber;

var makeList = function(){
  for (var i = 0; i < numbers.length; i++) {
    listNumber = numbers[i];

    if ((listNumber % 3 === 0) && (listNumber % 5 ===0)) {
      $("#list").append($("<li>").text("pingpong"));
    }
    else if (listNumber % 3 === 0) {
      $("#list").append($("<li>").text("ping"));
    }
    else if (listNumber % 5 === 0) {
      $("#list").append($("<li>").text("pong"));
    }
    else {
      $("#list").append($("<li>").text(listNumber));
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
}
//UI Logic
$(document).ready(function(){
  $(".number").submit(function(){
    outputList();
    event.preventDefault();
  });
});
