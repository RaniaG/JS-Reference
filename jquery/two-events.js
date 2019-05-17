$("input").blur(function () {
    alert("This input field has lost its focus.");
});


$("p").dblclick(function () {
    alert("The paragraph was double-clicked");
});

$("a").click(function (event) {
    event.preventDefault();
});

$("span").click(function (event) {
    event.stopPropagation();
    alert("The span element was clicked.");
});
$("p").click(function (event) {
    alert("The p element was clicked.");
});
$("div").click(function () {
    alert("The div element was clicked.");
});


function changeSize() {
    $(this).animate({ fontSize: "+=10px" });
}

function changeSpacing() {
    $(this).animate({ letterSpacing: "+=5px" });
}

$("p").on("click", changeSize);
$("p").on("click", changeSpacing);
$("button").click(function () {
    $("p").off("click", changeSize);
});


$("input").select(function () {
    alert("Text marked!");
});

$("button").click(function () {
    $("input").trigger("select"); //triggers an event on the selected input
});

//hover
//focus
//focusin
//focusout
