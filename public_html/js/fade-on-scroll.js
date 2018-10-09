/*fade on scroll
autor: Priti
created october 3 2018
*/
// defines how many  pixels  in the viewport breakpoint
const breakpoint = $(".wrapper").width();

/// define the initial width of the view port
let previousWidth = $(window).width();

selectAlphaMode(previousWidth);

$(window).resize(function(){
    let width =  $(window).width();

    if((width < breakpoint && previousWidth >= breakpoint) || (width >= breakpoint && previousWidth < breakpoint)) {
        selectAlphaMode(width);
    }
    previousWidth = width;
});

// toggle scroll bar transparency as per viewport width
function selectAlphaMode(width) {
    if (width < breakpoint) {
        $(document).scroll().off();
        setAlpha(1);
    } else {
        setAlpha(calcAlpha());
        $(document).scroll(function(){
        setAlpha(calcAlpha());
        });
    }

}

// selectAlphaMode(previousWidth);

function setAlpha(alpha) {
    $("nav").css("background-color","rgba(0, 0, 0, " + alpha + ")");
}


// setAlpha(0.5);

function calcAlpha() {

    let alpha = 0;
    // defines a variable for how long to go up in the html document
     // calling the jquery function to pick current scroll location
    let scroll = $(document).scrollTop();
    //at which pixel does the fade start begin
    const fadeStart = 0;

    //at which pixel does the fade stop
    const fadeStop = 200;

    // difference between start and stop
    const fadeLength = fadeStop - fadeStart;
    // transparency level parameter alpha set based on current scroll level 
    if (scroll < fadeStart) {
        alpha = 0;
    } else if (scroll < fadeStop) {
        alpha = (scroll - fadeStart) / fadeLength;
    } else { 
        alpha = 1;
    }
    // returns the transparency alpha level based on scroll position
    return alpha;
}
// jquery call for capturing live scroll event
// $(document).scroll(function() {
//     setAlpha(calcAlpha());
// });

function navToggle() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " dropped";
        
    } else {
        x.className = "topnav";
    }
}







