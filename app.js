const headerSection = document.createElement('section');

headerSection.style.display = 'flex';
headerSection.style.alignItems = 'center';
headerSection.style.justifyContent = 'space-between';
headerSection.style.textAlign = 'center';
headerSection.style.padding = '20px 9.4%';
headerSection.style.background = 'rgb(20, 20, 20)';
headerSection.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.06)';

//headerSection.innerHTML="hello"

// Create an anchor element
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
searchInput.style.height = '50px';
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

document.body.appendChild(headerSection)


//  ====================================== navbar ======================
//  ====================================== navbar ======================
//  ====================================== navbar ======================
//  ====================================== navbar ======================

const menuItems = [
    { name: 'Home', link: 'home.html' },
    { name: 'Shop', link: 'Shop.html' },
    { name: 'Oriental Deserts', link: 'Oriental.html' },
    { name: 'Western Deserts', link: 'Western.html' },
    { name: 'Ramadan Varieties', link: 'Ramadan.html' },
    { name: 'Kahk & Maamoul', link: 'Ramadan.html' },
    { name: 'Catering Services', link: 'Ramadan.html' },
    { name: 'About Us', link: 'Ramadan.html' }
];

// Create a navigation menu dynamically

const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.id = 'navbar';
ul.style.display = 'flex';
ul.style.alignItems = 'center';
ul.style.justifyContent = 'start';
ul.style.width = '81%';
ul.style.padding = '10px 50px';
ul.style.margin = '0 15%';



menuItems.forEach(item => {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
   
   
   

    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.name;

    a.style.marginLeft="20px"
    a.style.textDecoration = 'none';
    a.style.fontSize = '18px';
    a.style.fontWeight = '600';
    a.style.color = '#333';
    a.style.transition = '0.2s ease';
    a.style.lineHeight = '50px';

    li.appendChild(a);
    ul.appendChild(li);
    
});

nav.appendChild(ul);

document.body.appendChild(nav);



// ========================================================= hero section
// ========================================================= hero section
// ========================================================= hero section
// ======================================================== hero section
// ========================================================= hero section




//  document.addEventListener('DOMContentLoaded', function() {
// //     // Create the hero section
     const heroSection = document.createElement('section');
     heroSection.id = 'hero';
     heroSection.style.backgroundColor="#000"
     heroSection.style.display="flex"
     heroSection.style.alignItems="center"
     heroSection.style.justifyContent="center"
     document.body.appendChild(heroSection);

// //     // Create the slideshow container
     const slideshowContainer = document.createElement('div');
     slideshowContainer.className = 'slideshow-container';
     slideshowContainer.style.position = 'relative';
     slideshowContainer.style.textAlign='center'
     slideshowContainer.style.marginTop='20px'
     slideshowContainer.style.marginBottom='20px'
     slideshowContainer.style.width='100%'
     heroSection.appendChild(slideshowContainer);

//      // Create slides
    const slideImages = [
        './imgs/background1.webp',
        './imgs/background2.webp',
        './imgs/background3.webp',
        './imgs/background4.webp',
        './imgs/background5.webp',
        './imgs/background6.webp',
        './imgs/background7.webp'
    ];
    const captions = [
        'Caption Text',
        'Caption Two',
        'Caption Three',
        'Caption Three',
        'Caption Three',
        'Caption Three',
        'Caption Three'
    ];
   

    slideImages.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
       // slide.style.textAlign="center"
        slide.className = 'mySlides';
        if (index === 0) {
            slide.classList.add('fade');
        }
        slideshowContainer.appendChild(slide);

        // Create the image element
        const imgSlider = document.createElement('img');
        imgSlider.src = imageSrc;
        imgSlider.style.width="60%"
        imgSlider.style.height="100%"
        imgSlider.objectFit="cover"
       // imgSlider.marginTop="-4%"
       //imgSlider.style.margin="auto"
      

        slide.appendChild(imgSlider);

       // Create the text element
        const textDiv = document.createElement('p');
        textDiv.textContent = captions[index];
        textDiv.style.color = '#fff';
        textDiv.style.fontSize = '15px';
        textDiv.style.padding = '8px 12px';
        textDiv.style.position = 'absolute';
        textDiv.style.bottom = '8px';
        textDiv.style.textAlign = 'center';
        textDiv.style.width="100%"
   
        slide.appendChild(textDiv);
    });


// Converted code in JavaScript

const productsDiv = document.createElement("div");

productsDiv.style.padding = "10px";
 productsDiv.style.backgroundColor = "#000";



const headingProducts = document.createElement("h1");
headingProducts.classList.add("heading");
headingProducts.innerHTML = "our <span>products</span>";

const boxProductContainer = document.createElement("div");
boxProductContainer.style.display="flex"
boxProductContainer.style.flexDirection="row"
boxProductContainer.style.justifyContent="space-around"
boxProductContainer.style.marginTop="10px"
boxProductContainer.style.marginBottom="10px"
boxProductContainer.style.marginLeft="10px"
boxProductContainer.style.marginRight="10px"
boxProductContainer.style.padding="10px"
boxProductContainer.style.borderRadius="10px"
boxProductContainer.style.backgroundColor="#000"



const boxProduct1 = createBox("./imgs/1.webp", "Turkish Desserts Mix Box", "EGP 1,250.00");
const boxProduct2 = createBox("./imgs/2.webp", "Eidiah Mix Box 1.2 KG", "EGP 380.00");
const boxProduct3 = createBox("./imgs/3.webp", "Petits fours Box (1 KG)", "EGP 420.00");
const boxProduct4 = createBox("./imgs/4.webp", "Ottoman Kunafa Tray", "EGP 480.00");


boxProductContainer.append(boxProduct1, boxProduct2, boxProduct3, boxProduct4);
productsDiv.append(headingProducts, boxProductContainer);
document.body.appendChild(productsDiv)



// Function to create a box element
function createBox(imageSrc, title, price) {
  const boxProduct = document.createElement("div");
  boxProduct.classList.add("box");
    boxProduct.style.border = '2px solid rgb(207,174,121)';
    boxProduct.style.position = 'relative';
    boxProduct.style.margin = '0 25px';
    boxProduct.style.height = '100%';
    boxProduct.style.width = '100%';

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
      imageDiv.style.position = 'relative';
    imageDiv.style.textAlign = 'center';
    imageDiv.style.overflow = 'hidden';

  const Productimage = document.createElement("img");
  Productimage.src = imageSrc;
       Productimage.style.height = '250px';


      Productimage.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });


  const iconsDivProducts = document.createElement("div");
  iconsDivProducts.classList.add("icons");
    iconsDivProducts.style.position = 'absolute';
    iconsDivProducts.style.left = '0';
    iconsDivProducts.style.right = '0';
    iconsDivProducts.style.display = 'flex';


    
    Productimage.addEventListener('mouseover', () => {
        icons.style.bottom = '0';
    });
  const quickViewLink = document.createElement("a");
  quickViewLink.href = "#";
 
        quickViewLink.style.fontSize = '18px';
        quickViewLink.style.color = '#fff';
        quickViewLink.style.height = '100%';
        quickViewLink.style.lineHeight = '3';
        quickViewLink.style.width = '100%';
        quickViewLink.style.background = 'rgba(0, 0, 0, 0.5)';
        quickViewLink.style.textDecoration = 'none';
        quickViewLink.innerHTML="Button"



  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "cart-btn");

  quickViewLink.append(cartIcon, " Quick View");
  iconsDivProducts.append(quickViewLink);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
      contentDiv.style.padding = '40px';
    contentDiv.style.textAlign = 'center';

  const titleHeading = document.createElement("h4");
  titleHeading.innerHTML = title;
     titleHeading.style.fontSize = '18px';
    titleHeading.style.color = '#fff';

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("price");
  priceDiv.innerHTML = price;
      priceDiv.style.fontSize = '20px';
    priceDiv.style.color = '#fff';
    priceDiv.style.fontWeight = 'bolder';
    priceDiv.style.paddingTop = '10px';
    priceDiv.style.borderTop = '3px solid #fff';

  contentDiv.append(titleHeading, priceDiv);
  imageDiv.append(Productimage, iconsDivProducts);
  boxProduct.append(imageDiv, contentDiv);

  return boxProduct;
}








 document.addEventListener('DOMContentLoaded', function() {

    // Slideshow code
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length)
             {
                slideIndex = 1
            }
 
        slides[slideIndex-1].style.display = "block";
       
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

});




// ========================================================= main section
// ========================================================= main section
// ========================================================= main section
// ========================================================= main section
// ========================================================= main section


const section = document.createElement('section');

section.style.backgroundColor = 'rgb(207,174,121)';
section.style.padding = '80px 50px';
section.style.color = '#fff';
section.style.fontSize = '18px';
section.style.lineHeight = '1.5';
section.style.textAlign = 'center';


const h1 = document.createElement('h1');
h1.textContent = 'PISTACHIO DESSERTS';

// Apply CSS styles to h1 element
h1.style.fontWeight = 'bolder';
h1.style.fontSize = '50px';
h1.style.textTransform = 'capitalize';

section.appendChild(h1);

const h5 = document.createElement('h5');
h5.textContent = 'Behind the Counter';
h5.style.fontStyle = 'italic';

section.appendChild(h5);

const p = document.createElement('p');
p.textContent = 'From timeless classics to modern products, we provide the most prestigious list of western and eastern desserts and 55 flavors of ice cream that perfectly match our personality that combines modernism, originality and classical (antique).';
section.appendChild(p);

const img = document.createElement('img');
img.src = './imgs/main.webp';

img.style.width = '90%';
img.style.height = '100%';
img.style.objectFit = 'cover';
img.style.borderRadius = '10px';
img.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.06)';
img.style.marginTop= '20px';
img.style.transition = '0.2s ease';
img.style.margin = '20px 0';
img.style.border = '2px solid rgb(207,174,121)';
section.appendChild(img);

document.body.appendChild(section);


//  ====================================================== about
//  ====================================================== about
//  ====================================================== about
//  ====================================================== about
//  ====================================================== about

// Select the section element with the class "about"
const aboutSection = document.createElement("section");

aboutSection.style.display = 'flex';
aboutSection.style.alignItems = 'center';
aboutSection.style.justifyContent = 'center';
aboutSection.style.lineHeight = '40px';


// Create a div element for content
const contentDiv = document.createElement('div');
contentDiv.classList.add('content');
contentDiv.style.marginTop = '5%';
contentDiv.style.width = '40%';
contentDiv.style.textAlign = 'center';

// Create an h1 element for the main heading
const heading1 = document.createElement('h1');
heading1.textContent = 'Order online, get it fresh to your door';
heading1.style.fontSize = '35px';
heading1.style.color = 'rgb(207, 174, 121)';
contentDiv.appendChild(heading1);


// Create an anchor element for the welcome message
const anchor = document.createElement('a');
anchor.href = '#';
anchor.textContent = 'Welcome to Shop with us';
anchor.style.fontSize = '30px';
anchor.style.color = '#4E0346';
anchor.style.fontStyle = 'italic';
contentDiv.appendChild(anchor);

// Create an h2 element for the city
const cityHeading = document.createElement('h2');
cityHeading.classList.add('country');
cityHeading.textContent = 'Cairo';
cityHeading.style.fontSize = '30px';
cityHeading.style.color = 'rgb(162, 181, 39)';
contentDiv.appendChild(cityHeading);

// Create a paragraph element for the ordering details
const orderDetails = document.createElement('p');
orderDetails.innerHTML = 'ordering before 2 pm, receiving the same day before 9 pm<br>ordering after 2 pm, receiving the next day before 9 pm';
contentDiv.appendChild(orderDetails);

// Create an h2 element for other governments
const govHeading = document.createElement('h2');
govHeading.classList.add('gov');
govHeading.textContent = 'For other governments';
contentDiv.appendChild(govHeading);

// Create a paragraph element for contacting customer services
const contactInfo = document.createElement('p');
contactInfo.textContent = 'Please contact the customer services';
contactInfo.style.color = 'rgb(162, 181, 39)';
contactInfo.style.fontSize = '17px';
contentDiv.appendChild(contactInfo);

// Append the content div to the about section
aboutSection.appendChild(contentDiv);

// Create an image element
const image = document.createElement('img');
image.src = './imgs/about.webp';
image.style.marginTop = '30px';
image.style.width = '500px';
image.style.height = '400px';
aboutSection.appendChild(image);

document.body.appendChild(aboutSection)



//  =================================================================== contact
//  ====================================================== contact
//  ====================================================== contact
//  ====================================================== contact
//  ====================================================== contact

// // Create a new section element
 const sectionContact = document.createElement('section');
 sectionContact.className = 'contact';
 //sectionContact.style.display = 'flex';
 sectionContact.style.backgroundColor = '#000';
 sectionContact.style.color = '#fff';
 sectionContact.id = 'contact';
 sectionContact.style.marginTop="20px"

// // // Create div with class 'content'
const contentDivContact = document.createElement('div');
contentDivContact.className = 'content';
contentDivContact.style.lineHeight = '40px';
contentDivContact.style.marginTop = '5%';
contentDivContact.style.width = '50%';
contentDivContact.style.textAlign = 'center';
contentDivContact.style.float='left'

// // // Create h1 element for 'CONTACT'
const h1Contact = document.createElement('h1');
h1Contact.textContent = 'CONTACT';
h1Contact.style.fontSize = '35px';
h1Contact.style.textTransform = 'capitalize';

contentDivContact.appendChild(h1Contact);

//  Create paragraph element with contact information
const pContact = document.createElement('p');
pContact.innerHTML = 'Egypt, New Cairo, Industrial Zoon, plot 642<br>' +
              'info@pistachio.com.eg<br>' +
              '+20 1224488388/1224488288';
contentDivContact.appendChild(pContact);

//  Create div with class 'icons' for social media icons
// const iconsDiv = document.createElement('div');
// iconsDiv.className = 'icons';

// // // Create social media icons
// const socialMediaIconsContact = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fab fa-youtube'];
// socialMediaIconsContact.forEach(iconClass => {
//     const aContact = document.createElement('a');
//     aContact.href = '#';
//     const i = document.createElement('i');
//     i.className = iconClass;
//     aContact.appendChild(i);
//     iconsDiv.appendChild(a);

//     aContact.forEach(link => {
//         link.style.marginLeft = '20px';
//         link.style.color = '#fff';
//         link.style.cursor = 'pointer';
//         link.style.fontSize = '20px';
//     });
// });

//contentDivContact.appendChild(iconsDiv);

//  Append 'content' div to 'section'
 sectionContact.appendChild(contentDivContact);

//  Create form element 

let formContact = document.createElement('form');
formContact.style.display = 'flex';
formContact.style.flexWrap = 'wrap';
formContact.style.width = '50%';
formContact.style.padding = '20px';

// Create input elements
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
nameInput.style.width = '49%';
nameInput.style.padding = '10px';
nameInput.style.marginBottom = '7px';
nameInput.style.marginLeft = '5px';
nameInput.style.border = 'none';
nameInput.style.border = '2px solid #fff';
nameInput.style.fontSize = '18px';
nameInput.style.color = '#fff';
nameInput.style.fontWeight = '600';
nameInput.style.backgroundColor = 'transparent';

let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.style.width = '49%';
emailInput.style.padding = '10px';
emailInput.style.marginBottom = '7px';
emailInput.style.marginLeft = '5px';
emailInput.style.border = 'none';
emailInput.style.border = '2px solid #fff';
emailInput.style.fontSize = '18px';
emailInput.style.color = '#fff';
emailInput.style.fontWeight = '600';
emailInput.style.backgroundColor = 'transparent';

let phoneInput = document.createElement('input');
phoneInput.type = 'phone';
phoneInput.placeholder = 'Phone';
phoneInput.style.width = '49%';
phoneInput.style.padding = '10px';
phoneInput.style.marginBottom = '7px';
phoneInput.style.marginLeft = '5px';
phoneInput.style.border = 'none';
phoneInput.style.border = '2px solid #fff';
phoneInput.style.fontSize = '18px';
phoneInput.style.color = '#fff';
phoneInput.style.fontWeight = '600';
phoneInput.style.backgroundColor = 'transparent';


let addressInput = document.createElement('input');
addressInput.type = 'text';
addressInput.placeholder = 'Address';
addressInput.style.width = '49%';
addressInput.style.padding = '10px';
addressInput.style.marginBottom = '7px';
addressInput.style.marginLeft = '5px';
addressInput.style.border = 'none';
addressInput.style.border = '2px solid #fff';
addressInput.style.fontSize = '18px';
addressInput.style.color = '#fff';
addressInput.style.fontWeight = '600';
addressInput.style.backgroundColor = 'transparent';

// Append input elements to formContact
formContact.appendChild(nameInput);
formContact.appendChild(emailInput);
formContact.appendChild(phoneInput);
formContact.appendChild(addressInput);

// Create subject input element
let subjectInput = document.createElement('input');
subjectInput.type = 'text';
subjectInput.placeholder = 'Subject';
subjectInput.style.width = '100%';
subjectInput.style.padding = '10px';
subjectInput.style.marginBottom = '7px';
subjectInput.style.marginLeft = '5px';
subjectInput.style.border = 'none';
subjectInput.style.border = '2px solid #fff';
subjectInput.style.fontSize = '18px';
subjectInput.style.color = '#fff';
subjectInput.style.fontWeight = '600';
subjectInput.style.backgroundColor = 'transparent';
formContact.appendChild(subjectInput);



// Create textarea element
let textarea = document.createElement('textarea');
textarea.style.width = '100%';
textarea.placeholder = 'Type your message here...';
textarea.cols = '30';
textarea.rows = '10';
textarea.style.width = '100%';
textarea.style.padding = '10px';
textarea.style.marginBottom = '7px';
textarea.style.marginLeft = '5px';
textarea.style.border = 'none';
textarea.style.border = '2px solid #fff';
textarea.style.fontSize = '18px';
textarea.style.color = '#fff';
textarea.style.fontWeight = '600';
textarea.style.backgroundColor = 'transparent';
formContact.appendChild(textarea);


// Create submit button
let submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.id = 'submit';
submitButton.value = 'Submit';
submitButton.style.width = '100%';
submitButton.style.padding = '10px';
submitButton.style.marginBottom = '7px';
submitButton.style.marginLeft = '5px';
submitButton.style.border = 'none';
submitButton.style.border = '2px solid #fff';
submitButton.style.fontSize = '18px';
submitButton.style.color = '#fff';
submitButton.style.fontWeight = '600';
submitButton.style.backgroundColor = 'transparent';
formContact.appendChild(submitButton);

//  Append formContact to section
sectionContact.appendChild(formContact);

// Append section to the document body or any desired parent element
document.body.appendChild(sectionContact);



//  ====================================================== Footer 
//  ====================================================== Footer 
//  ====================================================== Footer 
//  ====================================================== Footer 
//  ====================================================== Footer 

// // Footer Section
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

