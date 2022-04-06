
function Book(image, title, price, quantity) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.quantity = quantity;
}
var cart=[]; 

function addToCart(image, title, price, quantity){
  cart.push(new Book(image, title, price, quantity));
  
}

searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}



let loginForm = document.querySelector('.login-form-container');
let loginAlert = document.querySelector('.login-alert');
let email = '';
let password = '';
document.querySelector('#login-btn').onclick = () =>{
  if (email == 'test@gmail.com' && password =='12345'){
    
    document.querySelector("#myDropdown").classList.toggle("show");
  }
  else{
    loginForm.classList.toggle('active');
  } 
}
document.querySelector('#submit-form').onclick = () =>{
  email = document.querySelector('#email').value;
  password = document.querySelector('#password').value;
  if (email == 'test@gmail.com' && password =='12345'){
    loginForm.classList.remove('active');
    document.getElementById("login-btn").style.color = "green";
  }
  else{
    loginAlert.classList.add('active');
    for(var i=0; i < 1000; i=i+450){
	    setTimeout("hide()",i+50);
	    setTimeout("show()",i+400);
    }
  } 
}
function show()
{
	if (document.getElementById)
	document.getElementById("login-alert").style.visibility = "visible";
}
function hide()
{
	if (document.getElementById)
	document.getElementById("login-alert").style.visibility = "hidden";
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
  loginAlert.classList.remove('active');
}
const leftSide = document.getElementById("leftside");
const leftSideTotal = document.getElementById("leftside-total");
let checkout = document.querySelector('.checkout-container');
document.querySelector('#add-to-cart').onclick = () =>{
  leftSide.innerHTML='';
  leftSideTotal.innerHTML='';
  let total=0;
  for(i=0; i<cart.length;i++){
    total += Number(cart[i].price);
    const div = document.createElement("div");
    div.className='checkout-list';
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const img = document.createElement("img");
    img.src = cart[i].image;    
    const title = document.createElement("h3");
    title.appendChild(document.createTextNode(cart[i].title));
    const price = document.createElement("p");
    price.appendChild(document.createTextNode('Price: $'+cart[i].price));
    const text = document.createElement("span");
    text.appendChild(document.createTextNode('Quantity:  '));
    const quantity = document.createElement("input");
    quantity.type = 'number';
    quantity.value = cart[i].quantity;
    div2.appendChild(img);
    div3.appendChild(title);    
    div3.appendChild(price);
    div3.appendChild(text);
    div3.appendChild(quantity);
    div3.className='item-info';
    div.appendChild(div2);
    div.appendChild(div3);
    leftSide.appendChild(div);  
  }
  if(total!=0){
    const summary = document.createElement("h2");
    const table = document.createElement("table");
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");
    const tr4 = document.createElement("tr");
    const tr5 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");
    const td9 = document.createElement("td");
    summary.appendChild(document.createTextNode('Order Summary'));
    td1.appendChild(summary);
    tr1.appendChild(td1)
    td2.appendChild(document.createTextNode('Subtotal'));
    td3.appendChild(document.createTextNode('$'+total.toFixed(2)));
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    td4.appendChild(document.createTextNode('Tax'));
    td5.appendChild(document.createTextNode('13%'));
    tr3.appendChild(td4);
    tr3.appendChild(td5);
    
    if(total >50){
      td6.appendChild(document.createTextNode('Shipping'));
      td7.appendChild(document.createTextNode('FREE'));
      td8.appendChild(document.createTextNode('Total'));
      td9.appendChild(document.createTextNode('$'+Number(total*1.13).toFixed(2)));
    }
    else{
      td6.appendChild(document.createTextNode('Shipping'));
      td7.appendChild(document.createTextNode('$15'));
      td8.appendChild(document.createTextNode('Total'));
      td9.appendChild(document.createTextNode('$'+Number(total*1.13 +15).toFixed(2)));
    }
    tr4.appendChild(td6);
    tr4.appendChild(td7);
    tr5.appendChild(td8);
    tr5.appendChild(td9);
    td3.className='right';
    td5.className='right';
    td7.className='right';
    td9.className='right';
    td8.className='checkout-total';
    td9.className='checkout-total';
  
  
  table.appendChild(tr1);
  table.appendChild(tr2);
  table.appendChild(tr3);
  table.appendChild(tr4);
  table.appendChild(tr5);
  leftSideTotal.appendChild(table);
  }
  checkout.classList.toggle('active');  
}
document.querySelector('#close-cart-btn').onclick = () =>{
  checkout.classList.remove('active');
}
// document.querySelector('#submit-checkout-form').onclick = () =>{
//   checkout.classList.remove('active');
// }

let postForm = document.querySelector('.post-book-container');
document.querySelector('#post-book').onclick = () =>{
  
    postForm.classList.toggle('active');  
}
document.querySelector('#close-post-btn').onclick = () =>{
  postForm.classList.remove('active');
}
document.querySelector('#submit-post').onclick = () =>{
  postForm.classList.remove('active');
}


window.onclick = function(event) {
  if (!event.target.matches('.fa-user')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".exchange-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});