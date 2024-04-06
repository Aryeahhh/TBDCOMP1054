//Burger Icon animation
const togglebtn = document.querySelector('.bx-menu');
const toggleicon = document.querySelector('.bx-menu i');
const dropdown = document.querySelector('.dropdown');
togglebtn.onclick = function(){
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open');
    toggleicon.classList = isOpen 
    ? "ri-close-line"
    : "ri-menu-line";
}