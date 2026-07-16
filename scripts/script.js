document.addEventListener("DOMContentLoaded", initNavigation);

function initNavigation() {
    const hamburger_button = document.getElementById("hamburger");
    const nav_menu = document.getElementById("nav-links");
    const hamburger_open_character = document.getElementById("open-hamburger");
    const hamburger_close_character = document.getElementById("close-hamburger");

    if (!hamburger_button || !nav_menu || !hamburger_open_character || !hamburger_close_character) {
        return;
    }

    hamburger_button.setAttribute("aria-expanded", "false");
    hamburger_button.addEventListener("click", () => toggle_navigation(nav_menu, hamburger_open_character, hamburger_close_character, hamburger_button));
}

function toggle_navigation(nav_menu, hamburger_open_character, hamburger_close_character, hamburger_button) {
    const is_hidden = window.getComputedStyle(nav_menu).display === "none";

    nav_menu.style.display = is_hidden ? "flex" : "none";
    hamburger_open_character.style.display = is_hidden ? "none" : "inline-block";
    hamburger_close_character.style.display = is_hidden ? "inline-block" : "none";
    hamburger_button.setAttribute("aria-expanded", String(is_hidden));
}