const overlay = document.getElementById("overlay");
const sideBAr = document.getElementById("sidebar");
const closeSideBar = document.getElementById("overlay");
const  selectBody = document.querySelector("body");
const selectNav = document.getElementById("nav")

function openNav() {
    sideBAr.style.width = "280px";
    overlay.style.display = "block"; // Show the overlay
    scrollBlock();
}

function closeNav() {
    sideBAr.style.width = "0";
    overlay.style.display = "none"; // Hide the overlay
    selectBody.style.overflow="auto"
}

closeSideBar.addEventListener("click", function() {
    closeNav();                                      // close the sidebar
  });

function scrollBlock() {
    if (sideBAr.style.width == "280px") {
        selectBody.style.overflow ="hidden"  // Scroll block on appearing sidebar
    }
}

window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.documentElement.scrollTop > 60) {  // onscroll appear the background colour
    selectNav.style.backgroundColor ="#fff";
    selectNav.style.border="2px solid  rgb(230, 227, 227)"
  }else{
    selectNav.style.backgroundColor="";
    selectNav.style.border="none"
  } 
}

