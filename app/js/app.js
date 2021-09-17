import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
    function initMenu() {
        const menuBtn = document.querySelector(".header__menu-btn");
        const menu = document.querySelector(".header__navigation");
        const navigationLinks = document.querySelectorAll(
            ".header__navigation li a"
        );
        const html = document.querySelector("html");

        if (document.documentElement.clientWidth <= 750) {
            menuBtn.addEventListener("click", function () {
                menu.classList.toggle("active");
                menuBtn.classList.toggle("active");
                html.classList.toggle("overflow-hidden");
            });

            const menuLists = document.querySelectorAll(".menu__list a");
            menuLists.forEach((list) => {
                list.addEventListener("click", function () {
                    if (list.parentElement.classList.contains("menu__list")) {
                        if (list.parentElement.classList.contains("open")) {
                            list.parentElement.classList.remove("open");
                        } else {
                            list.parentElement.classList.add("open");
                        }
                    }
                });
            });
        }
    }

    // initMenu();
});
