// VARIABLES,
    // questions
var questions = [
    {
        title: "1.) What is the overall end point/goal of the game?",
        choices: ["A. to colonize tribes", "B. to escape planet", "C. to survey for resources", "D. to start a new world"],
        answer: "B. to escape planet"
    },
    {
        title: "2.) Unmodded what is the fastest growing pawn edible crop in Rimworld?",
        choices: ["A. Corn", "B. Rice", "C. Potato", "D. Hay"],
        answer: "B. Rice"
    },
    {
        title: "3.) What is the currency used in Rimworld?",
        choices: ["A. Gold", "B. Silver", "C. Coins", "D. Food"],
        answer: "B. Silver"
    },
    {
        title: "4.) Unmodded how many permanently hostile factions are there?",
        choices: ["A. 0 Factions", "B. 1 Faction", "C. 2 Factions", "D. 3 Factions"],
        answer: "B. 1 Faction"
    },
    {
        title: "5.) Unmodded what is the first hostile entity that attacks your colony?",
        choices: ["A. Another Faction", "B. A Maddened Animal", "C. An Activated Robot", "D. Native Wild People"],
        answer: "B. A Maddened Animal"
    },
    {
        title: "6.) How many days are in a quadrum",
        choices: ["A. 10", "B. 15", "C. 25", "D. 50"],
        answer: "B. 15"
    }];

var questionCount = 0;


    // an array of questions
    // question = string
    // choices = array
    // answer = string
    // key = number (to store to LS)

    // answers


// HELPER FUNCTIONS ---------------------------------------------------------------------------

// you suck checker alert lol
function youSuck() {
    alert("yousuck");
};

function init() {
    questionCount = 0;
    // youSuck();
    $(".startStateButtons").empty();
    $("#questionSpot").empty();
    $("#quizHeader").empty();
    $("#answerSpot").empty();


    $("#questionSpot").html("These questions will test your knowledge on surviving Rimworld. Topics that will be covered range from colony sustenance, hostile planet inhabitants, and R&D while you're on the field. Good luck!");
    $("#quizHeader").html("Rimworld Quiz");
    var startQuiz = $("<button>").attr("id", "startQuiz").text("Start Quiz");
    var highScore = $("<button>").attr("id", "highScore").text("High Scores");
    $(".startStateButtons").append(startQuiz);
    $(".startStateButtons").append(highScore);


};



var totalTime = 0;

function startTimer() {
    var setTime = 60;
    var timeSpent = 0;
    var timerDiv = $("<div>").attr("id", "time");
    $("#timerSpot").append(timerDiv);
    if (questionCount < 2) {

        setInterval(function () {      
            timeSpent = timeSpent + 1;
            totalTime = setTime - timeSpent;
            // console.log(totalTime);  
            $("#time").text(totalTime + " time left");      
        }, 1000);
        
      };

    };

function stopTimer() {
    clearInterval();
}
    


// EVENTS -------------------------------------------------------------------------------------------------
    // 1. click start quiz button
        // >> moves you to the first question (step3)  

    // 2. click high score button
        // 2b. clear high scores button
            // this clears local storage
        // 2c. likely another button to bring you back to the main page



$(".startStateButtons").on("click","#startQuiz", function() {
    // youSuck();


    setInterval(startTimer(), 1000);
    $(".startStateButtons").empty();
    $("#questionSpot").empty();
    $("#quizHeader").empty();
    $("#answerSpot").empty();
    // ^^^ all functions clear out the current spots to make way for the new data ------------------------






    var questionGen = $("<div>").addClass("questions");
    questionGen.html(questions[questionCount].title);
    $("#questionSpot").append(questionGen);


    for (i = 0; i < questions[questionCount].choices.length; i++) {

        var answerTable = $("<div>").addClass("questionDiv");
        $("#answerSpot").append(answerTable);
        // creates a table that the new child elements can attach to with the correct formating -----------
        if (i === 1) {
            var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion1")
            answersGen.html(questions[questionCount].choices[i]);
        } else {
            var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion")
            answersGen.html(questions[questionCount].choices[i]);
        }

        $(answerTable).append(answersGen);
        };      
        questionCount = 1;


        // console.log(questionCount);
});



    

    // 3. choose question answers
        // >> parse the variables to be selectable answers
        // >> stores answer in local storage and moves to next question
        // >> also checks to see if answers now in local storage are correct

    // 4. enter initials and submit score -> goes to high score page



// INIT -----------------------------------------------------------------------------------------

init();


// QUESTIONS LOOPS ------------------------------------------------------------------------------

$("#answerSpot").on("click","#nextQuestion", function() {
    // youSuck();
        
    $("#questionSpot").empty();
    $("#answerSpot").empty();

    // console.log(totalTime);

    var questionGen = $("<div>").addClass("questions");
    questionGen.html(questions[questionCount].title);
    $("#questionSpot").append(questionGen);


    for (i = 0; i < questions[questionCount].choices.length; i++) {
        // console.log(questions[questionCount].choices);   
        var answerTable = $("<div>").addClass("questionDiv");
        $("#answerSpot").append(answerTable);
        // creates a table that the new child elements can attach to with the correct formating -----------
        
        if (i === 1) {
            var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion1")
            answersGen.html(questions[questionCount].choices[i]);
        } else {
            var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion")
            answersGen.html(questions[questionCount].choices[i]);
        }

        $(answerTable).append(answersGen);

        if (questionCount === 5) {
            answersGen.attr("id", "lastQuestion");
        };



        // if (questions[questionGen].choice[i] = 1)
        //     answersGen.attr("id", "nextQuestion 1");

        // console.log(questionCount);
    }

    questionCount = questionCount + 1;

});

$("#answerSpot").on("click","#nextQuestion1", function() {
    // youSuck();
        
    $("#questionSpot").empty();
    $("#answerSpot").empty();

    totalTime = totalTime + 5;
    // console.log(totalTime)

    var questionGen = $("<div>").addClass("questions");
    questionGen.html(questions[questionCount].title);
    $("#questionSpot").append(questionGen);


    for (i = 0; i < questions[questionCount].choices.length; i++) {
        // console.log(questions[questionCount].choices);   
        var answerTable = $("<div>").addClass("questionDiv");
        $("#answerSpot").append(answerTable);
        // creates a table that the new child elements can attach to with the correct formating -----------
        
        if (i === 1) {
            var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion1")
            answersGen.html(questions[questionCount].choices[i]);
        } else {
            var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion")
            answersGen.html(questions[questionCount].choices[i]);
        }

        $(answerTable).append(answersGen);

        if (questionCount === 5 && i === 1) {
            answersGen.attr("id", "lastQuestion1");
        } else if (questionCount === 5) {
            answersGen.attr("id", "lastQuestion");
        };



        // if (questions[questionGen].choice[i] = 1)
        //     answersGen.attr("id", "nextQuestion 1");

        // console.log(questionCount);
    }

    questionCount = questionCount + 1;

});


var overallScore = "";


$("#answerSpot").on("click","#lastQuestion", function() {
    // youSuck();

    overallScore = totalTime
    
    $("#questionSpot").empty();
    $("#answerSpot").empty();
    stopTimer();
    $("#timerSpot").empty();

    var subjectHeader = $("<div>").addClass("questions");
    subjectHeader.html("Quiz Complete!");
    $("#questionSpot").append(subjectHeader);


    var scoreDiv = $("<div>").addClass("questionDiv");
    scoreDiv.html("Your Overall Score Is ");
    $("#answerSpot").append(scoreDiv);


    var scoreTable = $("<div>").attr("class", "questionDiv");
    var nameSpot = $("<input>").attr("type", "text").attr("id", "names");
    var submitForm = $("<button>").attr("id", "highScore").attr("class", "storeLS");
    submitForm.text("Submit");

    $("#answerSpot").append(scoreTable);
    $(scoreTable).append(nameSpot);
    $(scoreTable).append(submitForm);


});

$("#answerSpot").on("click","#lastQuestion1", function() {
    // youSuck();
    overallScore = totalTime + 5;

    $("#questionSpot").empty();
    $("#answerSpot").empty();
    stopTimer();
    $("#timerSpot").empty();

    var subjectHeader = $("<div>").addClass("questions");
    subjectHeader.html("Quiz Complete!");
    $("#questionSpot").append(subjectHeader);


    var scoreDiv = $("<div>").addClass("questionDiv");
    scoreDiv.html("Your Overall Score Is ");
    $("#answerSpot").append(scoreDiv);


    var scoreTable = $("<div>").attr("class", "questionDiv");
    var nameSpot = $("<input>").attr("type", "text").attr("id", "names");
    var submitForm = $("<button>").attr("id", "highScore").attr("class", "storeLS");
    submitForm.text("Submit");

    $("#answerSpot").append(scoreTable);
    $(scoreTable).append(nameSpot);
    $(scoreTable).append(submitForm);


});


var finalArray = [];

// -------- SAVES ENTERED INFO AND THEN CLEARS THE PAGE FOR HS --------------------------------------------------------
$("#answerSpot").on("click",".storeLS", function() {
    // youSuck();

    var storedName = $("#names").val();
    var storedFinal = storedName + " " + overallScore;
    
    finalArray.push(storedFinal);

    localStorage.setItem("people", finalArray);
    
    // console.log(storedName);

});


$("#answerSpot").on("click","#highScore", function() {
    // youSuck();

    // console.log(finalArray);
    $(".startStateButtons").empty();
    $("#questionSpot").empty();
    $("#quizHeader").empty();
    $("#answerSpot").empty();

    var subjectHeader = $("<div>").addClass("questions");
    subjectHeader.html("Rimworld High Scores");
    $("#questionSpot").append(subjectHeader);


    for (i = 0; i < finalArray.length; i++) {

        var scoreName = $("<li>").attr("class", "questionDiv");
        scoreName.text(finalArray[i]);
        $("#answerSpot").append(scoreName);
    

    };
        

    var startQuiz = $("<button>").attr("id", "home");
    var clearScores = $("<button>").attr("id", "wipe");
    startQuiz.text("Home");
    clearScores.text("Clear Scores");

    $(".startStateButtons").append(startQuiz);
    $(".startStateButtons").append(clearScores);


});


$(".startStateButtons").on("click","#home", function() {
    init();
});

$(".startStateButtons").on("click","#wipe", function() {
    localStorage.clear();
    $("#answerSpot").empty();
});


// $(".startStateButtons").on("click","#highScore", function() {
//     // youSuck();

//     var storedName = $("#names").html();
//     localStorage.setItem("name", storedName);
//     console.log(storedName);

//     $("#questionSpot").empty();
//     $("#answerSpot").empty();

//     var subjectHeader = $("<div>").addClass("questions");
//     subjectHeader.html("Rimworld High Scores");
//     $("#questionSpot").append(subjectHeader);

// });


 


