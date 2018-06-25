var numbers = [];
//----------------------------
$(document).ready(function(){

  $(".number").submit(function(){
    var i;
    var input = $("#numberInput").val();
    input = parseInt(input);

    for (input; input > 0; input--) {
      numbers.push(input);
    }
    event.preventDefault();
  });
});
