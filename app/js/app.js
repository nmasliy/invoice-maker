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

    const toggleVisibleAboutContent = () => {
        const $buttons = document.querySelectorAll('.info-block__btn');

        $buttons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const [SHOW_MORE, SHOW_LESS] = ['Show more', 'Show less'];
                const parent = this.closest('.info-component');
                const buttonText = btn.querySelector('span');

                if (parent.classList.contains('opened')) {
                    parent.classList.remove('opened');
                    buttonText.textContent = SHOW_MORE;
                } else {
                    parent.classList.add('opened');
                    buttonText.textContent = SHOW_LESS;
                }
            })
        }) 
    }

    toggleVisibleAboutContent();

    // initMenu();
});
