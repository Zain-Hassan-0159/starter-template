// Function to add or remove the click event listener based on screen width
function handleScreenResize() {
    const isSmallScreen = window.innerWidth <= 1364;
    const isExtraSmallScreen = window.innerWidth <= 730;
    
    // Select all the relevant list items
    const listItems = document.querySelectorAll('#header_menu .right ul.level_1 > li');
    const callToActions = document.querySelector('#header_menu .call_to_actions');
    listItems.forEach(el => {
        if (isSmallScreen && !isExtraSmallScreen) {
            document.querySelector("#header_menu .responsive").prepend(callToActions)
            el.addEventListener("click", preventDefaultClick);
        }else{
            document.querySelector("#header_menu .right").append(callToActions)
            el.removeEventListener("click", preventDefaultClick);
        }
    });
}

// Function to prevent default action on click
function preventDefaultClick(e) {
    e.preventDefault();
}

// Initial check when the script runs
handleScreenResize();

// Add a resize event listener to handle screen resizing
window.addEventListener('resize', handleScreenResize);



const menuOpen = document.querySelector("#header_menu .responsive .open button");
const menuClose = document.querySelector("#header_menu .right .close button");
const listItem = document.querySelector('#header_menu .right ul.level_1 > li');
menuOpen.addEventListener("click", e => {
    document.querySelector("#header_menu .right").classList.add("d-flex-important")
})
menuClose.addEventListener("click", e => {
    document.querySelector("#header_menu .right").classList.remove("d-flex-important")
})
