var products =document.querySelectorAll(".product");
var content = document.querySelector(".prices");
var result = document.querySelector(".result");
var sum=0;
products.forEach((item)=>{
    item.addEventListener("click", showContent)
    function showContent(){
        var price = parseInt(item.getAttribute("price")) ;
        content.innerHTML += price + " ";
        sum +=price;
        result.innerHTML ="the total price is: " + sum;
    }
})
