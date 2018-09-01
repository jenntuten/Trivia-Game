//$(".choices").empty();
            //$(".answer-image").append("<img src=assets/images/nbalogo.jpg>")
            /*$(".question").empty();
            $(".choice2a").empty();
            $(".choice2a").css('background', 'black');
            $(".choice2a").empty();
            $(".choice2a").css('background', 'black');
            $(".choice3a").empty();
            $(".choice3a").css('background', 'black');
            $(".choice4a").empty();
            $(".choice4a").css('background', 'black');*/
            //$(".choice2a").append('<img src=assets/images/nbalogo.jpg>');
            //loadNextQuestion();
$(".choice2a").on('click', function () {
        console.log('choice2a clicked');
        if (questionsAndChoices[1].choice2a === questionsAndChoices[1].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
           document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifRight;
            
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifWrong;
            
        }
    })
    $(".choice2b").on('click', function () {
        console.log('choice2b clicked');
        if (questionsAndChoices[1].choice2b === questionsAndChoices[1].answer) {
            correct++;
            console.log('correct', correct);
           document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifRight;
            
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifWrong;
            
        }
    })
    $(".choice1c").on('click', function () {
        console.log('choice1c clicked');
        if (questionsAndChoices[1].choice1c === questionsAndChoices[1].answer) {
            correct++;
            console.log('correct', correct);
           document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifRight;
            
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifWrong;
            
        }
    })
    $(".choice1d").on('click', function () {
        console.log('choice1d clicked');
        if (questionsAndChoices[1].choice1d === questionsAndChoices[1].answer) {
            correct++;
            console.log('correct', correct);
           document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifRight;
            
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            document.querySelector(".result1").innerHTML = questionsAndChoices[1].ifWrong;
            
        }
    })

    {
        question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
        choices: ["23", "32","45","22"]
        answer: "45",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 45."
    }, {
        question: "Where did the Los Angeles Lakers originate?",
        choices: ["San Diego","Minneapolis","San Francisco","St. Louis"]
        answer: "Minneapolis",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Minneapolis."
    }, {
        question: "Which team won the 1999 NBA Finals?",
        choices: ["San Antonio Spurs","New York Knicks","Los Angeles Lakers", "Chicago Bulls"]
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "As of 2018, who is the NBA's all-time points leader?",
        choices: ["LeBron James","Kobe Bryant","Kareem Abdul-Jabbar", "Michael Jordan"]
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar."
    },
    {
        question: "Whose silhouette is used for the NBA logo?",
        choices: "Bill Russell","Larry Bird", "Kareem Abdul-Jabbar", "Jerry West"]
        answer: "Jerry West",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Jerry West."
    },
    {
        question: "Which NBA player did not appear in the 1996 movie <em>Space Jam</em>?",
        choices: ["Patrick Ewing","Charles Barkley","Muggsy Bogues","Shaquille O'Neal"]
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal."
    },
    {
        question: "Which player scored a record-setting 100 points in a single game?",
        choices: ["Wilt Chamberlain","Klay Thompson","Kobe Bryant","Michael Jordan"]
        answer: "Wilt Chamberlain",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Wilt Chamberlain."
    },
    {
        question: "Which team holds the record for highest number of wins in one season?",
        choices: ["Boston Celtics", "Golden State Warriors","San Antonio Spurs", "Los Angeles Lakers"]
        answer: "Golden State Warriors",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Golden State Warriors."
    },
    {
        question: "Where were the Seattle Supersonics moved to in the 2008-09 season, and what is the team's name?",
        choices: ["Charlotte Hornets","New Orleans Pelicans","Oklahoma City Thunder", "Memphis Grizzlies"]
        answer: "Oklahoma City Thunder",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oklahoma City Thunder."
    },