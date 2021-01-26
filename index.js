function generateQuiz () {
    // remove the start quiz button
    document.getElementById('startQuizButton').remove();

    // add the submit quiz button
    document.getElementById("submitButton").innerHTML = 
        '<br/> <input id="submitButton" type="button" value="submit" onclick="result ();" />';    

    var quizContainer = document.getElementById('quiz');
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
            question: "What is 10*10?",
            answers: {
                a: '1010 <br/>',
                b: 'Abraham Lincoln <br/>',
                c: '100 <br/>'
            }
        }
    ];

    function showQuestions (questions, quizContainer) {
        var output = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
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
