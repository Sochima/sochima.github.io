

// Toggle Button function
const toggleButton = document.getElementById("toggler-btn");
const menuList = document.getElementById("menu-list");

toggleButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
})