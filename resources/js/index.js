$(document).ready(function () {
    // start section instead of header
    var targetOffset = $('.section').offset();
    $(window).scrollTop(targetOffset.top);

    // load overlay
    $('#overlay').css('display', 'block');

    // typed introduction
    $(function () {
        $("#overlay_intro").typed({
            strings: ["Hi. ^500 I'm John."],
            typeSpeed: 50,
            startDelay: 1000
        });
    });

    // smooth scrolling for anchor links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // fade in overlay links
    $('.fade').delay(3000).fadeIn(500);
    
    // fade out overlay on portflio click
    $('#portfolio-link').on('click', function() {
        $('#overlay').fadeOut(500);
        $('.box_title').fadeIn(500);
    });
    
    // adjust first box size to get rid of filler
    var num_boxes = $('.box').length;
    var box_width = parseFloat($('.box').first().css('width')) / parseFloat($('.section').first().css('width'));
    var rows_per_box = Math.round(1/box_width);
    if (num_boxes % rows_per_box != 0) {
        var extra_boxes = num_boxes % rows_per_box;
        
        // get new width in percentage
        var section_width = parseFloat($('.section').first().css('width'));
        var new_width = 100 / extra_boxes;
        
        // set extra boxes to new width, starting with first box
        for(var i=0; i<extra_boxes; ++i) {
            $('.box:nth-child(' + i+1 + ')').css('width', new_width.toString() + '%');
        }
        
//        $('.box').first().css('width', new_width.toString()+"%");
    }
});
