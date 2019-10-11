// VARIABLES,
    // questions
var questions = [
    {
        title: "1.) What is the overall end point/goal of the game?",
        choices: ["to escape planet", "to colonize tribes", "to survey for resources", "to start a new world"],
        answer: "to escape planet"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
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
}

function startState() {
    // youSuck();
    $("#questionSpot").html("These questions will test your knowledge on surviving Rimworld. Topics that will be covered range from colony sustenance, hostile planet inhabitants, and R&D while you're on the field. Good luck!");
};







// EVENTS ---------------------------------------------------------------------------------------
    // 1. click start quiz button
        // >> moves you to the first question (step3)  

$("#startQuizButton").on("click", function(){
    // youSuck();
    $(".startStateButtons").empty();
    $("#questionSpot").empty();
    $("#quizHeader").empty();
    // ^^^ all functions clear out the current spots to make way for the new data ---------------


    var questionGen = $("<div>");
    questionGen.addClass("questions");
    questionGen.html(questions[0].title);
    $("#questionSpot").append(questionGen);
    

    for (i = 0; i < questions[0].choices.length; i++) {

        var answerTable = $("<div>");
        answerTable.addClass("questionText");
        $("#answerSpot").append(answerTable);
        var answersGen = $("<button>");
        answersGen.html("hoyooyoyyoy");
        $(answerTable).append(answersGen);

        
    };
        
    
   

})



    // 2. click high score button
        // 2b. clear high scores button
            // this clears local storage
        // 2c. likely another button to bring you back to the main page

    // 3. choose question answers
        // >> parse the variables to be selectable answers
        // >> stores answer in local storage and moves to next question
        // >> also checks to see if answers now in local storage are correct

    // 4. enter initials and submit score -> goes to high score page



// INIT -----------------------------------------------------------------------------------------

startState ();