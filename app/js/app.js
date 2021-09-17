import Swiper from "swiper";

document.addEventListener("DOMContentLoaded", function () {
    function initMenu() {
        const $html = document.querySelector('html');
        const $header = document.querySelector('.header');
        const $headerBtn = document.querySelector('.header__menu-btn');
        const $navigationItems = document.querySelectorAll('.header__navigation ul>li>a');
        let isInit = false;

        const toggleMenu = () => {
            $headerBtn.classList.toggle('active');
            $header.classList.toggle('active');
            $html.classList.toggle('block-scroll');
        }

        const checkScreenWidth = () => {
            // Активируем меню только на экранах <= 1024
            if (window.innerWidth <= 1024) {
                $headerBtn.addEventListener('click', toggleMenu);
                $navigationItems.forEach(item => item.addEventListener('click', toggleMenu));
                isInit = true;
            }
        }

        window.addEventListener('resize', checkScreenWidth);
        
        checkScreenWidth();
    }

    function initToggleVisibleAboutContent() {
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
    
    initMenu();

    initToggleVisibleAboutContent();
});
