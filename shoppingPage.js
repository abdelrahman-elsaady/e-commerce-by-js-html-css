
var cakesArray =[] ;
var filteredCakesArray = [];
var  ankorArr=[]
var cakes=new XMLHttpRequest();

cakes.open('get','./cakess.json');

cakes.send();
cakes.onreadystatechange=function(){

    if(cakes.readyState==4&&cakes.status==200){
        
         cakesArray =JSON.parse(cakes.response).cakes;
         filteredCakesArray=cakesArray;
       console.log(cakesArray);
       
       filerByPrice ();
      showCakes(cakesArray);
       orders();
       buttonsStyle();
       footer()
      // header()
       
       if(localStorage.getItem('cart')){
           cart = JSON.parse(localStorage.getItem('cart'));
           
        }
        
    }
}

var mainDiv=document.createElement("div");
var sideDiv=document.createElement("div");
sideDiv.innerHTML=` <div  class="container">
    <div style="margin: 0 ;padding: 10px;background-color: #6d4c0f29;position: fixed; top:132px;border-radius: 20px;"  class="sidebar">
        <select style=" width: 150px; height: 50px; " id="select" name="price">
            <option style="font-size: large;font-family: 'Courier New', Courier, monospace;">sort by price</option>
            <option style="font-size: large;font-family: 'Courier New', Courier, monospace;" value="high-to-low">High to Low</option>
            <option style="font-size: large;font-family: 'Courier New', Courier, monospace;" value="low-to-high">Low to High</option>
          </select>
       
        <h3 style="font-weight: 600;
  margin-bottom: 10px;">Price Range</h3>
        <div class="price">
          <input type="range" id="priceRange" />
          <span class="priceValue"></span>
        </div>
      </div>
    </div>
    `
document.body.appendChild(sideDiv)
function showCakes(arr){

    
    document.body.appendChild(mainDiv)
   // var main=document.getElementById("main")


    let divStyle=` text-align: center;
    margin: auto;
    padding: 3px;
    
    width:900px;`;
    
    mainDiv.style=divStyle;
    
    var cartona="";

    arr.forEach(function(cakeImg){
        
        cartona+=  ` <div  style="display: inline-block;width: 200px ;  background-image: radial-gradient(100% 100% at 100% 0, #dee5e7 0, #6d4c0f29 100%) ;
    border-radius: 20px; margin: 5px; padding: 20px;" >
        
                   <a href='./project-cartPage.html'id=${cakeImg.id} onclick='ankorfunction(this.id)'><img style="border-radius: 20px;" class="cackesImg" width="150px" height="150px" src="${cakeImg.image}" alt=""></img></a>
                     <h3 style="flex-wrap: wrap;">${cakeImg.previewDescription}</h3>
                     <p style= "font-size: x-large;"> ${cakeImg.price} le</p>
        
            <div  style="display: flex;justify-content: center ; margin: 10px;" ">
            <button style="height: 30px; width: 30px;font-size: x-large;cursor: pointer; " class="decrement">-</button>
            <input style=" text-align: center;width: 50px" type="text" value="1" class="quantity" >
            <button style="height: 30px; width: 30px; font-size: x-large  ;cursor: pointer; " class="increment">+</button>
        </div>
        <button style=" align-items: center;
        height: 48px;
        width: 150px;  appearance: none; background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);     border: 0;
      border-radius: 6px; box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset; box-sizing: border-box;
      color: #fff;  cursor: pointer;  display: inline-flex;  justify-content: center;  line-height: 1;  list-style: none;  overflow: hidden;  padding-left: 16px;  padding-right: 16px;  position: relative;  text-align: left;  text-decoration: none;  transition: box-shadow .15s,transform .15s;  user-select: none;  -webkit-user-select: none;
      touch-action: manipulation; white-space: nowrap; will-change: box-shadow,transform; font-size: 18px" class="add-to-cart">add to cart </button>


   </div>`



    })
    mainDiv.innerHTML=cartona;

   hoverImg();

}

function hoverImg(){
    var images = document.querySelectorAll(".cackesImg");
    var newSrc = "https://i.ibb.co/FK40rjf/bat.jpg";
    
    images.forEach(function(img) {
    var originalSrc = img.src;
    img.style.transition= "1s";
    img.style.overflow="scroll"
    img.addEventListener("mouseover", function() {
        img.src = newSrc;
        
      //  img.style.height="500px"
        img.style.opacity = "0.5";
        img.style.transform= "scale(2)";
            setTimeout(() => {
            img.style.opacity = "1";
         }, 300);
    });
    
    img.addEventListener("mouseout", function() {
        img.style.transform= "scale(1)";
        img.src = originalSrc;
    });

});

}
var cart=[];

function orders(){
  
    var increes=document.querySelectorAll(".increment")
    var ordersNum=document.querySelectorAll(".quantity")
    var descrese=document.querySelectorAll(".decrement")
    var addToCart=document.querySelectorAll(".add-to-cart")

    for(let i =0; i<increes.length;i++ ){
        increes[i].addEventListener("click",function(){
            ordersNum[i].value=parseInt( ordersNum[i].value)+1;

        })
       
        descrese[i].addEventListener("click",function(){
            if(parseInt( ordersNum[i].value)>1){
            ordersNum[i].value=parseInt( ordersNum[i].value)-1;
            }
        })
        
        addToCart[i].addEventListener("click",function(){
          // addToCart[i].style.backgroundColor="red";
          indexOfTheElement= cart.findIndex((value) => value.id == cakesArray[i].id);
        
          if(cart.length==0){
            cart = [{
                id: cakesArray[i].id,
                price:cakesArray[i].price,
                img:cakesArray[i].image,
                product_name:cakesArray[i].title,
                quantity:parseInt( ordersNum[i].value) ,

                totalPrice:parseInt( ordersNum[i].value) * cakesArray[i].price 
            }];
            }else if(indexOfTheElement<0){
                cart.push({
                    id: cakesArray[i].id,
                    price:cakesArray[i].price,
                    img:cakesArray[i].image,
                    product_name:cakesArray[i].title,
                    quantity:parseInt( ordersNum[i].value) ,
                    totalPrice:parseInt( ordersNum[i].value) * cakesArray[i].price 
                     
            })
            }else{

                cart[indexOfTheElement].quantity+=  parseInt( ordersNum[i].value);
            cart[indexOfTheElement].totalPrice+=parseInt( ordersNum[i].value) * cakesArray[i].price ;

            }
          //  console.log(cart[indexOfTheElement].totalPrice())
            addCartToLocalStorage();
          
        })
        
        
    }
    
}

var addCartToLocalStorage= () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function buttonsStyle(){
   
    var addToCart=document.querySelectorAll(".add-to-cart")

    addToCart.forEach(function(button){
        button.addEventListener("click",function(){ 
             button.innerHTML='done';
             button.style.color = "red";
             setTimeout(() => {
                button.style.color = "white";
             button.innerHTML='add to cart';
             }, 1500);
      })
        button.addEventListener("mouseover",function(){ 
             button.style.boxShadow=" #3c4fe0 0 -3px 0 inset";
             button.style.translate=" -4px"
            })
            button.addEventListener("mouseout", function() {
                button.style.boxShadow=" rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset";
                button.style.translate=" 0px"

    });
      button.addEventListener("mousedown", function() {
        button.style.boxShadow=" #3c4fe0 0 3px 7px inset"
        button.style.translate=" 2px"
    });
      button.addEventListener("mouseup", function() {
        button.style.boxShadow=" #3c4fe0 0 -3px 0 inset";
             button.style.translate=" -4px"
    });
        
    })
    
}


function filerByPrice() {


    selected = document.getElementById("select");
    selected.addEventListener("change", function() {
        if (selected.value === "low-to-high") {
            cakesArray.sort((a, b) => a.price - b.price);
        } else if (selected.value === "high-to-low") {
            cakesArray.sort((a, b) => b.price - a.price);
        }
        showCakes(cakesArray);
        orders()
        buttonsStyle()
});



var priceRange = document.querySelector("#priceRange");
var priceValue = document.querySelector(".priceValue");

priceRange.min =20;
priceRange.max = 620;
priceValue.textContent =  priceRange.min+" le" ;

priceRange.addEventListener("input", (e) => {
    priceValue.textContent =  e.target.value + " le";

     filteredCakesArray =  cakesArray.filter(function(cakes) {

             return cakes.price >= e.target.value
            }
        );
        console.log(cakesArray);
        showCakes(filteredCakesArray);
         orders()
         buttonsStyle()

        });
}

function ankorfunction(eve){
    console.log(eve);
    ankorArr.push(eve)
    localStorage.setItem("id of ankor",eve)
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////





function footer(){

     // Footer Section
const footer = document.createElement('footer');
footer.style.display = 'flex';
footer.style.paddingLeft = '90px';
footer.style.flexDirection = 'column';
footer.style.flexWrap = 'wrap';
footer.style.backgroundColor = '#111111';
footer.style.clear="both";

// // Logo
const footerImg = document.createElement('img');
footerImg.src = './imgs/logo22.webp';
footerImg.style.width = '100px';
footerImg.style.height = '100px';
footerImg.style.marginTop = '5%';
footerImg.style.marginLeft = '10%';
footer.appendChild(footerImg);


const infoBox = document.createElement('div');
infoBox.classList.add('box');
infoBox.style.textAlign = 'center';
infoBox.style.marginTop = '-8%';
infoBox.style.color = '#fff';
infoBox.style.lineHeight = '40px';
infoBox.style.textDecoration = 'none';

// // Address
const addressFooter = document.createElement('h3');
addressFooter.textContent = 'Egypt, New Cairo, Industrial Zoon, plot 642';
infoBox.appendChild(addressFooter);

// // Email
const emailFooter = document.createElement('a');
emailFooter.href = '#';
emailFooter.textContent = 'info@pistachio.com.eg';
emailFooter.style.marginTop = '-8%';
emailFooter.style.color = '#fff';
emailFooter.style.lineHeight = '40px';
emailFooter.style.textDecoration = 'none';
infoBox.appendChild(emailFooter);

// // Phone Numbers
const phone1Footer = document.createElement('h3');
phone1Footer.textContent = '+20 1224488388/1224488288';
infoBox.appendChild(phone1Footer);

// // VAT Number
const vat = document.createElement('h3');
vat.textContent = 'VAT Number: 552-430-137';
infoBox.appendChild(vat);

footer.appendChild(infoBox);

// // End Section
const endSection = document.createElement('div');
endSection.style.textAlign = 'center';
endSection.style.width = '100%';
endSection.style.color = '#fff';
endSection.style.fontSize = '20px';
endSection.classList.add('end');

// // Copyright
const copyright = document.createElement('p');
copyright.textContent = '©2020 by Pistachio. Proudly created with pistachio.com.eg';
endSection.appendChild(copyright);

// // Social Icons
const iconsDiv = document.createElement('div');
iconsDiv.style.marginTop = '20px';
iconsDiv.style.textAlign = 'center';
iconsDiv.classList.add('icons');

// // Social Media Icons
const socialIcons = ['facebook-f', 'twitter', 'instagram', 'youtube'];
socialIcons.forEach(icon => {
    const link = document.createElement('a');
    link.href = '#';
    link.style.marginLeft = '20px';
    link.style.color = '#fff';
    link.style.cursor = 'pointer';
    link.style.fontSize = '20px';
    const iconElement = document.createElement('i');
    iconElement.classList.add('fab', `fa-${icon}`);
    link.appendChild(iconElement);
    iconsDiv.appendChild(link);
});


endSection.appendChild(iconsDiv);
footer.appendChild(endSection);

 document.body.appendChild(footer);


}

function header(){
    // Create an anchor element

    const headerSection=document.createElement("div") 
    headerSection.style.display="flex"
    headerSection.style.justifyContent="space-between"
    headerSection.style.backgroundColor="#000"
    headerSection.style.textAlign="center"
    headerSection.style.paddingTop="25px"

    const logoLink = document.createElement('a');
    logoLink.href = '#';
   
   
    headerSection.appendChild(logoLink);
    
    logoLink.style.paddingLeft = '12%';
   
    const logoImage = document.createElement('img');
    logoImage.src = './imgs/Logo11.webp';
    logoLink.appendChild(logoImage);
   
   
   // Create a form element
   
    const searchForm = document.createElement('form');
    searchForm.style.display = 'flex';
    searchForm.style.flexWrap = 'nowrap';
    // searchForm.style.marginRight="70px"
    headerSection.appendChild(searchForm);
   
   //  Create an input element for search
   
    const searchInput = document.createElement('input');
   searchInput.type = 'text';
   searchInput.id = 'search';
   searchInput.placeholder = 'Search For Desserts & Sweets ...';
   
   searchInput.style.padding = '10px 20px';
   searchInput.style.border = '2px solid rgb(207,174,121)';
   searchInput.style.borderRadius = '4px';
   searchInput.style.backgroundColor = '#fff';
   searchInput.style.fontSize = '16px';
   searchInput.style.width = '300px';
   searchInput.style.height = '26px';
   searchInput.style.borderTopRightRadius = '0';
   searchInput.style.borderBottomRightRadius = '0';
   searchInput.style.fontWeight = 'bold';
   
    searchForm.appendChild(searchInput);
   
   // Create a button element
   
    const searchButton = document.createElement('button');
   
   searchButton.style.padding = '10px 20px';
   searchButton.style.border = '2px solid rgb(207,174,121)';
   searchButton.style.borderRadius = '4px';
   searchButton.style.backgroundColor = 'rgb(207,174,121)';
   searchButton.style.fontSize = '16px';
   searchButton.style.height = '50px';
   searchButton.style.width = '90px';
   searchButton.style.borderTopLeftRadius = '0';
   searchButton.style.borderBottomLeftRadius = '0';
   searchButton.style.cursor = 'pointer';
   searchButton.style.color = '#000';
   
   
    searchForm.appendChild(searchButton);
   
   //  Create an icon element inside the button
   
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fa-solid fa-magnifying-glass';
    searchButton.appendChild(searchIcon);



document.body.appendChild(headerSection)


}
header()
