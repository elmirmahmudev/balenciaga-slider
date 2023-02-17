$(document).ready(function () {
    function moveToSelected(element) {

        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

        $('iframe').css({ display: "none" });
        $('img').css({ display: "block" });
        setTimeout(() => {
            $('.selected').find('iframe').css({ display: "block" });
            $('.selected').find('img').css({ display: "none" });
        }, 500)

    }

    // Eventos teclado
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

    // var iframe = $('#carousel div iframe')[0];
    // console.log(iframe);
    // iframe.document.addEventListener('click', function (event) {
    //     console.log(event);
    // }, false);

    $(function () {
        $("#myFrame").click(function () {
            // document.getElementById("myFrame").contentWindow.addEventListener('click', function (event) {
            //     console.log(event);
            // }, false);;
            console.log("00");
        });
    });

    $('#carousel div').click(function () {
        moveToSelected($(this));
    });

    $('#prev').click(function () {
        moveToSelected('prev');
    });

    $('#next').click(function () {
        moveToSelected('next');
    });
})
