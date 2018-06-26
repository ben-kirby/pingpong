var numbers = [];
var test;
var makeList = function(){
  for (var i = 0; i < numbers.length; i++) {
    test = numbers[i];

    if ((test % 3 === 0) && (test % 5 ===0)) {
      $("#list").append($("<li>").text("pingpong"));
    }
    else if (test % 3 === 0) {
      $("#list").append($("<li>").text("ping"));
    }
    else if (test % 5 === 0) {
      $("#list").append($("<li>").text("pong"));
    }
    else {
      $("#list").append($("<li>").text(test));
    }
  }
}
//----------------------------
$(document).ready(function(){

  $(".number").submit(function(){
    var i;
    var input = parseInt($("#numberInput").val());

    for (var i = 0; i < input; i++) {
      numbers.push(i+1);
    }
    makeList();
    event.preventDefault();
  });
});
