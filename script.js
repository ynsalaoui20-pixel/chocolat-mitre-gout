/*==================================================
        VELMIRA PACK - SCRIPT.JS
        Part 1 : Menu + Cart Setup
==================================================*/


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


// Close menu when clicking a link

const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});




// ===============================
// SHOPPING CART
// ===============================


let cart = [];


// Elements

const cartItems = document.getElementById("cart-items");

const cartCount = document.getElementById("cart-count");

const totalPrice = document.getElementById("total-price");



// ===============================
// ADD PRODUCT TO CART
// ===============================


function addToCart(productName){


    const product = {

        name: productName,

        price: getPrice(productName)

    };


    cart.push(product);


    updateCart();


    showNotification(productName + " ajouté au panier");


}




// ===============================
// PRODUCT PRICES
// ===============================


function getPrice(product){


    const prices = {


        "Princess Pack":299,

        "Elegance Pack":399,

        "Luxury Pack":499,


        "Montre":149,

        "Sac à Main":199,

        "Bracelet":99,

        "Collier":129,

        "Bague":89,

        "Boucles d'oreilles":79


    };


    return prices[product] || 0;


}
/*==================================================
        CART UPDATE SYSTEM
        Part 2
==================================================*/


// ===============================
// UPDATE CART
// ===============================


function updateCart(){


    // Clear cart display

    cartItems.innerHTML = "";



    // Empty cart

    if(cart.length === 0){


        cartItems.innerHTML = `

        <div class="empty-cart">

            <i class="fa-solid fa-cart-shopping"></i>

            <p>
                Votre panier est vide.
            </p>

        </div>

        `;


        cartCount.innerHTML = 0;

        totalPrice.innerHTML = "0 MAD";


        return;

    }




    let total = 0;



    cart.forEach((item,index)=>{


        total += item.price;



        const cartItem = document.createElement("div");


        cartItem.classList.add("cart-item");



        cartItem.innerHTML = `


            <div>

                <h4>${item.name}</h4>

                <span>${item.price} MAD</span>

            </div>



            <button 
            class="remove-item"
            onclick="removeFromCart(${index})">

                Supprimer

            </button>


        `;



        cartItems.appendChild(cartItem);



    });



    // Update counter

    cartCount.innerHTML = cart.length;



    // Update total

    totalPrice.innerHTML = total + " MAD";


}




// ===============================
// REMOVE FROM CART
// ===============================


function removeFromCart(index){


    cart.splice(index,1);


    updateCart();


    showNotification("Produit supprimé du panier");


}




// ===============================
// NOTIFICATION
// ===============================


function showNotification(message){


    const notification = document.createElement("div");


    notification.className = "notification";


    notification.innerHTML = message;



    document.body.appendChild(notification);



    setTimeout(()=>{


        notification.remove();


    },2500);



}
/*==================================================
        FORM + ANIMATIONS
        Part 3
==================================================*/


// ===============================
// CONTACT FORM
// ===============================


const contactForm = document.getElementById("contactForm");


if(contactForm){


    contactForm.addEventListener("submit",(e)=>{


        e.preventDefault();



        showNotification(
            "Votre message a été envoyé avec succès."
        );



        contactForm.reset();



    });


}




// ===============================
// SCROLL ANIMATION
// ===============================


const animatedElements = document.querySelectorAll(

    ".about-card, .pack-card, .product-card, .review-card, .stat-box"

);



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},

{

    threshold:0.15

}

);




animatedElements.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});





// ===============================
// INITIAL CART LOAD
// ===============================


document.addEventListener("DOMContentLoaded",()=>{


    updateCart();



});
/*==================================================
        ORDER SYSTEM + SOCIAL LINKS
        Part 4 (FINAL)
==================================================*/


// ===============================
// WHATSAPP ORDER
// ===============================


const checkoutBtn = document.querySelector(".checkout-btn");


if(checkoutBtn){


    checkoutBtn.addEventListener("click",()=>{


        if(cart.length === 0){


            showNotification(
                "Votre panier est vide."
            );


            return;


        }



        let message = 
        "Bonjour Velmira Pack,%0A%0AJe souhaite commander :%0A";



        cart.forEach(item=>{


            message += 
            "- " + item.name + 
            " : " + item.price + " MAD%0A";


        });



        let total = cart.reduce(

            (sum,item)=>sum + item.price,

            0

        );



        message += 
        "%0ATotal : " + total + " MAD";



        const phone = "212651994946";



        window.open(

            "https://wa.me/" + phone + "?text=" + message,

            "_blank"

        );



    });


}




// ===============================
// INSTAGRAM BUTTON
// ===============================


const instagramLink = 
"https://www.instagram.com/velmirapack";



const instagramButtons = 
document.querySelectorAll(".instagram-link");



instagramButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        window.open(

            instagramLink,

            "_blank"

        );


    });


});




// ===============================
// SMOOTH NAVIGATION
// ===============================


document.querySelectorAll("a[href^='#']")
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target = document.querySelector(

            this.getAttribute("href")

        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



// ===============================
// END SCRIPT
// ===============================

console.log(
    "Velmira Pack Website Loaded Successfully"
);