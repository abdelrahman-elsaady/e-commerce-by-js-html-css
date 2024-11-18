"use strict";
let heading=document.createElement('h1');
heading.innerText='Log In';
heading.style=` font-size: 50px; font-weight: bold; text-align: center;`;
document.body.append(heading);

let singUp=document.createElement('p');
singUp.style=`text-align: center; font-size: 25px;`;
singUp.innerHTML=` New to this site?<a href="singup.html" style= "color:rgb(153, 133, 69); 
text-decoration: none;">Sing Up</a>`;
document.body.append(singUp);

let form=document.createElement('form');
form.setAttribute('action','./check_out.html')
form.setAttribute('method','get');
form.style=`text-align: center;`;

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

//creat submit
let submit=document.createElement('input');
submit.setAttribute('type','submit');
submit.setAttribute('value','Log In');
submit.style=`width: 300px; height: 50px; background-color:rgb(114, 98, 56); color: white;border: 0cap; margin-top:30px; 
padding: 15px;  cursor: pointer;`;
form.append(submit);

document.body.append(form);



let allUsers=JSON.parse(localStorage.getItem('allUsers'));
form.addEventListener("submit",function(e){
    
    if(allUsers.find(user=> user.email==email.value&&user.password==password.value)==undefined){
        e.preventDefault();
        email.style.border="1px solid red";
        password.style.border="1px solid red";
        paraEmail.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        check your email and try again.`;
        paraEmail.style=`display:block; color:red;`;
        paraPassword.innerHTML=`<i class="fa-solid fa-triangle-exclamation" style='color:red;'></i>
        This email doesn't match any account. Try again.`
        paraPassword.style=`display:block; color:red;`;
          
    }
    else{
        paraEmail.style.display='none';
        paraPassword.style.display='none';
        for (let i in allUsers) {
            if(allUsers[i].email==email.value){
               // console.log("ok");
               allUsers[i].isLogIn=true;
               
            }
           }
           localStorage.setItem("allUsers",JSON.stringify(allUsers));

    }

})

