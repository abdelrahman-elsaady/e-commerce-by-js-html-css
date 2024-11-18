
let allProudct=JSON.parse(localStorage.getItem("cart"));
let allUsers=JSON.parse(localStorage.getItem("allUsers"));
let userLog='';



function isLoged(){
if(location.search!=''){
   userLog=allUsers.find(user=>user.email==location.search.split('=')[1].replace('%40','@'));
    for (let user of allUsers) {
        if(user.email==userLog.email){
            if (user.isLogIn==true) {
                return true;
            }else{
                return false; 
            }
        } 
    }
}}
function logOut(){
    for (let i in allUsers) {
      if(allUsers[i].email==userLog.email){
         allUsers[i].isLogIn=false;
         localStorage.setItem("allUsers",JSON.stringify(allUsers));
         location.reload()
      }
     }
 }
let header=document.createElement('header');
header.style=` height: 100px;border-bottom: 1px solid gray; `;
let linkLogo=document.createElement('a');
linkLogo.setAttribute('href','./index.html');
linkLogo.style=`float:left; margin-left: 128px;`;
let logo=document.createElement('img');
logo.setAttribute('src','./logo.webp');
linkLogo.append(logo);
header.append(linkLogo);

let textCheckOut=document.createElement('h1');
textCheckOut.innerText='Check Out';
textCheckOut.style=`float:left; margin-left: 15px;`;
header.append(textCheckOut);

let linkHome=document.createElement('a');
linkHome.innerText='Continue Browsing';
linkHome.setAttribute('href','./index.html');
linkHome.style=`float:right; color:black; padding-top:25px; padding-right: 82px; font-size: 20px;`;
header.append(linkHome);

document.body.append(header);
let main=document.createElement('main');

main.style=`display:flex; justify-content: start; align-items:flex-start;`;

//creat checkout form
let checkOutSec=document.createElement('section');
checkOutSec.style=` width:47%;  margin-top: 30px; padding:0 70px `;

let paraAccount=document.createElement('p');


if (isLoged()==true) {
  paraAccount.innerHTML=`Logged in as ${userLog.email} 
    <a href='#' style='float:right' onclick='logOut()'>Log out</a>`; 
}else{  
  paraAccount.innerHTML='Have an account?<a href="./login.html" style= "color:black;">Log in</a>';
}




paraAccount.style=` background-color: rgb(201, 201, 201); padding:20px;`;
checkOutSec.append(paraAccount);

let form=document.createElement('form');
form.setAttribute('action','./home.html');
form.setAttribute('method','get');

//creat title form
let customerDetails=document.createElement('h2');
customerDetails.innerText='Customer details';
customerDetails.style=`font-size: 30px;`;
form.append(customerDetails);

//creat email

if(isLoged()==false){
    let labelEmail=document.createElement('label');
    labelEmail.innerText='Email *';
    labelEmail.setAttribute('for','email');
    labelEmail.style=`display:block;`;
    form.append(labelEmail);

    let email=document.createElement('input');
    email.setAttribute('type','email');
    email.setAttribute('id','email');
    email.setAttribute('name','Email');
    email.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
    form.append(email);
    
    //creat para email
    var paraEmail=document.createElement('p');
     paraEmail.style=` display:none`;
     form.append(paraEmail);
}




//creat frist name
let labelFrName=document.createElement('label');
labelFrName.innerText='First Name *';
labelFrName.setAttribute('for','firstName');
labelFrName.style=`display:block;`;
form.append(labelFrName);

let fristName=document.createElement('input');
fristName.setAttribute('type','text');
fristName.setAttribute('id','firstName');
fristName.setAttribute('name','firstName');
// fristName.value='medo'
fristName.required=true;
fristName.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(fristName);

//creat parafristname
let paraFristName=document.createElement('p');
paraFristName.style=` display:none`;
form.append(paraFristName);

//creat last name
let labelLsName=document.createElement('label');
labelLsName.innerText='Last Name *';
labelLsName.setAttribute('for','lastName');
labelLsName.style=`display:block;`;
form.append(labelLsName);

let lastName=document.createElement('input');
lastName.setAttribute('type','text');
lastName.setAttribute('id','lastName');
 lastName.setAttribute('name','lastName');
lastName.required=true;
lastName.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(lastName);

//creat paralastname

let paraLastName=document.createElement('p');
paraLastName.style=` display:none`;
form.append(paraLastName);

//creat phone

let labelPhone=document.createElement('label');
labelPhone.innerText='Phone *';
labelPhone.setAttribute('for','phone');
labelPhone.style=`display:block;`;
form.append(labelPhone);

let phone=document.createElement('input');
phone.setAttribute('type','number');
phone.setAttribute('id','phone');
 phone.setAttribute('name','phone');
phone.required=true;
phone.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(phone);

//creat paraphone

let paraPhone=document.createElement('p');
paraPhone.style=` display:none`;
form.append(paraPhone);


//creat Delivery details
let deliveryDetails=document.createElement('h2');
deliveryDetails.innerText='Delivery details';
deliveryDetails.style=`font-size: 30px;`;
form.append(deliveryDetails);

//creat country
let labelCountry=document.createElement('label');
labelCountry.innerText='Country/Region *';
labelCountry.setAttribute('for','country');
labelCountry.style=`display:block;`;
form.append(labelCountry);

let country=document.createElement('select');
country.setAttribute('id','country');
 country.setAttribute('name','country');
country.innerHTML=`<option value="Egypt">Egypt</option>`;
country.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(country);

//creat address

let labelAddress=document.createElement('label');
labelAddress.innerText='Address *';
labelAddress.setAttribute('for','address');
labelAddress.style=`display:block;`;
form.append(labelAddress);

let address=document.createElement('input');
address.setAttribute('type','text');
address.setAttribute('id','address');
 address.setAttribute('name','address');
address.required=true;
address.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(address);

//creat paraddress

let paraAddress=document.createElement('p');
paraAddress.style=` display:none`;
form.append(paraAddress);

//creat city
let labelCity=document.createElement('label');
labelCity.innerText='City *';
labelCity.setAttribute('for','city');
labelCity.style=`display:block;`;
form.append(labelCity);

let city=document.createElement('input');
city.setAttribute('type','text');
city.setAttribute('id','city');
 city.setAttribute('name','city');
city.required=true;
city.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(city);

//creat paracity

let paraCity=document.createElement('p');
paraCity.style=` display:none`;
form.append(paraCity);

//creat Region

let labelRegion=document.createElement('label');
labelRegion.innerText='Region *';
labelRegion.setAttribute('for','region');
labelRegion.style=`display:block;`;
form.append(labelRegion);

let region=document.createElement('select');
region.setAttribute('id','region');
 region.setAttribute('name','region');
region.innerHTML=`<option value="Dakahlia">Qena</option>
<option value="Alexandria">Alexandria</option>
<option value="Aswan">Aswan</option>
<option value="Asyut">Asyut</option>
<option value="Beheira">Beheira</option>
<option value="Beni Suef">Beni Suef</option>
<option value="Cairo">Cairo</option>
<option value="Damietta">Damietta</option>`;
region.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(region);

//creat postal code
let labelPostalCode=document.createElement('label');
labelPostalCode.innerText='Zip/Postal Code *';
labelPostalCode.setAttribute('for','postalCode');
labelPostalCode.style=`display:block;`;
form.append(labelPostalCode);

let postalCode=document.createElement('input');
postalCode.setAttribute('type','number');
postalCode.setAttribute('id','postalCode');
 postalCode.setAttribute('name','postalCode');
postalCode.required=true;
postalCode.style=`width:100%; display:block; height:35px; margin-top: 20px; margin-bottom: 20px;`;
form.append(postalCode);

//creat para postal code

let paraPostalCode=document.createElement('p');
paraPostalCode.style=` display:none`;
form.append(paraPostalCode);

//creat submite button

let submite=document.createElement('input');
submite.setAttribute('type','submit');
submite.setAttribute('value','Continue');
submite.style=`width:100%; display:block; height:45px; margin-top: 20px; margin-bottom: 20px;
color:white;font-size: 20px;font-weight: lighter; background-color:black; cursor: pointer;`;
form.append(submite);

if(isLoged()==true){
    
    fristName.value=userLog.fristName;
    lastName.value=userLog.lastName;
    phone.value=userLog.phone;
}

//Delivery method
let deliveryMethod=document.createElement('h2');
deliveryMethod.innerText='Delivery method';
deliveryMethod.style=`font-size: 30px; color:gray; border-bottom: 1px solid gray; padding:20px;
font-size: 30px;font-weight: lighter; `;
form.append(deliveryMethod);

//creat Payment

let payment=document.createElement('h2');
payment.innerText='Payment';
payment.style=`font-size: 30px; color:gray; padding:20px;
font-size: 30px;font-weight: lighter;`;
form.append(payment);
checkOutSec.append(form);
main.append(checkOutSec);

//creat product detels 
let detels=document.createElement('aside');
detels.style=`width: 40%;  background-color: rgb(201, 201, 201);  margin-top: 35px; 
position: sticky; top: 10px; `;

//creat Order summary 
let orderSummary=document.createElement('p');
orderSummary.innerText=`Order summary (${allProudct.length})`;
orderSummary.style=`font-size: 20px;  padding:2px 0 20px 20px; border-bottom: 1px solid gray; `;
detels.append(orderSummary);

// creat prodcut cart
let prodcutCart=document.createElement('div');
prodcutCart.style=` border-bottom: 1px solid gray; `;
let cartona='';
let totalPrice=0;
for (let index in allProudct) {
    cartona+=`<div style='margin: 0 0 20px 20px;  padding-bottom:10px '>
    <img src="${allProudct[index].img}" style='width:100px; height:100px; float: left;'>
    <div style='float: left;' ><span style='margin-left: 20px; '>${allProudct[index].product_name}</span>
    <span style='margin-left: 120px; '>Praice: EGP${allProudct[index].totalPrice}</span>
    <p style='margin-left: 35px; '>Quantity:${allProudct[index].quantity}</p>
    </div>
    <p style='clear: both;'></p>
    </div>`;
    totalPrice+=allProudct[index].totalPrice;
}
prodcutCart.innerHTML=cartona;
detels.append(prodcutCart);

let items=document.createElement('p');
items.innerHTML=`items:<span style='float: right;'>EGP${totalPrice}</span>`;
items.style=`font-size: 20px;  padding:10px 20px; `;
detels.append(items);

let Delivery=document.createElement('p');
Delivery.innerHTML=`Delivery:<span style='float: right;'> -- </span>`;
Delivery.style=`font-size: 20px;  padding:0 20px 10px ; `;
detels.append(Delivery);

let VAT=document.createElement('p');
VAT.innerHTML=`VAT:<span style='float: right;'> EGP 00.00 </span>`;
VAT.style=`font-size: 20px;  padding:0 20px 10px ; border-bottom: 1px solid gray; `;
detels.append(VAT);

let total=document.createElement('p');
total.innerHTML=`Total:<span style='float: right;'> EGP ${totalPrice} </span>`;
total.style=`font-size: 20px;  padding:10px ;  `;
detels.append(total);

main.append(detels);
document.body.append(main)

function validatFristName(frName){
    if(/^[a-z]{3,}$/.test(frName)==false){
        return false;
    }
    else{
        return true;
    }
}

function validatLastName(laName){
    if(/^[a-z]{3,}$/.test(laName)==false){
        return false;
    }
    else{
        return true;
    }
}

function validatEmail(email){
    if(/^[a-z]{4,10}(@)(gmail|yahoo|outlooke)(\.)(com|eg)$/.test(email)==false){
        return false;
    }
    else{
        return true;
    }
}

function validatPhone(phone){
    if(/^(01)(0|1|2|5)[0-9]{8}$/.test(phone)==false){
        return false;
    }
    else{
        return true;
    }
}

function validatCity(city){
    if(/^[a-z]{3,}$/.test(city)==false){
        return false;
    }
    else{
        return true;
    }
}
function validatAddress(address){
    if(/^[a-z]{3,}$/.test(address)==false){
        return false;
    }
    else{
        return true;
    }
}

function validatpostalCode(code){
    if(/^[0-9]{5}$/.test(code)==false){
        return false;
    }
    else{
        return true;
    }
}

form.addEventListener('submit',function(e){
    if(validatEmail(email.value)==false){
        e.preventDefault();
        paraEmail.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid email`;
        paraEmail.style=`display:block; color:red;`; 
    }
    if(validatPhone(phone.value)==false){
        e.preventDefault();
        paraPhone.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid phone`;
        paraPhone.style=`display:block; color:red;`; 
    }
    if(validatCity(city.value)==false){
        e.preventDefault();
        paraCity.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid city`;
        paraCity.style=`display:block; color:red;`; 
    
    }
    if(validatAddress(address.value)==false){
        e.preventDefault();
        paraAddress.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid address`;
        paraAddress.style=`display:block; color:red;`;
    }
    if(validatpostalCode(postalCode.value)==false){
        e.preventDefault();
        paraPostalCode.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid postal code`;
        paraPostalCode.style=`display:block; color:red;`;
    }
    if(validatFristName(fristName.value)==false){
        e.preventDefault();
        paraFristName.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid first name`;
        paraFristName.style=`display:block; color:red;`;
    }
    if(validatLastName(lastName.value)==false){
        e.preventDefault();
        paraLastName.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid last name`;
        paraLastName.style=`display:block; color:red;`;
    }

})
console.log(userLog);

