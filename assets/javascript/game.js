
// --Game Process--
// 1. User vists site
// 2. Values are set for the RNG (Should be between 19 - 120)
// 3. Values are set for the buttons/crystals (Should be between 1 - 12)
// 4. User presses/clicks 1 of 4 buttons
// 5. Value from button/crystal updates total score
// 6. User presses/clicks 1 of 4 buttons again
// 7. Value updates in total score from previous action
// 8.1. If player reaches exact value in RNG player wins, score in win increases, game reset
// 8.2. Else if player goes above the value in RNG player loses, score in losses increase, game reset
// 9. When game resets, Total score resets to 0 and value for RNG and crystals randomizes
// 10. Play again?


$(document).ready(function () {

    // Varibles

    var crystalNumber1 = Math.floor(Math.random() * 5) + 1;
    var crystalNumber2 = Math.floor(Math.random() * 6) + 1;
    var crystalNumber3 = Math.floor(Math.random() * 10) + 1;
    var crystalNumber4 = Math.floor(Math.random() * 12) + 1;

    $("#crystal1").val(crystalNumber1)
    $("#crystal2").val(crystalNumber2)
    $("#crystal3").val(crystalNumber3)
    $("#crystal4").val(crystalNumber4)

    var gameNumber = Math.floor(Math.random() * 101) + 19;

    var userScore = 0;
    var win = 0;
    var losses = 0;

    $("#user-score").text("Your Score: " + userScore);
    $("#computer-number").text("Target: " + gameNumber);
    $("#win").text("Wins: " + win);
    $("#losses").text("Losses: " + losses);


    // Console log
    console.log(crystalNumber1)
    console.log(crystalNumber2)
    console.log(crystalNumber3)
    console.log(crystalNumber4)
    console.log(gameNumber)
    console.log(userScore)
    console.log(win)
    console.log(losses)

    // Functions

    $("#crystal1").click(function (event) {

        var crystalValue = event.target.value
        userScore = userScore + crystalNumber1;

        $("#user-score").text("Your score: " + userScore);
        console.log(crystalNumber1)

        if (userScore === gameNumber) {
            won();
        }
        if (userScore > gameNumber) {
            loss();
        }
    });


    $("#crystal2").click(function (event) {

        var crystalValue = event.target.value
        userScore = userScore + crystalNumber2;
        $("#user-score").text("Your score: " + userScore);

        console.log(crystalNumber2)

        if (userScore === gameNumber) {
            won();
        }
        if (userScore > gameNumber) {
            loss();
        }
    });

    $("#crystal3").click(function (event) {

        var crystalValue = event.target.value
        userScore = userScore + crystalNumber3;
        $("#user-score").text("Your score: " + userScore);

        console.log(crystalNumber3)

        if (userScore === gameNumber) {
            won();
        }
        if (userScore > gameNumber) {
            loss();
        }
    });

    $("#crystal4").click(function (event) {

        var crystalValue = event.target.value
        userScore = userScore + crystalNumber4;
        $("#user-score").text("Your score: " + userScore);

        console.log(crystalNumber4)

        if (userScore === gameNumber) {
            won();
        }
        if (userScore > gameNumber) {
            loss();
        }
    });

    function won() {
        win++
        $("#win").text("Wins: " + win);
        $("#computer-number").empty();
        $("#user-score").empty();
        resetGame();
    }

    function loss() {
        losses++
        $("#losses").text("Losses: " + losses);
        $("#computer-number").empty();
        $("#user-score").empty();
        resetGame();
    }

    function resetGame() {
        crystalNumber1 = Math.floor(Math.random() * 12) + 1;
        crystalNumber2 = Math.floor(Math.random() * 12) + 1;
        crystalNumber3 = Math.floor(Math.random() * 12) + 1;
        crystalNumber4 = Math.floor(Math.random() * 12) + 1;

        $("#crystal1").val(crystalNumber1)
        $("#crystal2").val(crystalNumber2)
        $("#crystal3").val(crystalNumber3)
        $("#crystal4").val(crystalNumber4)

        gameNumber = Math.floor(Math.random() * 101) + 19;
        userScore = 0;

        $("#user-score").text("Your Score: " + userScore);
        $("#computer-number").text("target: " + gameNumber);
    }
});