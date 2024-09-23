const menu = document.querySelector('.open')
const closeIcon = document.querySelector('.close')
const menuList = document.getElementById('navList')
menu.addEventListener('click', ()=>{
    menuList.style.display = "flex"
    // menu.style.display = 'none;'
    // closeIcon.style.display = 'block';
})
function closeMenu() {
    menuList.style.display = "none"
}
closeIcon.addEventListener("click", closeMenu)
