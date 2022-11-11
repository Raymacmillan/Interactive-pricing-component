const scroller = document.querySelector(".scroller");
const views = document.querySelector(".views");
const price = document.querySelector(".price");
const bar = document.querySelector(".bar");
const ball = document.querySelector(".ball");
const slider = document.querySelector(".slider");
const discount = document.querySelector(".discount");
const month = document.querySelector(".month");

currentPrice = "$16.00";

let isDiscount = false;


bar.addEventListener("click",()=>{
    if(ball.classList.contains("toggleBallPosition")){
        bar.classList.remove("background");
        ball.classList.remove("toggleBallPosition");
        discount.textContent = "-25%";
        price.textContent = currentPrice;
        isDiscount = false;
    }else{
        bar.classList.add("background");
        ball.classList.add("toggleBallPosition");
        discount.textContent = "-25% discount";
        isDiscount = true;
    }
    discountPrice(currentPrice);
})

scroller.addEventListener("input",()=>{
    scroller.style.backgroundSize = `${scroller.value}% 100%`;
    
    if(parseFloat(scroller.value)===0) {
        views.textContent = "0 PAGEVIEWS";
        price.textContent = "$00.00";
        month.textContent = "/month";
        currentPrice = price.textContent;
    }
    
    if(parseFloat(scroller.value)===20) {
    views.textContent = "10K PAGEVIEWS";
    price.textContent = "$08.00";
    month.textContent = "/month";
    currentPrice = price.textContent;
  }
  if(parseFloat(scroller.value)===40) {
      views.textContent = "50K PAGEVIEWS";
      price.textContent = "$12.00";
      month.textContent = "/month";
      currentPrice = price.textContent;
    }
    if(parseFloat(scroller.value)===60) {
        views.textContent = "100K PAGEVIEWS";
    price.textContent = "$16.00";
    month.textContent = "/month";
    currentPrice = price.textContent;
}
if(parseFloat(scroller.value)===80) {
    views.textContent = "500K PAGEVIEWS";
    price.textContent = "$24.00";
    month.textContent = "/month";
    currentPrice = price.textContent;
}
if(parseFloat(scroller.value)===100) {
    views.textContent = "1M PAGEVIEWS";
    price.textContent = "$36.00";
    month.textContent = "/month";
    currentPrice = price.textContent;
}
discountPrice(currentPrice);
})

if(scroller.value===60) {
    discountPrice(currentPrice);
}
function discountPrice(thePrice) {
    if(isDiscount===true) {
        const _price = parseInt(thePrice.replace("$",""));
        const priceDiscount = _price - (_price * (25/100));
        price.textContent = `$${String(priceDiscount).length === 1 ? "0": ""}${priceDiscount}.00`; 
        month.textContent = "/year";
    }
    if(isDiscount===false) {
        price.textContent = thePrice
        month.textContent = "/month";
    };

}
