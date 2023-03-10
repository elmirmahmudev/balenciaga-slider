$(document).ready(function () {
    function updateTitle() {
        var selectedTitle = $('.selected').find('.carousel__item-title-hidden > a');
        console.log(selectedTitle);
        $('.carousel__item-title').html(selectedTitle.clone())
    }
    function moveToSelected(element) {
        var carousel = $("#carousel");

        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();

        var nextSecond = $(next).next();
        var prevSecond = $(prev).prev();

        if (nextSecond.next().length === 0) {
            var firstChild = $("#carousel > div:first-child");
            carousel.append(firstChild);
        }

        if (prevSecond.prev().length === 0) {
            var lastChild = $("#carousel > div:last-child");
            carousel.prepend(lastChild);
        }

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

        $('iframe').css({ display: "none" });
        // $('.carousel__item-title').css({ display: "none" });
        $('img').css({ display: "block" });
        setTimeout(() => {
            $('.selected').find('iframe').css({ display: "block" });
            // $('.selected').find('.carousel__item-title').css({ display: "block" });
            $('.selected').find('img').css({ display: "none" });
        }, 1000)
        var barWidth =
            (($('#carousel').find('.selected').attr("id").split("_")[1]) /
                $('#carousel').children().length) * 100
        $('#slider-progress-bar').css({ width: barWidth + "%" });

        updateTitle();

    }

    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                moveToSelected('prev');
                break;

            case 39: // right
                moveToSelected('next');
                break;

            default: return;
        }
        e.preventDefault();
    });

    $('#carousel > div').click(function () {
        moveToSelected($(this));
    });

    $('#prev').click(function () {
        moveToSelected('prev');
    });

    $('#next').click(function () {
        moveToSelected('next');
    });

    $(".carousel__item-title").on("click", function (event) {
        event.stopPropagation();
    });

    updateTitle();

})
