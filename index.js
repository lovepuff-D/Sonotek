"use strict"

//Реализация бургер меню
;(function () {
    let btnOpenMenu = document.querySelector('.nav-burger__btn');
    let links = document.querySelector('nav');
    let bgLinks = document.querySelector('.bg-nav');
    let btnCallBack = document.querySelector('.btn__callback');
    let navLinkElement = document.querySelectorAll('header .nav-link');
    //Открытие - закрытие
    btnOpenMenu.addEventListener('click', openMenu)
    function openMenu() {
        links.style.transform = 'translateX(0px)';
        bgLinks.style.transform = 'translateX(0px)';
        //Смена иконки при открытии и закртытии + цвет
        // this.style.backgroundColor = 'transparent'
        this.removeEventListener('click', openMenu)
        this.classList.add('burger-close')
        this.addEventListener('click', closeMenu)
    }
    function closeMenu() {
        links.style.transform = 'translateX(1000px)';
        bgLinks.style.transform = 'translateX(1000px)';
        // this.style.backgroundColor = '#477942'
        this.addEventListener('click', openMenu)
        this.classList.remove('burger-close');
    }
    //Автозакрытие, после нажатия на ссылку с id
    for (let elem of navLinkElement) {
        elem.addEventListener('click', function () {
            links.style.transform = 'translateX(1000px)';
            bgLinks.style.transform = 'translateX(1000px)';
            // this.style.backgroundColor = '#477942'
            btnOpenMenu.addEventListener('click', openMenu)
            btnOpenMenu.classList.remove('burger-close');
        });
    }
})();

//Слайдер
;(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slider-left'),
        nextArrow: $('.slider-right'),
    });
})();

//Кнопка показать ещё
;(function () {
    let buttonShowAll = document.querySelector('.btn-show-all');
    let blockProduct = document.querySelector('.tab-content');
    let sumHeight = 0
    let heightAtMoment = 0;
    buttonShowAll.addEventListener('click', function open() {
        let originalHeight = blockProduct.scrollHeight
        blockProduct.style.height = originalHeight + 'px'
        this.textContent = 'Скрыть'
        buttonShowAll.removeEventListener('click', open);
        this.addEventListener('click', function close() {
            this.textContent = 'Показать ещё'
            blockProduct.style.height = 930 + 'px';
            buttonShowAll.removeEventListener('click', close);
            buttonShowAll.addEventListener('click', open)
        })
    })


    // //Скрипт для того, чтобы высота адаптировалась под блоки, независимо от их высоты
    // let navTabsElements = document.querySelector('.nav-tabs');
    // let navLinksElements = navTabsElements.querySelectorAll('.nav-link');
    // let navTabPaneElements = document.querySelectorAll('.tab-content .tab-pane');
    //
    // for (let navLink of navLinksElements) {
    //     navLink.addEventListener('click', autoHeight)
    // }
    //
    // function autoHeight() {
    //     sumHeight = 0
    //
    //     let href = this.href.split('');
    //     let correctHref = href.slice(href.indexOf('#') + 1).join('')
    //     //console.log(href.indexOf('#'))
    //     // Находит в href "#" чтобы найти его позицию и вырезать нужное слово
    //
    //     for (let tabPane of navTabPaneElements) {
    //         if (tabPane.id == correctHref) {
    //             let productItem = tabPane.querySelectorAll('.product-item:nth-child(odd):nth-child(-n + 4)')
    //             for (let elem of productItem) {
    //                 // console.log(elem.offsetHeight, 'высота элеме')
    //                 sumHeight += elem.offsetHeight
    //                 heightAtMoment = sumHeight
    //                 // console.log(sumHeight)
    //             }
    //             console.log(sumHeight, 'Высота двух элементов')
    //             console.log(tabPane)
    //             // document.querySelector('.tab__wrapper').style.overflow = 'hidden'
    //             blockProduct.style.height = sumHeight + 60 + 'px';
    //         }
    //     }
    // }

})();

//"Поля обязательные для запоплнения" для fancybox3
;(function () {
    let forms = document.querySelectorAll('form')
    let inputRequireFields = document.querySelectorAll('input[data-required-field]')
    //Атрибут data-required-field - отвечает за обязательность заполнения поля

    console.log(inputRequireFields)
    for (let form of forms) {
        form.addEventListener('submit', function (event) {
            for (let input of inputRequireFields) {
                if (document.querySelector('#alert-form') !== null) {
                    document.querySelector('#alert-form').remove();
                }
            }
            for (let input of inputRequireFields) {
                if (input.value.length == 0) {
                    let span = document.createElement('span');
                    //Стили
                    span.id = 'alert-form'
                    span.textContent = 'Поле обязательно для заполнения'
                    span.style.color = 'red';
                    span.style.position = 'relative'
                    span.style.top = '-15px'
                    //
                    input.after(span);
                    event.preventDefault();
                }
            }
        })
    }
})();

//Автоматическая подгонка высоты меню
;(function () {
    let btnOpenMenu = document.querySelector('.nav-burger__btn');
    let advElement = document.querySelector('.start-block__advantage_wrapper')
    let bgNavElement = document.querySelector('.bg-nav')
    bgNavElement.style.height = advElement.offsetTop + "px"
    btnOpenMenu.addEventListener('click', autoHeight)
    window.addEventListener('resize', autoHeight)
    function autoHeight() {
        bgNavElement.style.height = advElement.offsetTop + "px"
    }
})();


