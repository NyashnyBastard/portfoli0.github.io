$(document).ready(function() {
    // По умолчанию показываем коллекцию "Лэндинг"
    $('.collection.landing').addClass('active');

    // Обрабатываем клик на кнопках
    $('.buttons button').click(function() {
        // Удаляем класс "active" у всех кнопок и коллекций
        $('.buttons button').removeClass('active');
        $('.collection').removeClass('active');

        // Добавляем класс "active" выбранной кнопке и коллекции
        const category = $(this).data('category');
        $(this).addClass('active');
        $(`.collection.${category}`).addClass('active');
    });
});

function toggleButton(button) {
    if (activeButton === button) {
        // Если текущая кнопка уже активна, снимаем активное состояние
        button.classList.remove("active");
        activeButton = null;
    } else {
        // Если другая кнопка активна, снимаем ее активное состояние
        if (activeButton !== null) {
            activeButton.classList.remove("active");
        }
        // Добавляем активное состояние к текущей кнопке
        button.classList.add("active");
        activeButton = button;
    }
}

$(document).ready(function() {
    var slider = $('#slider ul');
    var slideWidth = $('#slider').width();
    var currentSlide = 0;
    var totalSlides = slider.find('li').length;

    // Установка ширины слайдов
    slider.find('li').width(slideWidth);

    // Автоматическое прокручивание слайдов каждые 4 секунды
    setInterval(function() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
            slider.css('margin-left', '0'); // Возвращаемся к первому слайду
        }
        slider.animate({ 'margin-left': -slideWidth * currentSlide }, 500);
    }, 4000);
});



$(document).ready(function() {
    var slider = $('#slider2 ul');
    var slideWidth = $('#slider2').width();
    var currentSlide = 0;
    var totalSlides = slider.find('li').length;

    // Установка ширины слайдов
    slider.find('li').width(slideWidth);

    // Автоматическое прокручивание слайдов каждые 4 секунды
    setInterval(function() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
            slider.css('margin-left', '0'); // Возвращаемся к первому слайду
        }
        slider.animate({ 'margin-left': -slideWidth * currentSlide }, 500);
    }, 4000);
});