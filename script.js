// ================================
// MAITRE GOUT JAVASCRIPT
// ================================

// تغيير لون الهيدر عند التمرير
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(255,215,0,.2)";

    } else {

        header.style.background = "rgba(0,0,0,.9)";
        header.style.boxShadow = "none";

    }

});

// ================================
// ظهور العناصر أثناء النزول
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="1s";

observer.observe(section);

});

// ================================
// تكبير صور المعرض عند الضغط
// ================================

const images = document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.left="0";
popup.style.top="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";
popup.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.border="5px solid gold";
image.style.borderRadius="15px";

popup.appendChild(image);

popup.addEventListener("click",()=>{

popup.remove();

});

document.body.appendChild(popup);

});

});

// ================================
// تأثير الأزرار
// ================================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ================================
// سنة الفوتر تلقائياً
// ================================

const footer=document.querySelector("footer p");

footer.innerHTML="© "+new Date().getFullYear()+" MAÎTRE GOÛT - Tous droits réservés";