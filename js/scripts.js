//BUSINESS LOGIC

var flowersArray = [];
var totalFlowers = 0;
function addFlowers(num) {
  for (var i = 0; i < num.length; i++) {
    totalFlowers += num[i];
  };
};



//USER LOGIC
$(document).ready(function(){
  $("#placeOrder").click(function(){
    $("input:checkbox[name=flowers]:checked").each(function(){
      var flowerSelection = parseInt($(this).val());
      flowersArray.push(flowerSelection);
    });

    var sizeSelection = parseInt($("input[name=rbnNumber]:checked").val());
    addFlowers(flowersArray);
    console.log(sizeSelection);

  });
});
