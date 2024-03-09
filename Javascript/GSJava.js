// ------------------------- Cursor Events -------------------------
// const cursorDot = document.querySelector(".cursor-dot");
// const cursorOutine = document.querySelector(".cursor-outline");

// window.addEventListener("mousemove",(e)=>{
//   const posX = e.clientX;
//   const posY = e.clientY;

//   cursorDot.style.left = `${posX}px`;
//   cursorDot.style.top = `${posY}px`;

//   // cursorOutine.style.left = `${posX}px`;
//   // cursorOutine.style.top = `${posY}px`;

//   cursorOutine.animate({
//     left : `${posX}px`,
//     top : `${posY}px`
//   },{
//     duration:500, fill:"forwards"
//   });
// });

// ------------------------- Toggle Function -------------------------
function AnimeListItem(){
    const NavItem  = document.querySelectorAll('.LandNav li');

    NavItem.forEach((NavItem, index) => {
        setTimeout(()=>{
            NavItem.classList.remove('hidden');
            NavItem.classList.add('visible');
        }, (index+1)*300);
    });
}

document.addEventListener("DOMContentLoaded", function(event){
   AnimeListItem(); 
});

// ------------------------- Adding icon links -------------------------

let icon_links = document.querySelectorAll('.ft-cont-main')[2];
let navIcon_Links = document.querySelectorAll('.nav-con-icon')[0];

let insta_link = icon_links.childNodes[1];
let fb_link = icon_links.childNodes[3];
let yt_link = icon_links.childNodes[5];

insta_link.setAttribute("href","https://www.instagram.com/santhaliya_pradeep?igsh=ZDE2bDNmcnM2ZXgw");
fb_link.setAttribute("href","https://www.facebook.com/santhaliyapradeep?mibextid=ZbWKwL");
yt_link.setAttribute("href","https://youtube.com/@PradeepWorld");

let nav_insta_link = navIcon_Links.childNodes[1];
let nav_fb_link = navIcon_Links.childNodes[3];
let nav_yt_link = navIcon_Links.childNodes[5];

nav_insta_link.setAttribute("href","https://www.instagram.com/santhaliya_pradeep?igsh=ZDE2bDNmcnM2ZXgw");
nav_fb_link.setAttribute("href","https://www.facebook.com/santhaliyapradeep?mibextid=ZbWKwL");
nav_yt_link.setAttribute("href","https://youtube.com/@PradeepWorld");




