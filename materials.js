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