let mobile_menu_icon = document.querySelector(".mobile_menu_icon");
let ul = document.querySelector("ul");
let menu_status = 0;

mobile_menu_icon.addEventListener("click", () => {
    if (menu_status === 0) {
        ul.style.top = "0";
        mobile_menu_icon.classList.add("active"); // Added to toggle the "active" class
        menu_status = 1;
    } else {
        ul.style.top = "-70em";
        mobile_menu_icon.classList.remove("active"); // Added to remove the "active" class
        menu_status = 0;
    }
});
