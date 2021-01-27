function generateQuiz () {
    // remove the start quiz button
    document.getElementById('startQuizButton').remove();

    // add the submit quiz button
    document.getElementById("submitButton").innerHTML = 
        '<br/> <input id="submitButton" type="button" value="submit" onclick="result ();" />';    

    // the div to put the quiz in
    var quizContainer = document.getElementById('quiz');

    // questions to ask + answers
    var questions = [
        {
            question: "Does your stomach hurt?",
            answers: {
                a: 'Yes <br/>',
                b: 'No <br/>',
                c: 'Maybe so <br/> <br/>'
            }
        },
        {
            question: "How much water did you drink today?",
            answers: {
                a: 'None. I am so thirsty... <br/>',
                b: 'Not much <br/>',
                c: 'The recommended amount <br/>',
                d: 'A lot! <br/> <br/>'
            }
        },
        {
            question: "Did you eat any spoiled food?",
            answers: {
                a: 'Yes, I am a masochist <br/>',
                b: 'Bro I ate oily food and spicy food at the same time lol <br/>',
                c: 'Not that I know of <br/>',
                d: 'No <br/> <br/>'
            }
        },
        {
            question: "What is 10*10?",
            answers: {
                a: '1010 <br/>',
                b: 'Abraham Lincoln <br/>',
                c: '100 <br/>'
            }
        }
    ];

    // formatting the questions
    function showQuestions (questions, quizContainer) {
        var output = [];
        for (var i = 0; i < questions.length; i++) {
            var answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<div class="answer">'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</div>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    // show the questions
    showQuestions (questions, quizContainer);
}
