$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var random_result;
    var previous = 0;

    var resetStart = function () {
        $(".crystals").empty();

        var images = [
            'assets/images/pokeball.png', 
            'assets/images/greatball.png', 
            'assets/images/ultraball.png', 
            'assets/images/loveball.png'];

        random_result = Math.floor(Math.random() * 69) + 30;

        // console.log(random_result);

        $("#randomNumber").text('Random Result: ' + random_result);

        for (i = 0; i < 4; i++) {

            var random = Math.floor(Math.random() * 11) + 1;
            // console.log(random);
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",

            });
            $(".crystals").append(crystal);
        }
    }

    resetStart();

    $(document).on('click', ".crystal", function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

        if (previous > random_result) {
            // console.log("You lost!");
            losses++;
            $("#losses").text('Losses: ' + losses);
            previous = 0;
            resetStart();
        }
        else if (previous === random_result) {
            // console.log("You win!");
            wins++;
            $("#wins").text('Wins: ' + wins);
            previous = 0;
            resetStart();
        }
        $(".yourScore").text('Your Score: ' + previous);
    });

});