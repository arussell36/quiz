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
    // youSuck();
    $("#questionSpot").html("These questions will test your knowledge on surviving Rimworld. Topics that will be covered range from colony sustenance, hostile planet inhabitants, and R&D while you're on the field. Good luck!");
};










// EVENTS -------------------------------------------------------------------------------------------------
    // 1. click start quiz button
        // >> moves you to the first question (step3)  

    // 2. click high score button
        // 2b. clear high scores button
            // this clears local storage
        // 2c. likely another button to bring you back to the main page



$("#startQuiz").on("click", function() {
    // youSuck();
    

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
        var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion");
        answersGen.html(questions[questionCount].choices[i]);
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

    var questionGen = $("<div>").addClass("questions");
    questionGen.html(questions[questionCount].title);
    $("#questionSpot").append(questionGen);


    for (i = 0; i < questions[questionCount].choices.length; i++) {

        var answerTable = $("<div>").addClass("questionDiv");
        $("#answerSpot").append(answerTable);
        // creates a table that the new child elements can attach to with the correct formating -----------
        var answersGen = $("<button>").addClass("questionText").attr("id", "nextQuestion");
        answersGen.html(questions[questionCount].choices[i]);
        $(answerTable).append(answersGen);


        };      
        questionCount = questionCount + 1;
        console.log(questionCount);

});






 


