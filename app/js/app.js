import MicroModal from 'micromodal';

document.addEventListener("DOMContentLoaded", function () {
    const $html = document.querySelector('html');
    let scrollTop = window.pageYOffset;
    
    function hideScroll() {
        document.body.classList.add('block-scroll');
        // Блокировка скролла для Safari
        if (window.innerWidth <= 1024) {
            $html.style.scrollBehavior = 'auto';
            scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
            document.body.style.position = 'fixed';
            document.body.style.top = -scrollTop + 'px';
            $html.style.scrollBehavior = '';
        }
    }

    function showScroll() {
        document.body.classList.remove('block-scroll');

        // Блокировка скролла для Safari
        if (window.innerWidth <= 1024) {
            $html.style.scrollBehavior = 'auto';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            window.scroll(0, scrollTop);
            $html.style.scrollBehavior = '';
        }
    }

    function initMenu() {
        const $header = document.querySelector('.header');
        const $overlay = document.querySelector('.overlay');
        const $headerBtn = document.querySelector('.header__menu-btn');
        const $navigationItems = document.querySelectorAll('.header__navigation>ul>li');
        const $submenus = document.querySelectorAll('.submenu');
        const $navigationItemLinks = document.querySelectorAll('.header__navigation>ul>li>a');
        const ANIMATION_DURATION = 300;
        let isInit = false;

        const toggleMenu = () => {
            $headerBtn.classList.toggle('active');
            $header.classList.toggle('active');
            $html.classList.toggle('overflow-hidden');
        }

        const checkScreenWidth = () => {
            // Активируем меню только на экранах <= 1024
            if (window.innerWidth <= 1024) {
                $headerBtn.addEventListener('click', toggleMenu);
                isInit = true;
            }
        }

        const initHoversOnMenuItem = () => {
            if (window.innerWidth > 1024 && $submenus.length > 0) {
                $submenus.forEach(item => {
                    item.addEventListener('mouseenter', function(e) {
                        if (!$overlay.classList.contains('active')) {
                            $overlay.classList.add('visible');

                            setTimeout(function() {
                                $overlay.classList.add('active');
                            }, 1)
                        }
                    })
                })
                document.body.addEventListener('mousemove', function(e) {
                    if (!e.target.closest('.header__navigation li') && $overlay.classList.contains('active')) {
                        $overlay.classList.remove('active');
                        $overlay.classList.remove('visible')
                    }
                })
            }
        }

        const initMobileDropdownMenu = () => {
            if (window.innerWidth <= 1024) {
                const $menuItems = document.querySelectorAll('.header__navigation ul li a'); 
                $menuItems.forEach(item => {
                    item.addEventListener('click', function(e) {
                        if (item.nextElementSibling?.tagName === 'UL') {
                            e.preventDefault();
                            item.closest('li').classList.toggle('active');
                        }
                    })
                })
            }
        }

        window.addEventListener('resize', checkScreenWidth);
        
        checkScreenWidth();
        initHoversOnMenuItem();
        initMobileDropdownMenu();
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
                        const element = btn.closest('.info-component');

                        parent.classList.remove('opened');
                        buttonText.textContent = SHOW_MORE;
                        
                        element.scrollIntoView({block: "center", behavior: "auto"});
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
        const $reviewsSlider = document.querySelector('.reviews-slider');
        if ($reviewsSlider) {
            const reviewsSlider = new Swiper('.reviews-slider', {
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
    }

    function initModals() {
        const $header = document.querySelector('.header');
        const $modals = document.querySelectorAll('.modal');
        const $modalsTriggers = document.querySelectorAll('[data-micromodal-trigger]');
        const $modalOverlays = document.querySelectorAll('.modal__overlay');

        $modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', function(e) {
                const modalId = overlay.closest('.modal').id;
                
                if (e.target.classList.contains('modal__container') || e.target.classList.contains('modal__overlay')) {
                    MicroModal.close(modalId);
                }
            })
        })
        
        $modalsTriggers.forEach(item => {
            item.addEventListener('click', (e) => e.preventDefault());
        })

        if ($modals.length > 0) {
            MicroModal.init({
                onShow: (modal) => {
                    hideScroll();
                    $header.style.pointerEvents = 'none';
                },
                onClose: (modal) => {
                    showScroll();
                    setTimeout(() => $header.style.pointerEvents = '', 500)
                },
                disableFocus: true,
                openClass: 'is-open', 
            });
        }
    }

    function disableTransitionsBeforePageLoading() {
        if (document.body.classList.contains('preload')) {
            document.body.classList.remove('preload');
        }
    }

    function initAccordions() {
        const $accordionsButtons = document.querySelectorAll(".accordion__btn");

        if ($accordionsButtons.length > 0) {
            $accordionsButtons.forEach(item => {
                item.addEventListener("click", function() {
                    this.parentNode.classList.toggle("active");
                    const content = this.nextElementSibling;

                    if (content.style.maxHeight){
                        content.style.maxHeight = null;
                    } else {
                        let contentPadding = this.classList.contains('blog-questions__name') ? 56 : 0; // Паддинги сверху и снизу для корректного вычисления высоты, в других аккордионах паддинги не учитываются
                        
                        content.style.maxHeight = content.scrollHeight + contentPadding + "px";
                    }

                }); 
            })
        }
    }

    disableTransitionsBeforePageLoading();
    initMenu();
    initModals();
    initStarRating()

    initToggleVisibleAboutContent();
    initReviewsSlider();
    initAccordions();
});
