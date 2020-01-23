// I decided to use JSON to convert my javascript objects and to store and grab data


// applies the style to the page
Survey.StylesManager.applyTheme("modern");

var codeQuiz = {
    title: "Code Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 60,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",

// questions will start here

    pages: [
        {
// This page will be the starting point for the quiz. It will also hold the start quiz button.
            questions: [
                {
                    type: "html",
                    html:
                        "You are about to start this quiz about coding. <br/>You have 10 seconds for every question and 60 seconds for the whole quiz of 6 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
// Question 1
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "anchor",
                    title: "What does an anchor tag look like?",
                    choices: [
                        "<p></p>",
                        "<img></img>",
                        "<a></a>",
                        "#anchor",
                    ],
                    correctAnswer: "<a></a>"
                }
            ]
        },
// Question 2
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "css",
                    title: "What does CSS stand for?",
                    choicesOrder: "random",
                    choices: [
                        "Carrot Spicy Soup",
                        "Client Side Storage",
                        "Cascading Style Sheets",
                        "Container Style Sheets"
                    ],
                    correctAnswer: "Cascading Style Sheets"
                }
            ]
        },
//Question 3
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "jquery",
                    title: "What is jQuery?",
                    choicesOrder: "random",
                    choices: [
                        "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax",
                        "A style sheet language used for describing the presentation of a document written in a markup language like HTML",
                        "A high-level, just-in-time compiled, object-oriented programming language that conforms to the ECMAScript specification.",
                        "I dont know...do you..?",
                    ],
                    correctAnswer: "A JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax"
                }
            ]
        },
// Question 4
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "selector",
                    title: "How do you start a jQuery selector?",
                    choicesOrder: "random",
                    choices: [
                        "$",
                        "---->",
                        ":)",
                        "<href>"
                    ],
                    correctAnswer: "$"
                }
            ]
        },
// Question 5
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "H T M L",
                    title: "What does HTML stand for?",
                    choicesOrder: "random",
                    choices: [
                        "Hypertext Markup Launguage",
                        "Hypertext Mega Language",
                        "Hotkey Text Mark Language",
                        "Hotdog Markup Language"
                    ],
                    correctAnswer: "Hypertext Markup Launguage"
                }
            ]
        },
//Question 6
        {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "consolelog",
                    title: "What does ConsoleLog do?",
                    choicesOrder: "random",
                    choices: [
                        "It outputs a message into the web console",
                        "It means some people think console gaming is better than PC gaming",
                        "It doesn't do anything",
                        "It styles your page"
                    ],
                    correctAnswer:
                    "It outputs a message into the web console"
                }
            ]
        }
    ],
//Final page.. Will show how many answers were correctly answered.
    completedHtml:

        "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};


window.survey = new Survey.Model(codeQuiz);

//This function uses JSON to grab the result data from your quiz and displays your answers at the bottom of the final page
survey.onComplete.add(function(result) {
    document.querySelector("#surveyResult").textContent =
        "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

//This initializes the survey
$("#surveyElement").Survey({ model: survey });


