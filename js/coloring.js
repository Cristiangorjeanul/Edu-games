$(function () {

    var $svgDrawing = $('#svg');
    var $selectImage = $('#images');
    var $selectColor = $('#colors');
    var color = $selectColor[0].value;

    $selectImage.change(function (event) {
        $svgDrawing.load(event.target.value);
    });

    $selectColor.change(function (event) {
        color = event.target.value;
    });

    $svg.click(function (event) {
        event.target.style.fill = color;
    });

});