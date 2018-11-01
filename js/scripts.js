//BUSINESS LOGIC

function Order(flowers, size, total){
  this.flowers = flowers;
  this.size = size;
  this.total = total;
};

Order.prototype.price = function(){
  var total = 0;
  if(this.flowers.length > 1){
    total += this.flowers.length;
  }

  if (this.size === "1") {
    total *2;
  } else if (this.size === "2") {
    total *3;
  } else if (this.size === "3"){
    total *4;
  }
  return total;
}



//USER LOGIC
$(document).ready(function(){
  $("#placeOrder").click(function(){
    var inputtedFlowers = [];
    $("input:checkbox[name=flowers]:checked").each(function(){
      var flowerSelection = $(this).val();
      inputtedFlowers.push(flowerSelection);
    });

    var inputtedSize = parseInt($("input[name=rbnNumber]:checked").val());

    var newOrder = new Order(inputtedFlower, inputtedSize);
    addFlowers(flowers);
    console.log(totalFlowers * sizeSelection);

  });
});
