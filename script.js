$(document).ready(function() {

    var nounArr = ["momument", "hockey puck", "orange", "window", "television"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        
    });
    var adjectiveArr = ["skinny", "boring", "sensible", "dominant", "divine"];

    $("button").click(function() {
        $(".adjective").each(function() {
            var randomIndex = Math.floor(Math.random() * adjectiveArr.length);
            $(this).text(adjectiveArr[randomIndex]);
        });

      });
  
      var verbArr = ["stretch", "retire", "praise", "shout", "fight"];

      $("button").click(function() {
          $(".verb").each(function() {
              var randomIndex = Math.floor(Math.random() * verbArr.length);
              $(this).text(verbArr[randomIndex]);
          });
  
        });
});
    

