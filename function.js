const hamburgerBtn = document.querySelector("#menu-btn");
const overlayDiv = document.getElementById("overlay");
const mobileMenu = document.querySelector("#mobile-menu");
let mobileListItems = document.querySelectorAll(".animate-list");
let counters = document.querySelectorAll(".counter");
let scrollStarted = false;

hamburgerBtn.addEventListener("click", hamburgerToggle);
document.addEventListener("scroll", scrollPage);

function hamburgerToggle() {
    hamburgerBtn.classList.toggle("open");
    overlayDiv.classList.toggle("overlay-show");
    document.body.classList.toggle("stop-scroll");
    mobileMenu.classList.toggle("show-mobile");
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        resetCounter();
        scrollStarted = false;
    }
}

function resetCounter() {
    counters.forEach((x) => x.innerHTML = "0")
}
function countUp () {
    counters.forEach((counter) => {
        counter.innerText = "0";

        function updateCounter() {
            //Get count target
            const target = +counter.getAttribute("data-target");
            //get current count
            const c = +counter.innerText;    
            //increment counter
            // if target is bigger that current count, add increment 
            if(target>c) {
                counter.innerText = `${c+1}`;
                if (target > 40){
                    setTimeout(updateCounter, 5)
                } else {
                    setTimeout(updateCounter, 75)
                }
            
            } else {
                counter.innerText = target;
            }
  
        }
        updateCounter();
    })

}