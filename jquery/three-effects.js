//animate
// (selector).animate({ styles }, speed, easing, callback)
//(selector).animate({styles},{options})

$("#box").animate({
    width: "400px"
}, {
        duration: 5000,
        easing: "linear",
        step: function (x) {
            $("#demo").text(Math.round(x * 100 / 400) + "%");
        }
    });

