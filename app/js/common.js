document.addEventListener( 'DOMContentLoaded', function () {

    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
});
function search(){
    // Do something
}
$(window).load(function () {

    var box = $('.productGallery__wrap'); // float-fixed block
    var top = box.offset().top - parseFloat(box.css('marginTop').replace(/auto/, 0));
    var width = parseInt(box.css('width'));
    $(window).scroll(function(){
        var windowpos = $(window).scrollTop();
        if(windowpos < top) {
            box.css('position', 'static');
        } else {
            box.css('position', 'fixed');
            box.css('width', width+'px');
            box.css('top', 0);
        }
    });

    $('.image-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        gallery: {
        enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('#video').magnificPopup({
        items: [
            {
                src: 'https://www.youtube.com/watch?v='+$('iframe')[0].src.match(/\/([a-zA-Z0-9]+)\?/gm)[0].replace(/[\/\?]/g, ''),
                type: 'iframe' // this overrides default type
            }
        ]
    });

    $('.row-radio').find('input').change(function (ev) {
        if (document.querySelector('.otherSize').checked) {
            $('.row.custom').css('display', 'flex')
        } else {
            $('.row.custom').css('display', 'none')
        }
    });

    var input = $($('.searchInp')[0]);

    $('.search_btn').click(function () {
        if (Number.parseInt(input.css('width')) === 0){
            input.css('width', '80%');
            input.focus();
        } else if (input.val().length === 0) {
            input.css('width', "0px")
        } else {
            search()
        }
    });
    input.keydown(function (ev) {
        if (ev.keyCode !== 13) return;
        if (input.val().length === 0) {
            input.css('width', "0px")
        } else {
            search()
        }
    });
});
