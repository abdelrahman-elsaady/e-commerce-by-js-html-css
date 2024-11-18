var cartPageArray =[] ;
var cartafterparse=[];
var crt=[]
var ankorArr=[]

var cartIcon
var ankorStorage
var cartcontainer
var uppercartContainer
var lowercartcontainer
var lowerdiv


var amountclass
var wrongicone

var pageDiv
var maindiv
var productImg
var productTitle
var productPrice
var label
var amount
var proTotalPrice
var FirstDivinside
var secondDivinside
var btncart
var inputValue
var defaultvalue
var addtocart
var  quantity=0
var allData
var beforAfter
var after
var befor


var cakes=new XMLHttpRequest();

cakes.open('get','./cakess.json');

cakes.send();
cakes.onreadystatechange=function(){

    if(cakes.readyState==4&&cakes.status==200){
        
        cartPageArray =JSON.parse(cakes.response).cakes;
        
        if(localStorage.getItem('cart')){
            cartafterparse= JSON.parse(localStorage.getItem('cart'));
        }else{
            cartafterparse=[]
        }
    }
    resure()
    addToCart()
    getFromStorage()
    setlingth()
    creatSlider()
    fillArrSlider(cartPageArray);
    displaySlider();
    footer()
}

function resure(){
    ankorStorage= localStorage.getItem("id of ankor")
    show()
}



function show(){
    cartPageArray.forEach(function(loopCakes){
        if(ankorStorage==loopCakes.id ){

            var containerdiv=document.createElement("div")
            containerdiv.style.display='flex'
            containerdiv.style.flexDirection='row'
            document.body.appendChild(containerdiv)

            pageDiv=""
            pageDiv=document.createElement("div")
            pageDiv.style.width=50+"%"
            pageDiv.style.margin= 5+"%"  ,5+"%"
            pageDiv.style.borderColor="burlywood"
            pageDiv.style.borderWidth=1+"px"
            pageDiv.style.borderStyle="solid"
            pageDiv.style.marginBottom=3+"%"
            pageDiv.style.display="flex"
            pageDiv.style.flexDirection="row"
            pageDiv.style.flexDirection="row"
            containerdiv.appendChild(pageDiv)

             FirstDivinside=document.createElement("div")
             FirstDivinside.style.width=50+"%"
             FirstDivinside.style.display="block"
             FirstDivinside.style.marginRight=10+"%"
             FirstDivinside.style.transitionProperty="all"
             FirstDivinside.style.transformDuration=2+"s"
             FirstDivinside.style.transformTimingFunction="ease-in-out"
             pageDiv.appendChild(FirstDivinside)
             
             productImg=document.createElement("img")
             productImg.src=loopCakes.image
             productImg.style.width=100+"%"
             productImg.style.height=400+"px"
             productImg.style.margin=5+"%"
             FirstDivinside.appendChild(productImg)
    
    
             secondDivinside=document.createElement("div")
             secondDivinside.style.width=50+"%"
             secondDivinside.style.display="block"
             pageDiv.appendChild(secondDivinside)
    
    
             productTitle=document.createElement("h2")
             productTitle.innerText=loopCakes.title
             productTitle.style.width=100+"%"
             secondDivinside.appendChild(productTitle)
    
             productPrice=document.createElement("h3")
             productPrice.innerText=loopCakes.price
             productPrice.style.width=100+"%"
             productPrice.style.color="burlywood"
             productPrice.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
             secondDivinside.appendChild(productPrice) 
            
             label=document.createElement("label")
             label.innerHTML="Quantity <br> <br>"
             label.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
             label.style.fontSize=30+"px"
             secondDivinside.appendChild(label)
            
    
             amount=document.createElement("input")
             amount.type="number"
             amount.id=loopCakes.id
             amount.name="input"
             amount.value=1
             amount.min=1
             amount.style.width=20+"%"
             amount.style.height=30+"px" 
             secondDivinside.appendChild( amount)
    
    
             btncart=document.createElement("button")
             btncart.innerHTML="Add to cart"
             btncart.style.border="none"
             btncart.style.backgroundColor="gray"
             btncart.style.webkitTextFillColor="white"
             btncart.style.fontSize=30+"px"
             btncart.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
             btncart.style.borderRadius=5+"px"
             btncart.style.padding="10px 20px"
             btncart.style.width=90+"%"
             btncart.style.height=50+"px"
             btncart.style.marginTop=15+"px"
             btncart.style.marginBottom=8+"%"
             btncart.style.textAlign="center"
             btncart.id="graybutton"
             secondDivinside.appendChild(btncart)
        
        }
    })
} 

function getFromStorage(){
    if(localStorage.cart){
        var cartstorage=localStorage.getItem("cart")
        cartafterparse=JSON.parse(cartstorage)
      }else{
       cartafterparse=[]
      }
}

function setlingth(){
    var arrlingth=0
     arrlingth=cartafterparse.length
     var icone= document.getElementById("icon")

     if(localStorage.cart){
     icone.innerHTML=`<i class='bi bi-bag-fill'>${arrlingth}</i>`}
     
    else{
        icone.innerHTML+=`<i class='bi bi-bag-fill'>${arrlingth}</i>`
    }
}

function addToCart(){

    var input= document.getElementById(ankorStorage);
    if(input.value == 1){
         inputValue=1
         proTotalPrice=cartPageArray[parseInt(ankorStorage-1)].price
       }

   input.addEventListener('input',function(){
   inputValue=parseInt(input.value);
   console.log(inputValue);
   proTotalPrice=cartPageArray[parseInt(ankorStorage-1)].price * inputValue ;
   console.log(proTotalPrice);
   defaultvalue=input.value
 })
   
    addtocart=document.getElementById("graybutton")
    
    getFromStorage()
    
    addtocart.addEventListener('click',function(){
        
        
        indexOfTheElement= cartafterparse.findIndex((value) => value.product_id == ankorStorage);
          
         if(cartafterparse.length==0){
          cartafterparse = [{
              product_id: ankorStorage,
              product_name:cartPageArray[parseInt(ankorStorage-1)].title,
              price:cartPageArray[parseInt(ankorStorage-1)].price,
              img:cartPageArray[parseInt(ankorStorage-1)].image,
              quantity:inputValue ,
              totalPrice:proTotalPrice    
             }]
  
             console.log(cartafterparse)
        }
         else if(indexOfTheElement<0){
             cartafterparse.push({
              product_id: ankorStorage,
              product_name:cartPageArray[parseInt(ankorStorage-1)].title,
              price:cartPageArray[parseInt(ankorStorage-1)].price,
              img:cartPageArray[parseInt(ankorStorage-1)].image,
              quantity:inputValue ,
              totalPrice:proTotalPrice
              
            })
            console.log(cartafterparse)
        }
  
         else{
          cartafterparse[indexOfTheElement].quantity=inputValue
          cartafterparse[indexOfTheElement].totalPrice=proTotalPrice
         console.log(cartafterparse)
        }
         
         
         localStorage.setItem("cart",JSON.stringify(cartafterparse))
         setlingth()
     })
         
}



// show elements in cart Div
var wrongIconeID=21
function loopcartdiv(){

    var secondcartcontainer=document.getElementById("secondcartcontainer")
    secondcartcontainer.innerHTML=""
    if(localStorage.cart){
        var cartstorage=localStorage.getItem("cart")
        cartafterparse=JSON.parse(cartstorage)

        // cartafterparse.forEach(function(loopstorage)
        // {
        for(let i=0; i<cartafterparse.length; i++){
        var cartDiv=document.createElement("div")
        cartDiv.style.width=60+"%"
        // cartDiv.style.height=250+"px"
        cartDiv.style.margin="auto"
        cartDiv.style.marginBottom=3+"%"
        cartDiv.style.borderBottom= `black solid 1px`
        secondcartcontainer.appendChild(cartDiv)

        var cartmaindiv=document.createElement("div")
        cartmaindiv.style.display="flex"
        cartmaindiv.style.flexDirection="row"
        cartmaindiv.style.witdh=40+"%"

        var wrongicone=document.createElement("i")
        wrongicone.id=wrongIconeID
        wrongicone.innerHTML='<i class="bi bi-x-circle"></i>'
        wrongicone.addEventListener("click",function(){
            // console.log(this.id);
            removeCartItem(i)
        })
        cartDiv.addEventListener("mouseover",function(){

            var wrongstyle=wrongicone.classList
              wrongstyle.add("visible")
           }) 
           cartDiv.addEventListener("mouseout",function(){
            var wrongstyle=wrongicone.classList
            wrongstyle.add("cartclass")
            wrongstyle.remove('visible')
        })  
        cartmaindiv.appendChild(wrongicone)

        cartDiv.appendChild(cartmaindiv)

        var cartFirstDivinside=document.createElement("div")
         cartFirstDivinside.style.width=50+"%"
         cartFirstDivinside.style.display="block"
         cartFirstDivinside.style.marginRight=5+"%"
         cartFirstDivinside.style.transitionProperty="all"
         cartFirstDivinside.style.transformDuration=2+"s"
         cartFirstDivinside.style.transitionTimingFunction="ease-in-out"
         cartmaindiv.appendChild(cartFirstDivinside)


         var cartproductImg=document.createElement("img")
         cartproductImg.src=cartafterparse[i].img
         cartproductImg.style.width=100+"%"
         cartproductImg.style.height=200+"px"
         cartproductImg.style.margin=5+"%"
         cartFirstDivinside.appendChild(cartproductImg)

         var cartsecondDivinside=document.createElement("div")
         cartsecondDivinside.style.width=50+"%"
         cartsecondDivinside.style.display="block"
         cartmaindiv.appendChild(cartsecondDivinside)

         var cartproductTitle=document.createElement("h4")
         cartproductTitle.innerText=cartafterparse[i].product_name
         cartproductTitle.style.width=100+"%"
         cartproductTitle.style.fontFamily="italic"
         cartsecondDivinside.appendChild(cartproductTitle)

         var cartproductPrice=document.createElement("h4")
         cartproductPrice.innerText= cartafterparse[i].price 
         cartproductPrice.style.width=100+"%"
         cartproductPrice.style.color="black"
         cartproductPrice.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
         cartproductPrice.style.marginTop=5+"%"
         cartsecondDivinside.appendChild(cartproductPrice)

        var cartproductTotalPrice=document.createElement("h4")
        cartproductTotalPrice.innerText=`product total price : ${cartafterparse[i].totalPrice}` 
        cartproductTotalPrice.style.width=100+"%"
        cartproductTotalPrice.style.color="black"
        cartproductTotalPrice.style.fontFamily="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
        cartproductTotalPrice.style.marginTop=5+"%"
        cartsecondDivinside.appendChild(cartproductTotalPrice)


         var inputbutton=document.createElement("div")
         inputbutton.style.width=100+"%"
         inputbutton.style.display="flex"
         cartsecondDivinside.appendChild(inputbutton)


         var cartamount=document.createElement("input")
         cartamount.id=cartafterparse[i].product_name
         cartamount.type="text"
         cartamount.value=cartafterparse[i].quantity
         cartamount.style.width=35+"%"
         cartamount.style.height=50+"px" 
         cartamount.style.border="none"
         inputbutton.appendChild( cartamount)
        
          let incrimentbutton=document.createElement("button")
          incrimentbutton.innerHTML='+'
          incrimentbutton.style.border="none"
          incrimentbutton.style.width=`${20}%`
          incrimentbutton.style.height=50+"px"
          incrimentbutton.addEventListener('click',function()
          {
             var increasetextinput=document.getElementById(loopstorage.product_name)
             increasetextinput.value=parseInt( increasetextinput.value)+1;
             loopstorage.quantity =  parseInt( increasetextinput.value);
             loopstorage.totalPrice=parseInt( increasetextinput.value) * cartafterparse[i].price ;
             cartproductTotalPrice.innerText=`product total price : ${cartafterparse[i].totalPrice}`
             localStorage.setItem("cart",JSON.stringify(cartafterparse))   
             settotal()
         })


            inputbutton.appendChild(incrimentbutton)
            
            var decrimentbutton=document.createElement("button")
            decrimentbutton.innerHTML='-'
            decrimentbutton.style.border="none"
            decrimentbutton.style.width=`${20}%`
            decrimentbutton.style.height=50+"px"
            decrimentbutton.addEventListener('click',function(){
                      
            var textinput=document.getElementById(loopstorage.product_name)
            if(parseInt( textinput.value)>1){
                textinput.value=parseInt( textinput.value)-1
            }
             loopstorage.quantity =  parseInt( textinput.value);
             loopstorage.totalPrice=parseInt( textinput.value) * cartafterparse[i].price ;
             cartproductTotalPrice.innerText=`product total price : ${cartafterparse[i].totalPrice}`
             localStorage.setItem("cart",JSON.stringify(cartafterparse))

             settotal()
            })

            inputbutton.appendChild(decrimentbutton)
            wrongIconeID++
        // })
    }
        if(cartafterparse.length==0){
             secondcartcontainer.innerHTML="<h2 style=`width:50% ; margin:auto`> your cart is empty</h2> "
        }

        settotal()
         
    }
}



function settotal(){
    
    var total=0
    var thirdcartcontainercaller= document.getElementById("thirdcartcontainer")
    thirdcartcontainercaller.innerHTML=""
    var h2total=document.createElement("h2")
    h2total.innerHTML=""
    thirdcartcontainercaller.appendChild(h2total)

    cartafterparse.forEach(function(looptotalprice){
      total+=looptotalprice.totalPrice  
      

      

       h2total.innerText=`ToTAL PRICE: ${total} EGP`
    })
    if(cartafterparse.length==0){
        total=0
        h2total.innerText+=`TOTAL PRICE = EGP ${ total}` 
       }
}

function removeCartItem(idx){
    console.log(idx);
    cartafterparse.splice(parseInt(idx) ,1)
    localStorage.setItem("cart",JSON.stringify(cartafterparse))
    loopcartdiv()
}



//  the slider creation 


function creatSlider(){
    let sliderContener=document.createElement('div');
sliderContener.id="sliderContener"
sliderContener.style=  `   display:flex; justify-content:space-around; `;
document.body.append(sliderContener);

let prev=document.createElement('button');
prev.id="prev";
prev.innerHTML=`<i class="fa-solid fa-chevron-left"></i>`;
prev.style=`border:none; background-color: transparent; font-size: 20px;cursor: pointer;`;

prev.addEventListener('click',prev_)
sliderContener.append(prev);

let slider=document.createElement('div');
slider.id="slider";
slider.style=`   display:flex; justify-content:space-around; `;
sliderContener.append(slider);


let next=document.createElement('button');
next.id="next";
next.innerHTML=`<i class="fa-solid fa-chevron-right"></i>`;
next.style=`border:none; background-color: transparent; font-size: 20px;cursor: pointer;`;
next.addEventListener('click',next_)
sliderContener.append(next);

}
let arrslider=[];
function fillArrSlider(arr){
    for(let i=0;i<4;i++){
        arrslider.push(arr[i]);
    }
}

// show items in slider

function displaySlider(){
    slider.innerText=''
   for(let i=0;i<arrslider.length;i++){
    let div=document.createElement('a');
    div.id=arrslider[i].id
    div.href="./project-cartPage.html"
    div.addEventListener('click',function(){
        localStorage.setItem("id of ankor",div.id)

    })
    div.style=` margin:10px; height: 320px  `;
    slider.append(div);
    let img=document.createElement('img')
    img.src=arrslider[i].image;
    img.style=`width: 200px; height: 200px;`
    div.append(img);
    let price=document.createElement('p');
    price.style.color="black"
    price.style.textDecoration="none"
    price.innerHTML=arrslider[i].price;
    div.append(price);

    let title=document.createElement('p');
    title.style.color="black"
    title.style.textDecorationLine="none"
    title.innerHTML=arrslider[i].title;
    div.append(title);

   }

}

// show after
let index=4;
function next_(){

    arrslider.shift()
    arrslider.push(cartPageArray[index]);
    displaySlider()
    if (index<19) {
      index++  
    }else{
    index=0;
    }
    
}


// show befor
function prev_(){
    arrslider.pop()
    arrslider.unshift(cartPageArray[index]);
    displaySlider()
    if (index>0) {
      index--  
    }else{
    index=19;
}
}
function goToCheckOut(){
    location.href="./check_out.html"
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
   searchInput.style.height = '60%';
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
   
   //  Create a button for shopping
   
    const shopButton = document.createElement('button');
    shopButton.id = 'Shop';
    shopButton.textContent = 'Shop now';
    shopButton.addEventListener("click" , function(){
        location.href="./shoppingPage.html"
    })

   
   shopButton.style.padding = '10px 20px';
   shopButton.style.border = '1px solid rgb(207,174,121)';
   shopButton.style.borderRadius = '4px';
   shopButton.style.backgroundColor = 'rgb(207,174,121)';
   shopButton.style.fontSize = '16px';
   shopButton.style.height = '50px';
   shopButton.style.width = '150px';
   shopButton.style.cursor = 'pointer';
   shopButton.style.color = '#fff';
   shopButton.style.marginRight = '10%';
   shopButton.style.fontWeight = 'bold';
   
   headerSection.appendChild(shopButton);

   cartcontainer=document.createElement("div")
   cartcontainer.id="container"
   cartcontainer=document.createElement("div")
   cartcontainer.id="container"
   cartcontainer.style.width=40+"%"
   cartcontainer.style.height=100+"vh"
   cartcontainer.style.borderColor="black"
   cartcontainer.style.borderWidth=1+"px"
   cartcontainer.style.borderStyle="solid"
   cartcontainer.style.zIndex= 9999+"px"
   cartcontainer.style.backgroundColor="white"
   cartcontainer.style.position="fixed"
   cartcontainer.style.top=0+"px"
   cartcontainer.style.right=0+"px"
   cartcontainer.style.bottom=0+"px"
   cartcontainer.style.display="grid"       
   cartcontainer.style.gridTemplateColumns=`repeat (${2},${0.5}fr) `
   cartcontainer.style.gridAutoRows=`minmax(auto, ${1}fr)`
   cartcontainer.style.transitionTimingFunction = " ease-in-out"; 
   cartcontainer.style.boxShadow=`2 px 2 px 2 px gray`
   cartcontainer.style.backgroundColor="rgb(250, 233, 210)"
   cartcontainer.style.transitionDuration=1+"s"
 //   cartcontainer.style.inset=`${0} ${0} ${0} auto`
   cartcontainer.style.overflow="auto"

   uppercartContainer=document.createElement("div") 
   uppercartContainer.style.width=100+"%"
   uppercartContainer.style.backgroundColor="burlywood"
   uppercartContainer.style.height=100+"px"
   uppercartContainer.style.display="flex"
   uppercartContainer.style.justifyContent="center"
   uppercartContainer.style.padding=10+"px"
   uppercartContainer.style.flexDirection="row"
   uppercartContainer.innerHTML="<h2>CART</h2>"


   var closeicone=document.createElement("i")
   closeicone.innerHTML=`<i class="bi bi-chevron-right"></i>`
   closeicone.style.marginLeft=30+"%"
   closeicone.style.fontSize=30+"px"
   closeicone.addEventListener("click",function(){
     var cartgetdiv=document.getElementById("container").classList
     cartgetdiv.add("cartclass");
      
    })
    closeicone.id="closeIcone"

    var secondcartcontainer=document.createElement("div")
    secondcartcontainer.id="secondcartcontainer"
    secondcartcontainer.style.borderTop=`blue solid ${2}px `


    var thirdcartcontainer=document.createElement("div")
 thirdcartcontainer.id="thirdcartcontainer"
 thirdcartcontainer.style.fontSize="60%"
 thirdcartcontainer.style.textAlign='center'
 thirdcartcontainer.style.backgroundColor="white"
 thirdcartcontainer.style.position="sticky"
 thirdcartcontainer.style.bottom=`15%`
 

 lowercartcontainer=document.createElement("div")
   lowercartcontainer.id="lowercartcontainer"
   lowercartcontainer.style.position="sticky"
   lowercartcontainer.style.bottom=`0%`
   lowercartcontainer.style.width='100%'
   lowercartcontainer.style.backgroundColor="white"
   lowercartcontainer.style.height="100px"
   lowercartcontainer.style.fontSize="60%"
  lowercartcontainer.innerHTML='<button onclick="goToCheckOut()" style="background-color:burlywood; color:white; margin:2% 35% 0%; border-radius:5%; border:none"><h2>CHECKOUT</h2></button>'
  
  cartIcon=document.createElement("i")
  cartIcon.id="icon"
  
  cartIcon.innerHTML=``
  cartIcon.style.webkitTextFillColor="burlywood"
  cartIcon.style.fontSize=30+"px"
  cartIcon.style.backgroundColor="black"
  cartIcon.addEventListener("click",function(){
   document.body.appendChild(cartcontainer)
   cartcontainer.appendChild (uppercartContainer)
   uppercartContainer.appendChild(closeicone)
   cartcontainer.appendChild (secondcartcontainer)
   cartcontainer.appendChild (thirdcartcontainer)
   cartcontainer.appendChild (lowercartcontainer)
  loopcartdiv()
  
  })
  cartIcon.style.marginRight=10+"%"
  headerSection.appendChild(cartIcon)
   
   document.body.appendChild(headerSection)
   
   
}
header()

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

    