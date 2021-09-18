import Swiper from 'swiper';

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

        if ($buttons.length > 0) {
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
    }

    function initStarRating() {
        const $rating = document.querySelectorAll('.star-rating');

        if ($rating.length > 0) {
            $rating.forEach(item => {
                const $ratingBar = item.querySelector('.star-rating__active');
                const ratingValue = item.querySelector('.star-rating__value').dataset.starRatingValue || item.querySelector('.star-rating__value').textContent;

                const value = (ratingValue * 10) * 2;

                $ratingBar.style.width = value + '%';
            })
        }
    }

    function initReviewsSlider() {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: true,
            grabCursor: true,
            slidesOffsetBefore: 500,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                    slidesOffsetBefore: 0,
                },
                420: {
                    slidesPerView: 1.5,
                    slidesOffsetBefore: 0,
                },
                768: {
                    slidesPerView: 2,
                    slidesOffsetBefore: 0,
                },
                900: {
                    slidesOffsetBefore: 0,
                },
                1280: {
                    slidesOffsetBefore: 300,
                    slidesPerView: 2.5,
                },
                1800: {
                    slidesOffsetBefore: 380,
                },
                1921: {
                    slidesPerView: 'auto',
                },
            },
        });
    }
    
    initMenu();
    initStarRating()

    initToggleVisibleAboutContent();
    initReviewsSlider();

});
