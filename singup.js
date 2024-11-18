"use strict";
let heading=document.createElement('h1');
heading.innerText='Sing Up';
heading.style=` font-size: 50px; font-weight: bold; text-align: center;`;
document.body.append(heading);

let form=document.createElement('form');
form.setAttribute('action','./check_out.html')
form.setAttribute('method','get')
form.style=`text-align: center;`;

//creat frist name
let fristName=document.createElement('input');
fristName.setAttribute('type','text');
fristName.setAttribute('placeholder','Frist Name');
fristName.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 1px solid black; 
padding-left: 15px;`;
form.append(fristName);

//creat parafristname
let paraFristName=document.createElement('p');
paraFristName.style=` display:none`;
form.append(paraFristName);
form.append(document.createElement('br'));

//creat last name
let lastName=document.createElement('input');
lastName.setAttribute('type','text');
lastName.setAttribute('placeholder','Last Name');
lastName.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 1px solid black; 
padding-left: 15px;`;
form.append(lastName);
let paraLastName=document.createElement('p');
paraLastName.style=` display:none`;
form.append(paraLastName);
form.append(document.createElement('br'));

//creat email
let email=document.createElement('input');
email.setAttribute('type','email');
email.setAttribute('name','Email');
email.setAttribute('placeholder','Email');
email.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 1px solid black; 
padding-left: 15px;`;
form.append(email);
let paraEmail=document.createElement('p');
paraEmail.style=` display:none`;
form.append(paraEmail);
form.append(document.createElement('br'));

//creat phone
let phone=document.createElement('input');
phone.setAttribute('type','text');
phone.setAttribute('placeholder','Phone');
phone.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 1px solid black; 
padding-left: 15px;`;
form.append(phone);
let paraPhone=document.createElement('p');
paraPhone.style=` display:none`;
form.append(paraPhone);
form.append(document.createElement('br'));

//creat password
let password=document.createElement('input');
password.setAttribute('type','password');
password.setAttribute('placeholder','Password');
password.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 1px solid black; 
padding-left: 15px;`;
form.append(password);
let paraPassword=document.createElement('p');
paraPassword.style=` display:none`;
form.append(paraPassword);
form.append(document.createElement('br'));

//creat checkbox join
let checkBox=document.createElement('input');
checkBox.setAttribute('type','checkbox');
checkBox.setAttribute('id','join');
checkBox.style=`width: 18px; height:18px; margin-top:30px; `;

let checkBoxLabel=document.createElement('label');
checkBoxLabel.setAttribute('for','join');
checkBoxLabel.innerText='Join the community';
checkBoxLabel.style=`width: 18px; height:18px; margin-left:10px; margin-top:30px; color:grey; `;
form.append(checkBox);
form.append(checkBoxLabel);
form.append(document.createElement('br'));

//creat submit
let submit=document.createElement('input');
submit.setAttribute('type','submit');
submit.setAttribute('value','Sing Up');
submit.style=`width: 300px; height: 50px; background-color: black; color: white;border: 0cap; margin-top:30px; 
padding: 15px;  cursor: pointer;`;
form.append(submit);

document.body.append(form);

//creat para

let para=document.createElement('p');
para.innerHTML='Already have an account?<a href="./login.html" style= "color:black; text-decoration: none;">Log In</a>';

para.style=`text-align: center; font-size: 20px; font-weight: bold; color: rgb(66, 66, 66);`;
document.body.append(para);


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

function validatPassword(password){
    if(/^[a-z0-9]{6,}$/.test(password)==false){
        return false;
    }
    else{
        return true;
    }
}




fristName.addEventListener("blur",function(){
    if(validatFristName(fristName.value)==false){
        fristName.style.border="1px solid red";
        paraFristName.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter three Letter or more`
        paraFristName.style=`display:block; color:red;`; 
    }
    else{
        paraFristName.style.display='none'
        fristName.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 2px solid green; 
        padding-left: 15px;`;
    }
})

lastName.addEventListener("blur",function(){
    if(validatLastName(lastName.value)==false){
        lastName.style.border="1px solid red";
        paraLastName.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter three Letter or more`
        paraLastName.style=`display:block; color:red;`; 
    }
    else{
        paraLastName.style.display='none'
        lastName.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 2px solid green; 
        padding-left: 15px;`;
    }
})

email.addEventListener("blur",function(){
    if(validatEmail(email.value)==false){
        email.style.border="1px solid red";
        paraEmail.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid email`
        paraEmail.style=`display:block; color:red;`; 
    }
    else{
        paraEmail.style.display='none'
        email.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 2px solid green; 
        padding-left: 15px;`;
    }
})

phone.addEventListener("blur",function(){
    if(validatPhone(phone.value)==false){
        phone.style.border="1px solid red";
        paraPhone.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter valid phone`
        paraPhone.style=`display:block; color:red;`; 
    }
    else{
        paraPhone.style.display='none'
        phone.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 2px solid green; 
        padding-left: 15px;`;
    }
})

password.addEventListener("blur",function(){
    if(validatPassword(password.value)==false){
        password.style.border="1px solid red";
        paraPassword.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        please enter (6 Letter / 6 number) or more `
        paraPassword.style=`display:block; color:red;`; 
    }
    else{
        paraPassword.style.display='none'
        password.style=`width: 300px; height: 50px; border: 0cap; border-bottom: 2px solid green; 
        padding-left: 15px;`;
    }
})
 var allUsers=[];
 if(localStorage.getItem("allUsers")!=null){
    allUsers=JSON.parse(localStorage.getItem("allUsers"));
    console.log(allUsers);
}


form.addEventListener("submit",function(e){
    
    if(allUsers.find(user=> user.email==email.value)==undefined){
        if(validatFristName(fristName.value)==true&&validatLastName(lastName.value)==true
        &&validatEmail(email.value)==true&&validatPhone(phone.value)==true
        &&validatPassword(password.value)==true){
        let user={
            fristName:fristName.value,
            lastName:lastName.value,
            email:email.value,
            phone:phone.value,
            password:password.value,
            isLogIn:true
        }
        allUsers.push(user);
        localStorage.setItem('allUsers',JSON.stringify(allUsers));
        // window.location.href="./check_out.html";

        }else{
            e.preventDefault();
            alert("please enter valid data");

        }
        
          
    }
    else{
        e.preventDefault();
        paraEmail.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        this email is already register`
        paraEmail.style=`display:block; color:red;`;
    }

})





