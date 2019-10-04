$(document).ready(function () {

    flatpickr("#date-in", {
        defaultDate: new Date(),
        locale: "ru",
        altInput: true,
        altFormat: "d F",
        minDate: "today",

    });
    flatpickr("#date-out", {
        // defaultDate: new Date(),
        locale: "ru",
        altInput: true,
        altFormat: "d F",
        minDate: "today",

    });

    $('.counter .number_controls > img').on('click', function () {
        var input = $(this).closest('.counter').find('input');
        var value = parseInt(input.val()) || 0;
        if ($(this).hasClass('nc-minus')) {
            if (value > 0) {
                value = value - 1;
            }
        }
        if ($(this).hasClass('nc-plus')) {
            value = value + 1;
        }
        input.val(value).change();
    });

    $('#add-btn').on('click', function(){
        alert('You pressed add button');
    });

    $('#search-btn').on('click', function(){
        alert('You pressed search button');
    });
})