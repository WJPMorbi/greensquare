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


