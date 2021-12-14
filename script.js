$(document).ready(function() {

    var nounArr = ["your mom", "bird", "sandbox"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        
    });
});