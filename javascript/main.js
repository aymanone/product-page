let currentProductImg=0;
let currentLightBoxImg=0;
let itemCount=0;
let itemsInCart=0;
function toggleMenu(e,show){
    e.stopPropagation();
    const menu=document.querySelector("#menu");
    menu.style.display=show?"grid":"none";

}
function showLightBox(e){
  e.stopPropagation();
  document.querySelector("#lightBox").style.display="grid";
}
function hideLightBox(e){
  e.stopPropagation();
  document.querySelector("#lightBox").style.display="none";
}
function changeLightBoxImg(e,n){
  e.stopPropagation();
  const lightBox=document.querySelector("#lightBox");
  const imgs=lightBox.querySelectorAll("#imgs img");
  const thumbs=lightBox.querySelectorAll("#thumbs img");
  if((n < 0) || (n >= imgs.length)){return false;}
  imgs.forEach((img)=>img.style.display='none')
  imgs[n].style.display='initial';
  thumbs.forEach(thumb=>{
    thumb.style.border='none';
    thumb.style.opacity=1;
   }
    )
  thumbs[n].style.border='1px solid orange';
  thumbs[n].style.opacity=0.2;
  currentLightBoxImg=n;
}
function nextLightBoxImg(e){
  changeLightBoxImg(e,currentLightBoxImg+1);
}
function prevLightBoxImg(e){changeLightBoxImg(e,currentLightBoxImg-1);}
function changeProductImg(e,n){
  e.stopPropagation();
  const productImgs=document.querySelector("#product");
  const imgs=productImgs.querySelectorAll("#imgs img");
  const thumbs=productImgs.querySelectorAll("#thumbs img");
  if((n < 0) || (n >= imgs.length)){return false;}
  imgs.forEach((img)=>img.style.display='none')
  imgs[n].style.display='initial';
  thumbs.forEach(thumb=>{
     thumb.style.border='none';
     thumb.style.opacity=1;
    }
     )
  thumbs[n].style.border='1px solid orange';
  thumbs[n].style.opacity=0.2;
  currentProductImg=n;
}
function nextProductImg(e){
  changeProductImg(e,currentProductImg+1);
}
function prevProductImg(e){changeProductImg(e,currentProductImg-1);}
const incItemCount=(e)=>{
  e.stopPropagation();
  itemCount+=1;
  document.querySelector("#controlAmount #amount")
  .innerHTML=itemCount;
  return false;
}
const decItemCount=(e)=>{
  e.stopPropagation();
  if(itemCount>0){
    itemCount-=1;
    document.querySelector("#controlAmount #amount")
    .innerHTML=itemCount;
  }
  return false;
}
const addToCart=(e)=>{
  e.stopPropagation();
  if(itemCount>=0){
  itemsInCart=itemCount;
  const cartCounter=document.querySelector("#cartCounter");
  cartCounter.innerHTML=itemsInCart;
   cartCounter.style.display=itemCount==0?"none":"grid";
  }
  return false;

}
const toggleCartInfo=(e)=>{
  e.stopPropagation();
  const cartInfo=document.querySelector("#cartInfo");
  const emptyCart=cartInfo.querySelector("#emptyCart");
  const filledCart=cartInfo.querySelector("#filledCart");
  if(cartInfo.style.display != "none"){
    cartInfo.style.display="none";
    emptyCart.style.display="none";
    filledCart.style.display="none";
    
    return false;
  }
  if(itemsInCart == 0){
     emptyCart.style.display="grid";
     cartInfo.style.display="grid";
     return false;
  }
  completeFilledCart(filledCart);
  filledCart.style.display="grid";
  cartInfo.style.display="grid";
  return false;
}
const completeFilledCart=(filledCart)=>{
filledCart.querySelector("#info #item #text")
.innerHTML=`Fall limited edition sneakers<br>
            $125.00 x ${itemsInCart} &dollar;${(itemsInCart*125.00).toFixed(2)}`;
}