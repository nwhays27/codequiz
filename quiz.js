Survey.StylesManager.applyTheme("modern");

var json = {
    title: "Code Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 60,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html:
                        "You are about to start this quiz about coding. <br/>You have 10 seconds for every question and 60 seconds for the whole quiz of 6 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        },
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
    completedHtml:
        "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
    document.querySelector("#surveyResult").textContent =
        "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

$("#surveyElement").Survey({ model: survey });
