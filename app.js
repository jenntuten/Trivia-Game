$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let done = false;
    let used = [];
    let answerImage = new Image();

    //**8/29 Goal: get rest of buttons working. Add necessary HTML (Questions 7-10) */
    //9/1: couldn't play more than a few games; looped through questions and never recycled upon initialize. Copied array to "initializeGame"
    //Need to clean up overall

    let questionsAndChoices = [{
        question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
        choices: ["23", "32", "45", "22"],
        answer: "45",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 45.",
        image: "<img src=Jordan_45jersey.jpg><br>"
    }, {
        question: "Where did the Los Angeles Lakers originate?",
        choices: ["San Diego", "Minneapolis", "San Francisco", "St. Louis"],
        answer: "Minneapolis",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Minneapolis.",
        image: "<img src=mpls-lakers.jpg><br>"
    }, {
        question: "Which team won the 1999 NBA Finals?",
        choices: ["San Antonio Spurs", "New York Knicks", "Los Angeles Lakers", "Chicago Bulls"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=spurs-1999-champs.jpg><br>"
    },
    {
        question: "As of 2018, who is the NBA's all-time points leader?",
        choices: ["LeBron James", "Kobe Bryant", "Kareem Abdul-Jabbar", "Michael Jordan"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=kareem.jpg><br>"
    },
    /*{
        question: "Whose silhouette is used for the NBA logo?",
        choices: ["Bill Russell", "Larry Bird", "Kareem Abdul-Jabbar", "Jerry West"],
        answer: "Jerry West",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Jerry West.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which NBA player did not appear in the 1996 movie <em>Space Jam</em>?",
        choices: ["Patrick Ewing", "Charles Barkley", "Muggsy Bogues", "Shaquille O'Neal"],
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal.",
        image: "<img src=space-jam-2.jpg><br>"
    },
    {
        question: "Which player scored a record-setting 100 points in a single game?",
        choices: ["Wilt Chamberlain", "Klay Thompson", "Kobe Bryant", "Michael Jordan"],
        answer: "Wilt Chamberlain",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Wilt Chamberlain.",
        image: "<img src=wilt-100pt.jpg><br>"
    },
    /*{
        question: "Which team holds the record for highest number of wins in one season?",
        choices: ["Boston Celtics", "Golden State Warriors", "San Antonio Spurs", "Los Angeles Lakers"],
        answer: "Golden State Warriors",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Golden State Warriors.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "Where were the Seattle Supersonics moved to in the 2008-09 season, and what is the team's name?",
        choices: ["Charlotte Hornets", "New Orleans Pelicans", "Oklahoma City Thunder", "Memphis Grizzlies"],
        answer: "Oklahoma City Thunder",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oklahoma City Thunder.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "As of 2018, which player has the highest career free-throw percentage?",
        choices: ["Dirk Nowitzki", "Steph Curry", "James Harden", "Steve Nash"],
        answer: "Steve Nash",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Steve Nash.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "As of 2018, which player holds the record for most Finals MVP titles?",
        choices: ["Michael Jordan", "Tim Duncan", "Kevin Durant", "Steph Curry"],
        answer: "Michael Jordan",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Michael Jordan.",
        image: "<img src=mj-mvp.jpg><br>"
    },
    {
        question: "Which team did Dennis Rodman play for prior to joining the Bulls in 1993?",
        choices: ["New York Knicks", "San Antonio Spurs", "Detroit Pistons", "Los Angeles Lakers"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=rodman-spurs.jpg><br>"
    },
    {
        question: "As of 2018, who holds the most coaching titles?",
        choices: ["Phil Jackson", "Gregg Popovich", "Larry Brown", "Pat Riley"],
        answer: "Phil Jackson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Phil Jackson.",
        image: "<img src=philjackson.jpg><br>"
    },
    {
        question: "Two former San Antonio Spurs players have recorded a quadruple-double. Which player was one of the two?",
        choices: ["Tim Duncan", "Manu Ginobili", "David Robinson", "George Gervin"],
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson.",
        image: "<img src=david-robinson.jpg><br>"
    },
    {
        question: "Which former NBA player's nickname was 'The Answer'?",
        choices: ["Allen Iverson", "Latrell Sprewell", "David Robinson", "James Worthy"],
        answer: "Allen Iverson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Allen Iverson.",
        image: "<img src=allen-iverson.jpg><br>"
    },
    /*{
        question: "Which former NBA player's nickname was 'The Iceman'?",
        choices: ["Julius Erving", "Latrell Sprewell", "George Gervin", "Bill Russell"],
        answer: "George Gervin",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is George Gervin.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which former NBA player's nickname was 'Dr. J'?",
        choices: ["Julius Erving", "Jerry West", "John Stockton", "Jeff Hornacek"],
        answer: "Julius Erving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Julius Erving.",
        image: "<img src=drj.jpg><br>"
    },
    {
        question: "Who played for Duke University?",
        choices: ["Kawhi Leonard", "Shaquille O'Neal", "Michael Jordan", "Kyrie Irving"],
        answer: "Kyrie Irving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kyrie Irving.",
        image: "<img src=kyrie-irvin.jpg><br>"
    },
    /*{
        question: "Which team won the 2016 NBA Finals?",
        choices: ["Golden State Warriors", "Cleveland Cavaliers", "Boston Celtics", "Los Angeles Lakers"],
        answer: "Cleveland Cavaliers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Cleveland Cavaliers.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "In the NBA, how many seconds are on the shot clock for each possession?",
        choices: ["20", "24", "30", "45"],
        answer: "24",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 24.",
        image: "<img src=shot-clock.jpg><br>"
    },
    {
        question: "Which team has won the most titles?",
        choices: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "San Antonio Spurs"],
        answer: "Boston Celtics",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Boston Celtics.",
        image: "<img src=celtics.jpg><br>"
    },
    /*{
        question: "Which team's mascot is a gorilla?",
        choices: ["Utah Jazz", "Denver Nuggets", "Portland Trail Blazers", "Phoenix Suns"],
        answer: "Phoenix Suns",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Phoenix Suns.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which two teams combined for the highest-scoring game on record?",
        choices: ["Utah Jazz vs. Chicago Bulls", "Denver Nuggets vs. Detroit Pistons", "Chicago Bulls vs. San Antonio Spurs", "Phoenix Suns vs. Los Angeles Lakers"],
        answer: "Denver Nuggets vs. Detroit Pistons",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets vs. Detroit Pistons.",
        image: "<img src=pistons-nuggets.jpg><br>"
    },
    /*{
        question: "How long is an NBA overtime period?",
        choices: ["2 minutes", "3 minutes", "5 minutes", "10 minutes"],
        answer: "5 minutes",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 5 minutes.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which player is famous for his 'sky-hook'?",
        choices: ["Kareem Abdul-Jabbar", "Scottie Pippen", "Michael Jordan", "Larry Bird"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=skyhook.jpg><br>"
    },
    /*{
        question: "Which team did Shaquille O'Neal <em>NOT</em> play for during his career?",
        choices: ["Miami Heat", "Cleveland Cavaliers", "Phoenix Suns", "San Antonio Spurs"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which former NBA player changed his name to Metta World Peace?",
        choices: ["Ron Artest", "Allen Iverson", "Rasheed Wallace", "Kareem Abdul-Jabbar"],
        answer: "Ron Artest",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Ron Artest.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "Which former NBA player starred in the 1996 movie <em>Kazaam</em>?",
        choices: ["Michael Jordan", "Shaquille O'Neal", "Charles Barkley", "Muggsy Bogues"],
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal.",
        image: "<img src=kazaam.jpg><br>"
    },
    {
        question: "Where did the Grizzlies call home before they moved to Memphis?",
        choices: ["Seattle", "St. Louis", "San Diego", "Vancouver"],
        answer: "Vancouver",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Vancouver.",
        image: "<img src=grizzlies.png><br>"
    },
    {
        question: "Which team won the 2009 and 2010 NBA Finals back-to-back?",
        choices: ["San Antonio Spurs", "Boston Celtics", "Miami Heat", "Los Angeles Lakers"],
        answer: "Los Angeles Lakers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Los Angeles Lakers.",
        image: "<img src=lakers.jpg><br>"
    },
    {
        question: "Which team's mascot is a bear named Clutch?",
        choices: ["Memphis Grizzlies", "Denver Nuggets", "Portland Trail Blazers", "Houston Rockets"],
        answer: "Houston Rockets",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Houston Rockets.",
        image: "<img src=clutch.jpg><br>"
    },
    {
        question: "Which current or former team's mascot is/was Rocky the Mountain Lion?",
        choices: ["Seattle SuperSonics", "Denver Nuggets", "Portland Trail Blazers", "Utah Jazz"],
        answer: "Denver Nuggets",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets.",
        image: "<img src=rocky.jpg><br>"
    },
    {
        question: "Which team's mascot is named Benny?",
        choices: ["Chicago Bulls", "Brooklyn Nets", "Portland Trail Blazers", "Utah Jazz"],
        answer: "Chicago Bulls",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Chicago Bulls.",
        image: "<img src=benny.jpg><br>"
    },
    /*{
        question: "Where were the Nets based before moving to Brooklyn?",
        choices: ["New Jersey", "Pittsburgh", "Cincinnati", "St. Louis"],
        answer: "New Jersey",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is New Jersey.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "In the 1990s, which former player/current coach was punched in the face by Michael Jordan at practice following a disagreement on a play?",
        choices: ["Steve Kerr", "Luke Walton", "Doc Rivers", "Tyronn Lue"],
        answer: "Steve Kerr",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Steve Kerr.",
        image: "<img src=steve-kerr.jpg><br>"
    },
    {
        question: "Which team won the 2011 NBA Finals?",
        choices: ["Miami Heat", "Dallas Mavericks", "Boston Celtics", "Los Angeles Lakers"],
        answer: "Dallas Mavericks",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Dallas Mavericks.",
        image: "<img src=mavs.jpg><br>"
    },
    /*{
        question: "Which NBA player has won the most championship rings?",
        choices: ["Robert Horry", "Michael Jordan", "Bill Russell", "LeBron James"],
        answer: "Bill Russell",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Bill Russell.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "Which team won the NBA championships during two consecutive seasons while Michael Jordan was temporarily retired for the first time?",
        choices: ["Utah Jazz", "Detroit Pistons", "Houston Rockets", "San Antonio Spurs"],
        answer: "Houston Rockets",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Houston Rockets.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which team has not won back-to-back NBA championships?",
        choices: ["Golden State Warriors", "Chicago Bulls", "Houston Rockets", "San Antonio Spurs"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=spurs-champs.jpg><br>"
    },
    {
        question: "Which former player was nicknamed 'The Admiral'?",
        choices: ["Tim Duncan", "David Robinson", "Larry Bird", "Magic Johnson"],
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson.",
        image: "<img src=theadmiral.jpg><br>"
    },
   /* {
        question: "How long is a quarter in an NBA game?",
        choices: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
        answer: "12 minutes",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 12 minutes.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "Which city does not currently have an NBA team?",
        choices: ["Salt Lake City", "Phoenix", "Charlotte", "Baltimore"],
        answer: "Baltimore",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Baltimore.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "California is home to how many NBA teams?",
        choices: ["2", "3", "4", "5"],
        answer: "4",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 4.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which NBA player's first name is Wardell?",
        choices: ["James Harden", "Russell Westbrook", "Stephen Curry", "Kevin Durant"],
        answer: "Stephen Curry",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Stephen Curry.",
        image: "<img src=steph-curry.jpg><br>"
    },
    {
        question: "Which former NBA player was not a member of the 1992 U.S. Olympic Dream Team?",
        choices: ["Magic Johnson", "Karl Malone", "Hakeem Olajuwon", "Patrick Ewing"],
        answer: "Hakeem Olajuwon",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Hakeem Olajuwon.",
        image: "<img src=dream-team.jpg><br>"
    },
    {
        question: "When Michael Jordan left the NBA to play baseball in the mid-1990s, which major-league team's affiliate did he play for?",
        choices: ["Chicago Cubs", "Baltimore Orioles", "Chicago White Sox", "Philadelphia Phillies"],
        answer: "Chicago White Sox",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Chicago White Sox.",
        image: "<img src=mj-baseball.jpg><br>"
    },
    {
        question: "Which team has had the most appearances in the NBA Finals? (City name is not included, as all 4 teams originated elsewhere.)",
        choices: ["Lakers", "Warriors", "76ers", "Pistons"],
        answer: "Lakers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Lakers.",
        image: "<img src=lakers.jpg><br>"
    },
    {
        question: "What is the name of the Golden State Warriors' home arena?",
        choices: ["Oracle Arena", "Apple Arena", "Cisco Arena", "Intel Arena"],
        answer: "Oracle Arena",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oracle Arena.",
        image: "<img src=oracle-arena.jpg><br>"
    },
    /*{
        question: "The Boston Celtics dynasty started in the decade prior and spanned all of which decade?",
        choices: ["1960s", "1970s", "1980s", "1990s"],
        answer: "1960s",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1960s.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "Between 1980 and 1990, only 4 teams won the finals. Which is not one of those teams?",
        choices: ["Boston Celtics", "Detroit Pistons", "Philadelphia 76ers", "Chicago Bulls"],
        answer: "Chicago Bulls",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Chicago Bulls.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "How many divisions are there in the NBA?",
        choices: ["2", "4", "6", "8"],
        answer: "6",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 6.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "How many teams are in the NBA?",
        choices: ["28", "30", "32", "36"],
        answer: "30",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 30.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which former NBA player made an appearance in the 1980 movie <em>Airplane!</em>?",
        choices: ["Kareem Abdul-Jabbar", "Larry Bird", "Wilt Chamberlain", "Kevin McHale"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=kareem-airplane.jpg><br>"
    },
    /*{
        question: "Which state does not currently have an NBA team?",
        choices: ["Georgia", "North Carolina", "Colorado", "Washington"],
        answer: "Washington",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Washington.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which former NBA player starred in the 1998 movie <em>My Giant</em>?",
        choices: ["Shaquille O'Neal", "Kareem Abdul-Jabbar", "Gheorghe Muresan", "Charles Barkley"],
        answer: "Gheorghe Muresan",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Gheorghe Muresan.",
        image: "<img src=my-giant.jpg><br>"
    },
    {
        question: "How many NBA teams are based outside the United States?",
        choices: ["0", "1", "2", "3"],
        answer: "1",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1.",
        image: "<img src=raptors.png><br>"
    },
    {
        question: "What is LeBron James' jersey number?",
        choices: ["22", "23", "32", "33"],
        answer: "23",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 23.",
        image: "<img src=lebron.jpg><br>"
    },
    /*{
        question: "How many teams start out in the NBA Playoffs each year?",
        choices: ["12", "16", "18", "20"],
        answer: "16",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 16.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "The Utah Jazz originated in which city?",
        choices: ["New Orleans", "Memphis", "St. Louis", "Atlanta"],
        answer: "New Orleans",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is New Orleans.",
        image: "<img src=nbalogo.jpg><br>"
    },
    {
        question: "Although basketball was invented in the 1800s, the NBA wasn't established until what year?",
        choices: ["1920", "1946", "1957", "1962"],
        answer: "1946",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1946.",
        image: "<img src=nbalogo.jpg><br>"
    },*/
    {
        question: "Which NBA superstar was drafted out of high school?",
        choices: ["Michael Jordan", "Shaquille O'Neal", "LeBron James", "Kevin Durant"],
        answer: "LeBron James",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is LeBron James.",
        image: "<img src=lebron.jpg><br>"
    },
    /*
    {
        question: "",
        choices: ["","","",""],
        answer: "",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is ."
    },*/
];
    let currentQuiz = [];
    for (let i = 0; i < 10; i++) {
        currentQuiz.push(questionsAndChoices.splice(Math.random() * (questionsAndChoices.length - 1), 1).pop());
    }
    console.log('current quiz', currentQuiz);

    //Question 1 - append choices-indexOf to each question
    $(".question1").append(currentQuiz[0].question);
    $(".choice1a").append(currentQuiz[0].choices[0]);
    $(".choice1a").css('background', 'orange');
    $(".choice2a").append(currentQuiz[0].choices[1]);
    $(".choice2a").css('background', 'orange');
    $(".choice3a").append(currentQuiz[0].choices[2]);
    $(".choice3a").css('background', 'orange');
    $(".choice4a").append(currentQuiz[0].choices[3]);
    $(".choice4a").css('background', 'orange');
    $(".play-again").empty();

    //Question 2
    $(".question2").append(currentQuiz[1].question);
    $(".choice1b").append(currentQuiz[1].choices[0]);
    $(".choice1b").css('background', 'orange');
    $(".choice2b").append(currentQuiz[1].choices[1]);
    $(".choice2b").css('background', 'orange');
    $(".choice3b").append(currentQuiz[1].choices[2]);
    $(".choice3b").css('background', 'orange');
    $(".choice4b").append(currentQuiz[1].choices[3]);
    $(".choice4b").css('background', 'orange');

    //Question 3
    $(".question3").append(currentQuiz[2].question);
    $(".choice1c").append(currentQuiz[2].choices[0]);
    $(".choice1c").css('background', 'orange');
    $(".choice2c").append(currentQuiz[2].choices[1]);
    $(".choice2c").css('background', 'orange');
    $(".choice3c").append(currentQuiz[2].choices[2]);
    $(".choice3c").css('background', 'orange');
    $(".choice4c").append(currentQuiz[2].choices[3]);
    $(".choice4c").css('background', 'orange');

    //Question 4
    $(".question4").append(currentQuiz[3].question);
    $(".choice1d").append(currentQuiz[3].choices[0]);
    $(".choice1d").css('background', 'orange');
    $(".choice2d").append(currentQuiz[3].choices[1]);
    $(".choice2d").css('background', 'orange');
    $(".choice3d").append(currentQuiz[3].choices[2]);
    $(".choice3d").css('background', 'orange');
    $(".choice4d").append(currentQuiz[3].choices[3]);
    $(".choice4d").css('background', 'orange');

    //Question 5
    $(".question5").append(currentQuiz[4].question);
    $(".choice1e").append(currentQuiz[4].choices[0]);
    $(".choice1e").css('background', 'orange');
    $(".choice2e").append(currentQuiz[4].choices[1]);
    $(".choice2e").css('background', 'orange');
    $(".choice3e").append(currentQuiz[4].choices[2]);
    $(".choice3e").css('background', 'orange');
    $(".choice4e").append(currentQuiz[4].choices[3]);
    $(".choice4e").css('background', 'orange');

    //Question 6
    $(".question6").append(currentQuiz[5].question);
    $(".choice1f").append(currentQuiz[5].choices[0]);
    $(".choice1f").css('background', 'orange');
    $(".choice2f").append(currentQuiz[5].choices[1]);
    $(".choice2f").css('background', 'orange');
    $(".choice3f").append(currentQuiz[5].choices[2]);
    $(".choice3f").css('background', 'orange');
    $(".choice4f").append(currentQuiz[5].choices[3]);
    $(".choice4f").css('background', 'orange');

    //Question 7
    $(".question7").append(currentQuiz[6].question);
    $(".choice1g").append(currentQuiz[6].choices[0]);
    $(".choice1g").css('background', 'orange');
    $(".choice2g").append(currentQuiz[6].choices[1]);
    $(".choice2g").css('background', 'orange');
    $(".choice3g").append(currentQuiz[6].choices[2]);
    $(".choice3g").css('background', 'orange');
    $(".choice4g").append(currentQuiz[6].choices[3]);
    $(".choice4g").css('background', 'orange');

    //Question 8
    $(".question8").append(currentQuiz[7].question);
    $(".choice1h").append(currentQuiz[7].choices[0]);
    $(".choice1h").css('background', 'orange');
    $(".choice2h").append(currentQuiz[7].choices[1]);
    $(".choice2h").css('background', 'orange');
    $(".choice3h").append(currentQuiz[7].choices[2]);
    $(".choice3h").css('background', 'orange');
    $(".choice4h").append(currentQuiz[7].choices[3]);
    $(".choice4h").css('background', 'orange');

    //Question 9
    $(".question9").append(currentQuiz[8].question);
    $(".choice1i").append(currentQuiz[8].choices[0]);
    $(".choice1i").css('background', 'orange');
    $(".choice2i").append(currentQuiz[8].choices[1]);
    $(".choice2i").css('background', 'orange');
    $(".choice3i").append(currentQuiz[8].choices[2]);
    $(".choice3i").css('background', 'orange');
    $(".choice4i").append(currentQuiz[8].choices[3]);
    $(".choice4i").css('background', 'orange');

    //Question 10
    $(".question10").append(currentQuiz[9].question);
    $(".choice1j").append(currentQuiz[9].choices[0]);
    $(".choice1j").css('background', 'orange');
    $(".choice2j").append(currentQuiz[9].choices[1]);
    $(".choice2j").css('background', 'orange');
    $(".choice3j").append(currentQuiz[9].choices[2]);
    $(".choice3j").css('background', 'orange');
    $(".choice4j").append(currentQuiz[9].choices[3]);
    $(".choice4j").css('background', 'orange');

    let seconds_left = 20;
    let interval = setInterval(function () {
        document.getElementById('timer').innerHTML = --seconds_left;
        if (seconds_left <= 0) {
            document.getElementById('timer').innerHTML = "Time's up! Click the logo below to play again";
            clearInterval(interval);
            //seconds_left = 10;

            //disable buttons upon timeout
            $(":button").attr('disabled', true);
            $(".done").append('<strong>Correct:</strong> ' + correct + '<br><strong>Incorrect: </strong>' + incorrect);
            //$(".question-wrapper").empty().clone();
            //$(".question-wrapper").html("");
            //questionWrapper.after("<div class='question-wrapper'></div>");
            //questionWrapper.append("<div class='question-wrapper'></div>");
            $(".question1").empty();
            $(".question2").empty();
            $(".question3").empty();
            $(".question4").empty();
            $(".question5").empty();
            $(".question6").empty();
            $(".question7").empty();
            $(".question8").empty();
            $(".question9").empty();
            $(".question10").empty();
            $(".question1-image").empty();
            $(".question2-image").empty();
            $(".question3-image").empty();
            $(".question4-image").empty();
            $(".question5-image").empty();
            $(".question6-image").empty();
            $(".question7-image").empty();
            $(".question8-image").empty();
            $(".question9-image").empty();
            $(".question10-image").empty();
            $(".result1").empty();
            $(".result2").empty();
            $(".result3").empty();
            $(".result4").empty();
            $(".result5").empty();
            $(".result6").empty();
            $(".result7").empty();
            $(".result8").empty();
            $(".result9").empty();
            $(".result10").empty();
            $(".choice1a").empty();
            $(".choice1b").empty();
            $(".choice1c").empty();
            $(".choice1d").empty();
            $(".choice1e").empty();
            $(".choice1f").empty();
            $(".choice1g").empty();
            $(".choice1h").empty();
            $(".choice1i").empty();
            $(".choice1j").empty();
            $(".choice2a").empty();
            $(".choice2b").empty();
            $(".choice2c").empty();
            $(".choice2d").empty();
            $(".choice2e").empty();
            $(".choice2f").empty();
            $(".choice2g").empty();
            $(".choice2h").empty();
            $(".choice2i").empty();
            $(".choice2j").empty();
            $(".choice3a").empty();
            $(".choice3b").empty();
            $(".choice3c").empty();
            $(".choice3d").empty();
            $(".choice3e").empty();
            $(".choice3f").empty();
            $(".choice3g").empty();
            $(".choice3h").empty();
            $(".choice3i").empty();
            $(".choice3j").empty();
            $(".choice4a").empty();
            $(".choice4b").empty();
            $(".choice4c").empty();
            $(".choice4d").empty();
            $(".choice4e").empty();
            $(".choice4f").empty();
            $(".choice4g").empty();
            $(".choice4h").empty();
            $(".choice4i").empty();
            $(".choice4j").empty();
            $(".choice5a").empty();
            $(".choice5b").empty();
            $(".choice5c").empty();
            $(".choice5d").empty();
            $(".choice6a").empty();
            $(".choice6b").empty();
            $(".choice6c").empty();
            $(".choice6d").empty();
            $(".choice7a").empty();
            $(".choice7b").empty();
            $(".choice7c").empty();
            $(".choice7d").empty();
            $(".choice8a").empty();
            $(".choice8b").empty();
            $(".choice8c").empty();
            $(".choice8d").empty();
            $(".choice9a").empty();
            $(".choice9b").empty();
            $(".choice9c").empty();
            $(".choice9d").empty();
            $(".choice10a").empty();
            $(".choice10b").empty();
            $(".choice10c").empty();
            $(".choice10d").empty();
            $(".play-again").append("<img src =nbalogo.jpg><br>Click the image to play again.");
            //loadNextQuestion();
            //console.log('seconds left', --seconds_left);
        }
    }, 1000);

    function initializeGame() {
        //clock is restarting, new array is generated but the questions don't appear...ok now 9/1
        console.log('game initialized');
        $(".done").empty();
        $(".play-again").empty();
        correct = 0;
        incorrect = 0;
        questionsAndChoices = [
            {
                question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
                choices: ["23", "32", "45", "22"],
                answer: "45",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 45.",
                image: "<img src=Jordan_45jersey.jpg><br>"
            }, {
                question: "Where did the Los Angeles Lakers originate?",
                choices: ["San Diego", "Minneapolis", "San Francisco", "St. Louis"],
                answer: "Minneapolis",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Minneapolis.",
                image: "<img src=mpls-lakers.jpg><br>"
            }, {
                question: "Which team won the 1999 NBA Finals?",
                choices: ["San Antonio Spurs", "New York Knicks", "Los Angeles Lakers", "Chicago Bulls"],
                answer: "San Antonio Spurs",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
                image: "<img src=spurs-1999-champs.jpg><br>"
            },
            {
                question: "As of 2018, who is the NBA's all-time points leader?",
                choices: ["LeBron James", "Kobe Bryant", "Kareem Abdul-Jabbar", "Michael Jordan"],
                answer: "Kareem Abdul-Jabbar",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
                image: "<img src=kareem.jpg><br>"
            },
            /*{
                question: "Whose silhouette is used for the NBA logo?",
                choices: ["Bill Russell", "Larry Bird", "Kareem Abdul-Jabbar", "Jerry West"],
                answer: "Jerry West",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Jerry West.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which NBA player did not appear in the 1996 movie <em>Space Jam</em>?",
                choices: ["Patrick Ewing", "Charles Barkley", "Muggsy Bogues", "Shaquille O'Neal"],
                answer: "Shaquille O'Neal",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Shaquille O'Neal.",
                image: "<img src=space-jam-2.jpg><br>"
            },
            {
                question: "Which player scored a record-setting 100 points in a single game?",
                choices: ["Wilt Chamberlain", "Klay Thompson", "Kobe Bryant", "Michael Jordan"],
                answer: "Wilt Chamberlain",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Wilt Chamberlain.",
                image: "<img src=wilt-100pt.jpg><br>"
            },
            /*{
                question: "Which team holds the record for highest number of wins in one season?",
                choices: ["Boston Celtics", "Golden State Warriors", "San Antonio Spurs", "Los Angeles Lakers"],
                answer: "Golden State Warriors",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Golden State Warriors.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "Where were the Seattle Supersonics moved to in the 2008-09 season, and what is the team's name?",
                choices: ["Charlotte Hornets", "New Orleans Pelicans", "Oklahoma City Thunder", "Memphis Grizzlies"],
                answer: "Oklahoma City Thunder",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Oklahoma City Thunder.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "As of 2018, which player has the highest career free-throw percentage?",
                choices: ["Dirk Nowitzki", "Steph Curry", "James Harden", "Steve Nash"],
                answer: "Steve Nash",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Steve Nash.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "As of 2018, which player holds the record for most Finals MVP titles?",
                choices: ["Michael Jordan", "Tim Duncan", "Kevin Durant", "Steph Curry"],
                answer: "Michael Jordan",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Michael Jordan.",
                image: "<img src=mj-mvp.jpg><br>"
            },
            {
                question: "Which team did Dennis Rodman play for prior to joining the Bulls in 1993?",
                choices: ["New York Knicks", "San Antonio Spurs", "Detroit Pistons", "Los Angeles Lakers"],
                answer: "San Antonio Spurs",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
                image: "<img src=rodman-spurs.jpg><br>"
            },
            {
                question: "As of 2018, who holds the most coaching titles?",
                choices: ["Phil Jackson", "Gregg Popovich", "Larry Brown", "Pat Riley"],
                answer: "Phil Jackson",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Phil Jackson.",
                image: "<img src=philjackson.jpg><br>"
            },
            {
                question: "Two former San Antonio Spurs players have recorded a quadruple-double. Which player was one of the two?",
                choices: ["Tim Duncan", "Manu Ginobili", "David Robinson", "George Gervin"],
                answer: "David Robinson",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is David Robinson.",
                image: "<img src=david-robinson.jpg><br>"
            },
            {
                question: "Which former NBA player's nickname was 'The Answer'?",
                choices: ["Allen Iverson", "Latrell Sprewell", "David Robinson", "James Worthy"],
                answer: "Allen Iverson",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Allen Iverson.",
                image: "<img src=allen-iverson.jpg><br>"
            },
            /*{
                question: "Which former NBA player's nickname was 'The Iceman'?",
                choices: ["Julius Erving", "Latrell Sprewell", "George Gervin", "Bill Russell"],
                answer: "George Gervin",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is George Gervin.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which former NBA player's nickname was 'Dr. J'?",
                choices: ["Julius Erving", "Jerry West", "John Stockton", "Jeff Hornacek"],
                answer: "Julius Erving",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Julius Erving.",
                image: "<img src=drj.jpg><br>"
            },
            {
                question: "Who played for Duke University?",
                choices: ["Kawhi Leonard", "Shaquille O'Neal", "Michael Jordan", "Kyrie Irving"],
                answer: "Kyrie Irving",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Kyrie Irving.",
                image: "<img src=kyrie-irvin.jpg><br>"
            },
            /*{
                question: "Which team won the 2016 NBA Finals?",
                choices: ["Golden State Warriors", "Cleveland Cavaliers", "Boston Celtics", "Los Angeles Lakers"],
                answer: "Cleveland Cavaliers",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Cleveland Cavaliers.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "In the NBA, how many seconds are on the shot clock for each possession?",
                choices: ["20", "24", "30", "45"],
                answer: "24",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 24.",
                image: "<img src=shot-clock.jpg><br>"
            },
            {
                question: "Which team has won the most titles?",
                choices: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "San Antonio Spurs"],
                answer: "Boston Celtics",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Boston Celtics.",
                image: "<img src=celtics.jpg><br>"
            },
            /*{
                question: "Which team's mascot is a gorilla?",
                choices: ["Utah Jazz", "Denver Nuggets", "Portland Trail Blazers", "Phoenix Suns"],
                answer: "Phoenix Suns",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Phoenix Suns.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which two teams combined for the highest-scoring game on record?",
                choices: ["Utah Jazz vs. Chicago Bulls", "Denver Nuggets vs. Detroit Pistons", "Chicago Bulls vs. San Antonio Spurs", "Phoenix Suns vs. Los Angeles Lakers"],
                answer: "Denver Nuggets vs. Detroit Pistons",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Denver Nuggets vs. Detroit Pistons.",
                image: "<img src=pistons-nuggets.jpg><br>"
            },
            /*{
                question: "How long is an NBA overtime period?",
                choices: ["2 minutes", "3 minutes", "5 minutes", "10 minutes"],
                answer: "5 minutes",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 5 minutes.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which player is famous for his 'sky-hook'?",
                choices: ["Kareem Abdul-Jabbar", "Scottie Pippen", "Michael Jordan", "Larry Bird"],
                answer: "Kareem Abdul-Jabbar",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
                image: "<img src=skyhook.jpg><br>"
            },
            /*{
                question: "Which team did Shaquille O'Neal <em>NOT</em> play for during his career?",
                choices: ["Miami Heat", "Cleveland Cavaliers", "Phoenix Suns", "San Antonio Spurs"],
                answer: "San Antonio Spurs",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which former NBA player changed his name to Metta World Peace?",
                choices: ["Ron Artest", "Allen Iverson", "Rasheed Wallace", "Kareem Abdul-Jabbar"],
                answer: "Ron Artest",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Ron Artest.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "Which former NBA player starred in the 1996 movie <em>Kazaam</em>?",
                choices: ["Michael Jordan", "Shaquille O'Neal", "Charles Barkley", "Muggsy Bogues"],
                answer: "Shaquille O'Neal",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Shaquille O'Neal.",
                image: "<img src=kazaam.jpg><br>"
            },
            {
                question: "Where did the Grizzlies call home before they moved to Memphis?",
                choices: ["Seattle", "St. Louis", "San Diego", "Vancouver"],
                answer: "Vancouver",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Vancouver.",
                image: "<img src=grizzlies.png><br>"
            },
            {
                question: "Which team won the 2009 and 2010 NBA Finals back-to-back?",
                choices: ["San Antonio Spurs", "Boston Celtics", "Miami Heat", "Los Angeles Lakers"],
                answer: "Los Angeles Lakers",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Los Angeles Lakers.",
                image: "<img src=lakers.jpg><br>"
            },
            {
                question: "Which team's mascot is a bear named Clutch?",
                choices: ["Memphis Grizzlies", "Denver Nuggets", "Portland Trail Blazers", "Houston Rockets"],
                answer: "Houston Rockets",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Houston Rockets.",
                image: "<img src=clutch.jpg><br>"
            },
            {
                question: "Which current or former team's mascot is/was Rocky the Mountain Lion?",
                choices: ["Seattle SuperSonics", "Denver Nuggets", "Portland Trail Blazers", "Utah Jazz"],
                answer: "Denver Nuggets",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Denver Nuggets.",
                image: "<img src=rocky.jpg><br>"
            },
            {
                question: "Which team's mascot is named Benny?",
                choices: ["Chicago Bulls", "Brooklyn Nets", "Portland Trail Blazers", "Utah Jazz"],
                answer: "Chicago Bulls",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Chicago Bulls.",
                image: "<img src=benny.jpg><br>"
            },
            /*{
                question: "Where were the Nets based before moving to Brooklyn?",
                choices: ["New Jersey", "Pittsburgh", "Cincinnati", "St. Louis"],
                answer: "New Jersey",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is New Jersey.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "In the 1990s, which former player/current coach was punched in the face by Michael Jordan at practice following a disagreement on a play?",
                choices: ["Steve Kerr", "Luke Walton", "Doc Rivers", "Tyronn Lue"],
                answer: "Steve Kerr",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Steve Kerr.",
                image: "<img src=steve-kerr.jpg><br>"
            },
            {
                question: "Which team won the 2011 NBA Finals?",
                choices: ["Miami Heat", "Dallas Mavericks", "Boston Celtics", "Los Angeles Lakers"],
                answer: "Dallas Mavericks",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Dallas Mavericks.",
                image: "<img src=mavs.jpg><br>"
            },
            /*{
                question: "Which NBA player has won the most championship rings?",
                choices: ["Robert Horry", "Michael Jordan", "Bill Russell", "LeBron James"],
                answer: "Bill Russell",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Bill Russell.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "Which team won the NBA championships during two consecutive seasons while Michael Jordan was temporarily retired for the first time?",
                choices: ["Utah Jazz", "Detroit Pistons", "Houston Rockets", "San Antonio Spurs"],
                answer: "Houston Rockets",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Houston Rockets.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which team has not won back-to-back NBA championships?",
                choices: ["Golden State Warriors", "Chicago Bulls", "Houston Rockets", "San Antonio Spurs"],
                answer: "San Antonio Spurs",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
                image: "<img src=spurs-champs.jpg><br>"
            },
            {
                question: "Which former player was nicknamed 'The Admiral'?",
                choices: ["Tim Duncan", "David Robinson", "Larry Bird", "Magic Johnson"],
                answer: "David Robinson",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is David Robinson.",
                image: "<img src=theadmiral.jpg><br>"
            },
           /* {
                question: "How long is a quarter in an NBA game?",
                choices: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
                answer: "12 minutes",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 12 minutes.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "Which city does not currently have an NBA team?",
                choices: ["Salt Lake City", "Phoenix", "Charlotte", "Baltimore"],
                answer: "Baltimore",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Baltimore.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "California is home to how many NBA teams?",
                choices: ["2", "3", "4", "5"],
                answer: "4",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 4.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which NBA player's first name is Wardell?",
                choices: ["James Harden", "Russell Westbrook", "Stephen Curry", "Kevin Durant"],
                answer: "Stephen Curry",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Stephen Curry.",
                image: "<img src=steph-curry.jpg><br>"
            },
            {
                question: "Which former NBA player was not a member of the 1992 U.S. Olympic Dream Team?",
                choices: ["Magic Johnson", "Karl Malone", "Hakeem Olajuwon", "Patrick Ewing"],
                answer: "Hakeem Olajuwon",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Hakeem Olajuwon.",
                image: "<img src=dream-team.jpg><br>"
            },
            {
                question: "When Michael Jordan left the NBA to play baseball in the mid-1990s, which major-league team's affiliate did he play for?",
                choices: ["Chicago Cubs", "Baltimore Orioles", "Chicago White Sox", "Philadelphia Phillies"],
                answer: "Chicago White Sox",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Chicago White Sox.",
                image: "<img src=mj-baseball.jpg><br>"
            },
            {
                question: "Which team has had the most appearances in the NBA Finals? (City name is not included, as all 4 teams originated elsewhere.)",
                choices: ["Lakers", "Warriors", "76ers", "Pistons"],
                answer: "Lakers",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Lakers.",
                image: "<img src=lakers.jpg><br>"
            },
            {
                question: "What is the name of the Golden State Warriors' home arena?",
                choices: ["Oracle Arena", "Apple Arena", "Cisco Arena", "Intel Arena"],
                answer: "Oracle Arena",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Oracle Arena.",
                image: "<img src=oracle-arena.jpg><br>"
            },
            /*{
                question: "The Boston Celtics dynasty started in the decade prior and spanned all of which decade?",
                choices: ["1960s", "1970s", "1980s", "1990s"],
                answer: "1960s",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 1960s.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "Between 1980 and 1990, only 4 teams won the finals. Which is not one of those teams?",
                choices: ["Boston Celtics", "Detroit Pistons", "Philadelphia 76ers", "Chicago Bulls"],
                answer: "Chicago Bulls",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Chicago Bulls.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "How many divisions are there in the NBA?",
                choices: ["2", "4", "6", "8"],
                answer: "6",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 6.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "How many teams are in the NBA?",
                choices: ["28", "30", "32", "36"],
                answer: "30",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 30.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which former NBA player made an appearance in the 1980 movie <em>Airplane!</em>?",
                choices: ["Kareem Abdul-Jabbar", "Larry Bird", "Wilt Chamberlain", "Kevin McHale"],
                answer: "Kareem Abdul-Jabbar",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
                image: "<img src=kareem-airplane.jpg><br>"
            },
            /*{
                question: "Which state does not currently have an NBA team?",
                choices: ["Georgia", "North Carolina", "Colorado", "Washington"],
                answer: "Washington",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Washington.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which former NBA player starred in the 1998 movie <em>My Giant</em>?",
                choices: ["Shaquille O'Neal", "Kareem Abdul-Jabbar", "Gheorghe Muresan", "Charles Barkley"],
                answer: "Gheorghe Muresan",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is Gheorghe Muresan.",
                image: "<img src=my-giant.jpg><br>"
            },
            {
                question: "How many NBA teams are based outside the United States?",
                choices: ["0", "1", "2", "3"],
                answer: "1",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 1.",
                image: "<img src=raptors.png><br>"
            },
            {
                question: "What is LeBron James' jersey number?",
                choices: ["22", "23", "32", "33"],
                answer: "23",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 23.",
                image: "<img src=lebron.jpg><br>"
            },
            /*{
                question: "How many teams start out in the NBA Playoffs each year?",
                choices: ["12", "16", "18", "20"],
                answer: "16",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 16.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "The Utah Jazz originated in which city?",
                choices: ["New Orleans", "Memphis", "St. Louis", "Atlanta"],
                answer: "New Orleans",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is New Orleans.",
                image: "<img src=nbalogo.jpg><br>"
            },
            {
                question: "Although basketball was invented in the 1800s, the NBA wasn't established until what year?",
                choices: ["1920", "1946", "1957", "1962"],
                answer: "1946",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is 1946.",
                image: "<img src=nbalogo.jpg><br>"
            },*/
            {
                question: "Which NBA superstar was drafted out of high school?",
                choices: ["Michael Jordan", "Shaquille O'Neal", "LeBron James", "Kevin Durant"],
                answer: "LeBron James",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is LeBron James.",
                image: "<img src=lebron.jpg><br>"
            },
            /*
            {
                question: "",
                choices: ["","","",""],
                answer: "",
                ifRight: "Correct!",
                ifWrong: "Wrong! The correct answer is ."
            },*/
        ];
        currentQuiz = [];
        for (let i = 0; i < 10; i++) {
            currentQuiz.push(questionsAndChoices.splice(Math.random() * (questionsAndChoices.length - 1), 1).pop());
        }
        console.log('questions/choices: '.questionsAndChoices);
        console.log('current quiz', currentQuiz);
        //enable buttons for new game
        $(":button").attr('disabled', false);
        //Question 1
        $(".question1").append(currentQuiz[0].question);
        $(".choice1a").append(currentQuiz[0].choices[0]);
        $(".choice1a").css('background', 'orange');
        $(".choice2a").append(currentQuiz[0].choices[1]);
        $(".choice2a").css('background', 'orange');
        $(".choice3a").append(currentQuiz[0].choices[2]);
        $(".choice3a").css('background', 'orange');
        $(".choice4a").append(currentQuiz[0].choices[3]);
        $(".choice4a").css('background', 'orange');
        $(".play-again").empty();

        //Question 2
        $(".question2").append(currentQuiz[1].question);
        $(".choice1b").append(currentQuiz[1].choices[0]);
        $(".choice1b").css('background', 'orange');
        $(".choice2b").append(currentQuiz[1].choices[1]);
        $(".choice2b").css('background', 'orange');
        $(".choice3b").append(currentQuiz[1].choices[2]);
        $(".choice3b").css('background', 'orange');
        $(".choice4b").append(currentQuiz[1].choices[3]);
        $(".choice4b").css('background', 'orange');

        //Question 3
        $(".question3").append(currentQuiz[2].question);
        $(".choice1c").append(currentQuiz[2].choices[0]);
        $(".choice1c").css('background', 'orange');
        $(".choice2c").append(currentQuiz[2].choices[1]);
        $(".choice2c").css('background', 'orange');
        $(".choice3c").append(currentQuiz[2].choices[2]);
        $(".choice3c").css('background', 'orange');
        $(".choice4c").append(currentQuiz[2].choices[3]);
        $(".choice4c").css('background', 'orange');

        //Question 4
        $(".question4").append(currentQuiz[3].question);
        $(".choice1d").append(currentQuiz[3].choices[0]);
        $(".choice1d").css('background', 'orange');
        $(".choice2d").append(currentQuiz[3].choices[1]);
        $(".choice2d").css('background', 'orange');
        $(".choice3d").append(currentQuiz[3].choices[2]);
        $(".choice3d").css('background', 'orange');
        $(".choice4d").append(currentQuiz[3].choices[3]);
        $(".choice4d").css('background', 'orange');

        //Question 5
        $(".question5").append(currentQuiz[4].question);
        $(".choice1e").append(currentQuiz[4].choices[0]);
        $(".choice1e").css('background', 'orange');
        $(".choice2e").append(currentQuiz[4].choices[1]);
        $(".choice2e").css('background', 'orange');
        $(".choice3e").append(currentQuiz[4].choices[2]);
        $(".choice3e").css('background', 'orange');
        $(".choice4e").append(currentQuiz[4].choices[3]);
        $(".choice4e").css('background', 'orange');

        //Question 6
        $(".question6").append(currentQuiz[5].question);
        $(".choice1f").append(currentQuiz[5].choices[0]);
        $(".choice1f").css('background', 'orange');
        $(".choice2f").append(currentQuiz[5].choices[1]);
        $(".choice2f").css('background', 'orange');
        $(".choice3f").append(currentQuiz[5].choices[2]);
        $(".choice3f").css('background', 'orange');
        $(".choice4f").append(currentQuiz[5].choices[3]);
        $(".choice4f").css('background', 'orange');

        //Question 7
        $(".question7").append(currentQuiz[6].question);
        $(".choice1g").append(currentQuiz[6].choices[0]);
        $(".choice1g").css('background', 'orange');
        $(".choice2g").append(currentQuiz[6].choices[1]);
        $(".choice2g").css('background', 'orange');
        $(".choice3g").append(currentQuiz[6].choices[2]);
        $(".choice3g").css('background', 'orange');
        $(".choice4g").append(currentQuiz[6].choices[3]);
        $(".choice4g").css('background', 'orange');

        //Question 8
        $(".question8").append(currentQuiz[7].question);
        $(".choice1h").append(currentQuiz[7].choices[0]);
        $(".choice1h").css('background', 'orange');
        $(".choice2h").append(currentQuiz[7].choices[1]);
        $(".choice2h").css('background', 'orange');
        $(".choice3h").append(currentQuiz[7].choices[2]);
        $(".choice3h").css('background', 'orange');
        $(".choice4h").append(currentQuiz[7].choices[3]);
        $(".choice4h").css('background', 'orange');

        //Question 9
        $(".question9").append(currentQuiz[8].question);
        $(".choice1i").append(currentQuiz[8].choices[0]);
        $(".choice1i").css('background', 'orange');
        $(".choice2i").append(currentQuiz[8].choices[1]);
        $(".choice2i").css('background', 'orange');
        $(".choice3i").append(currentQuiz[8].choices[2]);
        $(".choice3i").css('background', 'orange');
        $(".choice4i").append(currentQuiz[8].choices[3]);
        $(".choice4i").css('background', 'orange');

        //Question 10
        $(".question10").append(currentQuiz[9].question);
        $(".choice1j").append(currentQuiz[9].choices[0]);
        $(".choice1j").css('background', 'orange');
        $(".choice2j").append(currentQuiz[9].choices[1]);
        $(".choice2j").css('background', 'orange');
        $(".choice3j").append(currentQuiz[9].choices[2]);
        $(".choice3j").css('background', 'orange');
        $(".choice4j").append(currentQuiz[9].choices[3]);
        $(".choice4j").css('background', 'orange');

        //***times out, but doesn't load new game.
        let seconds_left = 20;
        let interval = setInterval(function () {
            document.getElementById('timer').innerHTML = --seconds_left;
            if (seconds_left <= 0) {
                document.getElementById('timer').innerHTML = "Time's up! Click the logo below to play again";
                clearInterval(interval);
                $(".done").append('<strong>Correct:</strong> ' + correct + '<br><strong>Incorrect: </strong>' + incorrect);
                //$(".question-wrapper").empty();
                $(".play-again").append("<img src =nbalogo.jpg><br>Click the image to play again.");
                //loadNextQuestion();
                //console.log('seconds left', --seconds_left);
                $(":button").attr('disabled', true);
                //$(".done").append('<strong>Correct:</strong> ' + correct + '<br><strong>Incorrect: </strong>' + incorrect);
                //$(".question-wrapper").empty();
                $(".question1").empty();
                $(".question2").empty();
                $(".question3").empty();
                $(".question4").empty();
                $(".question5").empty();
                $(".question6").empty();
                $(".question7").empty();
                $(".question8").empty();
                $(".question9").empty();
                $(".question10").empty();
                $(".question1-image").empty();
                $(".question2-image").empty();
                $(".question3-image").empty();
                $(".question4-image").empty();
                $(".question5-image").empty();
                $(".question6-image").empty();
                $(".question7-image").empty();
                $(".question8-image").empty();
                $(".question9-image").empty();
                $(".question10-image").empty();
                $(".result1").empty();
                $(".result2").empty();
                $(".result3").empty();
                $(".result4").empty();
                $(".result5").empty();
                $(".result6").empty();
                $(".result7").empty();
                $(".result8").empty();
                $(".result9").empty();
                $(".result10").empty();
                $(".choice1a").empty();
                $(".choice1b").empty();
                $(".choice1c").empty();
                $(".choice1d").empty();
                $(".choice1e").empty();
                $(".choice1f").empty();
                $(".choice1g").empty();
                $(".choice1h").empty();
                $(".choice1i").empty();
                $(".choice1j").empty();
                $(".choice2a").empty();
                $(".choice2b").empty();
                $(".choice2c").empty();
                $(".choice2d").empty();
                $(".choice2e").empty();
                $(".choice2f").empty();
                $(".choice2g").empty();
                $(".choice2h").empty();
                $(".choice2i").empty();
                $(".choice2j").empty();
                $(".choice3a").empty();
                $(".choice3b").empty();
                $(".choice3c").empty();
                $(".choice3d").empty();
                $(".choice3e").empty();
                $(".choice3f").empty();
                $(".choice3g").empty();
                $(".choice3h").empty();
                $(".choice3i").empty();
                $(".choice3j").empty();
                $(".choice4a").empty();
                $(".choice4b").empty();
                $(".choice4c").empty();
                $(".choice4d").empty();
                $(".choice4e").empty();
                $(".choice4f").empty();
                $(".choice4g").empty();
                $(".choice4h").empty();
                $(".choice4i").empty();
                $(".choice4j").empty();
                $(".choice5a").empty();
                $(".choice5b").empty();
                $(".choice5c").empty();
                $(".choice5d").empty();
                $(".choice6a").empty();
                $(".choice6b").empty();
                $(".choice6c").empty();
                $(".choice6d").empty();
                $(".choice7a").empty();
                $(".choice7b").empty();
                $(".choice7c").empty();
                $(".choice7d").empty();
                $(".choice8a").empty();
                $(".choice8b").empty();
                $(".choice8c").empty();
                $(".choice8d").empty();
                $(".choice9a").empty();
                $(".choice9b").empty();
                $(".choice9c").empty();
                $(".choice9d").empty();
                $(".choice10a").empty();
                $(".choice10b").empty();
                $(".choice10c").empty();
                $(".choice10d").empty();
                // $(".play-again").append("<img src =nbalogo.jpg><br>Click the image to play again.");
            }
        }, 1000);
    }

    //QUESTION 1 CHOICES
    //disabled buttons once selection is made--done
    $(".choice1a").on('click', function () {
        console.log('choice1a clicked');
        $(".question1-image").append(currentQuiz[0].image); //append image
        //disabled all other buttons upon choosing an answer
        $(this).attr('disabled', 'disabled');
        $(".choice2a").attr('disabled', 'disabled');
        $(".choice3a").attr('disabled', 'disabled');
        $(".choice4a").attr('disabled', 'disabled');
        console.log('current Quiz Choice 1;', currentQuiz[0].choices[0]);
        console.log('question 1 answer: ', currentQuiz[0].answer);
        if (currentQuiz[0].choices[0] === currentQuiz[0].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(this).css('background', 'green');
            $(".choice2a").empty();
            $(".choice3a").empty();
            $(".choice4a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(this).css('background', 'red');
            $(".choice2a").empty();
            $(".choice3a").empty();
            $(".choice4a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifWrong;
        }
    })
    $(".choice2a").on('click', function () {
        console.log('choice2a clicked');
        $(".question1-image").append(currentQuiz[0].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1a").attr('disabled', 'disabled');
        $(".choice3a").attr('disabled', 'disabled');
        $(".choice4a").attr('disabled', 'disabled');

        if (currentQuiz[0].choices[1] === currentQuiz[0].answer) {
            correct++;
            console.log('correct', correct);
            $(this).css('background', 'green');
            $(".choice1a").empty();
            $(".choice3a").empty();
            $(".choice4a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(this).css('background', 'red');
            $(".choice1a").empty();
            $(".choice3a").empty();
            $(".choice4a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifWrong;
        }
    })
    $(".choice3a").on('click', function () {
        console.log('choice3a clicked');
        $(".question1-image").append(currentQuiz[0].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1a").attr('disabled', 'disabled');
        $(".choice2a").attr('disabled', 'disabled');
        $(".choice4a").attr('disabled', 'disabled');
        if (currentQuiz[0].choices[2] === currentQuiz[0].answer) {
            correct++;
            console.log('correct', correct);
            $(this).css('background', 'green');
            $(".choice1a").empty();
            $(".choice2a").empty();
            $(".choice4a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(this).css('background', 'red');
            $(".choice1a").empty();
            $(".choice2a").empty();
            $(".choice4a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifWrong;
        }
    })
    $(".choice4a").on('click', function () {
        console.log('choice4a clicked');
        $(".question1-image").append(currentQuiz[0].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1a").attr('disabled', 'disabled');
        $(".choice2a").attr('disabled', 'disabled');
        $(".choice3a").attr('disabled', 'disabled');
        if (currentQuiz[0].choices[3] === currentQuiz[0].answer) {
            correct++;
            console.log('correct', correct);
            $(this).css('background', 'green');
            $(".choice1a").empty();
            $(".choice2a").empty();
            $(".choice3a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(this).css('background', 'red');
            $(".choice1a").empty();
            $(".choice2a").empty();
            $(".choice3a").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[0].ifWrong;
        }
    })
    //Question 2 choices

    $(".choice1b").on('click', function () {
        console.log('choice1b clicked');
        $(".question2-image").append(currentQuiz[1].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2b").attr('disabled', 'disabled');
        $(".choice3b").attr('disabled', 'disabled');
        $(".choice4b").attr('disabled', 'disabled');
        if (currentQuiz[1].choices[0] === currentQuiz[1].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1b").css('background', 'green');
            $(".choice2b").empty();
            $(".choice3b").empty();
            $(".choice4b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1b").css('background', 'red');
            $(".choice2b").empty();
            $(".choice3b").empty();
            $(".choice4b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifWrong;

        }
    })
    $(".choice2b").on('click', function () {
        console.log('choice2a clicked');
        $(".question2-image").append(currentQuiz[1].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1b").attr('disabled', 'disabled');
        $(".choice3b").attr('disabled', 'disabled');
        $(".choice4b").attr('disabled', 'disabled');
        if (currentQuiz[1].choices[1] === currentQuiz[1].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2b").css('background', 'green');
            $(".choice1b").empty();
            $(".choice3b").empty();
            $(".choice4b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2b").css('background', 'red');
            $(".choice1b").empty();
            $(".choice3b").empty();
            $(".choice4b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifWrong;
        }
    })
    $(".choice3b").on('click', function () {
        console.log('choice1c clicked');
        $(".question2-image").append(currentQuiz[1].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1b").attr('disabled', 'disabled');
        $(".choice2b").attr('disabled', 'disabled');
        $(".choice4b").attr('disabled', 'disabled');
        if (currentQuiz[1].choices[2] === currentQuiz[1].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3b").css('background', 'green');
            $(".choice1b").empty();
            $(".choice2b").empty();
            $(".choice4b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3b").css('background', 'red');
            $(".choice1b").empty();
            $(".choice2b").empty();
            $(".choice4b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifWrong;
        }
    })
    $(".choice4b").on('click', function () {
        console.log('choice1d clicked');
        $(".question2-image").append(currentQuiz[1].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1b").attr('disabled', 'disabled');
        $(".choice2b").attr('disabled', 'disabled');
        $(".choice3b").attr('disabled', 'disabled');
        if (currentQuiz[1].choices[3] === currentQuiz[1].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4b").css('background', 'green');
            $(".choice1b").empty();
            $(".choice2b").empty();
            $(".choice3b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4b").css('background', 'red');
            $(".choice1b").empty();
            $(".choice2b").empty();
            $(".choice3b").empty();
            document.querySelector(".result2").innerHTML = currentQuiz[1].ifWrong;
        }
    })

    //Q3 choices
    $(".choice1c").on('click', function () {
        console.log('choice1c clicked');
        $(".question3-image").append(currentQuiz[2].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2c").attr('disabled', 'disabled');
        $(".choice3c").attr('disabled', 'disabled');
        $(".choice4c").attr('disabled', 'disabled');
        if (currentQuiz[2].choices[0] === currentQuiz[2].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1c").css('background', 'green');
            $(".choice2c").empty();
            $(".choice3c").empty();
            $(".choice4c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1c").css('background', 'red');
            $(".choice2c").empty();
            $(".choice3c").empty();
            $(".choice4c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifWrong;
        }
    })
    $(".choice2c").on('click', function () {
        console.log('choice2c clicked');
        $(".question3-image").append(currentQuiz[2].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1c").attr('disabled', 'disabled');
        $(".choice3c").attr('disabled', 'disabled');
        $(".choice4c").attr('disabled', 'disabled');
        if (currentQuiz[2].choices[1] === currentQuiz[2].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2c").css('background', 'green');
            $(".choice1c").empty();
            $(".choice3c").empty();
            $(".choice4c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2c").css('background', 'red');
            $(".choice1c").empty();
            $(".choice3c").empty();
            $(".choice4c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifWrong;
        }
    })
    $(".choice3c").on('click', function () {
        console.log('choice3c clicked');
        $(".question3-image").append(currentQuiz[2].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1c").attr('disabled', 'disabled');
        $(".choice2c").attr('disabled', 'disabled');
        $(".choice4c").attr('disabled', 'disabled');
        if (currentQuiz[2].choices[2] === currentQuiz[2].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3c").css('background', 'green');
            $(".choice1c").empty();
            $(".choice2c").empty();
            $(".choice4c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3c").css('background', 'red');
            $(".choice1c").empty();
            $(".choice2c").empty();
            $(".choice4c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifWrong;
        }
    })
    $(".choice4c").on('click', function () {
        console.log('choice4c clicked');
        $(".question3-image").append(currentQuiz[2].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1c").attr('disabled', 'disabled');
        $(".choice2c").attr('disabled', 'disabled');
        $(".choice3c").attr('disabled', 'disabled');
        if (currentQuiz[2].choices[3] === currentQuiz[2].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4c").css('background', 'green');
            $(".choice1c").empty();
            $(".choice2c").empty();
            $(".choice3c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4c").css('background', 'red');
            $(".choice1c").empty();
            $(".choice2c").empty();
            $(".choice3c").empty();
            document.querySelector(".result3").innerHTML = currentQuiz[2].ifWrong;
        }
    })

    //Question 4 choices
    $(".choice1d").on('click', function () {
        console.log('choice1d clicked');
        $(".question4-image").append(currentQuiz[3].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2d").attr('disabled', 'disabled');
        $(".choice3d").attr('disabled', 'disabled');
        $(".choice4d").attr('disabled', 'disabled');
        if (currentQuiz[3].choices[0] === currentQuiz[3].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1d").css('background', 'green');
            $(".choice2d").empty();
            $(".choice3d").empty();
            $(".choice4d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1d").css('background', 'red');
            $(".choice2d").empty();
            $(".choice3d").empty();
            $(".choice4d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifWrong;
        }
    })
    $(".choice2d").on('click', function () {
        console.log('choice2d clicked');
        $(".question4-image").append(currentQuiz[3].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1d").attr('disabled', 'disabled');
        $(".choice3d").attr('disabled', 'disabled');
        $(".choice4d").attr('disabled', 'disabled');
        if (currentQuiz[3].choices[1] === currentQuiz[3].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2d").css('background', 'green');
            $(".choice1d").empty();
            $(".choice3d").empty();
            $(".choice4d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2d").css('background', 'red');
            $(".choice1d").empty();
            $(".choice3d").empty();
            $(".choice4d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifWrong;
        }
    })
    $(".choice3d").on('click', function () {
        console.log('choice3d clicked');
        $(".question4-image").append(currentQuiz[3].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1d").attr('disabled', 'disabled');
        $(".choice2d").attr('disabled', 'disabled');
        $(".choice4d").attr('disabled', 'disabled');
        if (currentQuiz[3].choices[2] === currentQuiz[3].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3d").css('background', 'green');
            $(".choice1d").empty();
            $(".choice2d").empty();
            $(".choice4d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3d").css('background', 'red');
            $(".choice1d").empty();
            $(".choice2d").empty();
            $(".choice4d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifWrong;
        }
    })
    $(".choice4d").on('click', function () {
        $(".question4-image").append(currentQuiz[3].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1d").attr('disabled', 'disabled');
        $(".choice2d").attr('disabled', 'disabled');
        $(".choice3d").attr('disabled', 'disabled');
        console.log('choice4d clicked');
        if (currentQuiz[3].choices[3] === currentQuiz[3].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4d").css('background', 'green');
            $(".choice1d").empty();
            $(".choice2d").empty();
            $(".choice3d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4d").css('background', 'red');
            $(".choice1d").empty();
            $(".choice2d").empty();
            $(".choice3d").empty();
            document.querySelector(".result4").innerHTML = currentQuiz[3].ifWrong;
        }
    })

    //Question 5 choices
    $(".choice1e").on('click', function () {
        console.log('choice1e clicked');
        $(".question5-image").append(currentQuiz[4].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2e").attr('disabled', 'disabled');
        $(".choice3e").attr('disabled', 'disabled');
        $(".choice4e").attr('disabled', 'disabled');
        if (currentQuiz[4].choices[0] === currentQuiz[4].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1e").css('background', 'green');
            $(".choice2e").empty();
            $(".choice3e").empty();
            $(".choice4e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1e").css('background', 'red');
            $(".choice2e").empty();
            $(".choice3e").empty();
            $(".choice4e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifWrong;
        }
    })
    $(".choice2e").on('click', function () {
        console.log('choice2e clicked');
        $(".question5-image").append(currentQuiz[4].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1e").attr('disabled', 'disabled');
        $(".choice3e").attr('disabled', 'disabled');
        $(".choice4e").attr('disabled', 'disabled');
        if (currentQuiz[4].choices[1] === currentQuiz[4].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2e").css('background', 'green');
            $(".choice1e").empty();
            $(".choice3e").empty();
            $(".choice4e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2e").css('background', 'red');
            $(".choice1e").empty();
            $(".choice3e").empty();
            $(".choice4e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifWrong;
        }
    })
    $(".choice3e").on('click', function () {
        console.log('choice3e clicked');
        $(".question5-image").append(currentQuiz[4].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1e").attr('disabled', 'disabled');
        $(".choice2e").attr('disabled', 'disabled');
        $(".choice4e").attr('disabled', 'disabled');
        if (currentQuiz[4].choices[2] === currentQuiz[4].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3e").css('background', 'green');
            $(".choice1e").empty();
            $(".choice2e").empty();
            $(".choice4e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3e").css('background', 'red');
            $(".choice1e").empty();
            $(".choice2e").empty();
            $(".choice4e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifWrong;
        }
    })
    $(".choice4e").on('click', function () {
        console.log('choice4e clicked');
        $(".question5-image").append(currentQuiz[4].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1e").attr('disabled', 'disabled');
        $(".choice2e").attr('disabled', 'disabled');
        $(".choice3e").attr('disabled', 'disabled');
        if (currentQuiz[4].choices[3] === currentQuiz[4].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4e").css('background', 'green');
            $(".choice1e").empty();
            $(".choice2e").empty();
            $(".choice3e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4e").css('background', 'red');
            $(".choice1e").empty();
            $(".choice2e").empty();
            $(".choice3e").empty();
            document.querySelector(".result5").innerHTML = currentQuiz[4].ifWrong;
        }
    })

    //Question 6 choices --> fix indices from 6-10
    $(".choice1f").on('click', function () {
        console.log('choice1f clicked');
        $(".question6-image").append(currentQuiz[5].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2f").attr('disabled', 'disabled');
        $(".choice3f").attr('disabled', 'disabled');
        $(".choice4f").attr('disabled', 'disabled');
        if (currentQuiz[5].choices[0] === currentQuiz[5].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1f").css('background', 'green');
            $(".choice2f").empty();
            $(".choice3f").empty();
            $(".choice4f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1f").css('background', 'red');
            $(".choice2f").empty();
            $(".choice3f").empty();
            $(".choice4f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifWrong;
        }
    })
    $(".choice2f").on('click', function () {
        console.log('choice2f clicked');
        $(".question6-image").append(currentQuiz[5].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1f").attr('disabled', 'disabled');
        $(".choice3f").attr('disabled', 'disabled');
        $(".choice4f").attr('disabled', 'disabled');
        if (currentQuiz[5].choices[1] === currentQuiz[5].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2f").css('background', 'green');
            $(".choice1f").empty();
            $(".choice3f").empty();
            $(".choice4f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2f").css('background', 'red');
            $(".choice1f").empty();
            $(".choice3f").empty();
            $(".choice4f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifWrong;
        }
    })
    $(".choice3f").on('click', function () {
        console.log('choice3f clicked');
        $(".question6-image").append(currentQuiz[5].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1f").attr('disabled', 'disabled');
        $(".choice2f").attr('disabled', 'disabled');
        $(".choice4f").attr('disabled', 'disabled');
        if (currentQuiz[5].choices[2] === currentQuiz[5].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3f").css('background', 'green');
            $(".choice1f").empty();
            $(".choice2f").empty();
            $(".choice4f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3f").css('background', 'red');
            $(".choice1f").empty();
            $(".choice2f").empty();
            $(".choice4f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifWrong;
        }
    })
    $(".choice4f").on('click', function () {
        console.log('choice4f clicked');
        $(".question6-image").append(currentQuiz[5].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1f").attr('disabled', 'disabled');
        $(".choice2f").attr('disabled', 'disabled');
        $(".choice3f").attr('disabled', 'disabled');
        if (currentQuiz[5].choices[3] === currentQuiz[5].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4f").css('background', 'green');
            $(".choice1f").empty();
            $(".choice2f").empty();
            $(".choice3f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4f").css('background', 'red');
            $(".choice1f").empty();
            $(".choice2f").empty();
            $(".choice3f").empty();
            document.querySelector(".result6").innerHTML = currentQuiz[5].ifWrong;
        }
    })

    //Question 7 choices
    $(".choice1g").on('click', function () {
        console.log('choice1g clicked');
        $(".question7-image").append(currentQuiz[6].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2g").attr('disabled', 'disabled');
        $(".choice3g").attr('disabled', 'disabled');
        $(".choice4g").attr('disabled', 'disabled');
        if (currentQuiz[6].choices[0] === currentQuiz[6].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1g").css('background', 'green');
            $(".choice2g").empty();
            $(".choice3g").empty();
            $(".choice4g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1g").css('background', 'red');
            $(".choice2g").empty();
            $(".choice3g").empty();
            $(".choice4g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifWrong;
        }
    })
    $(".choice2g").on('click', function () {
        console.log('choice2g clicked');
        $(".question7-image").append(currentQuiz[6].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1g").attr('disabled', 'disabled');
        $(".choice3g").attr('disabled', 'disabled');
        $(".choice4g").attr('disabled', 'disabled');
        if (currentQuiz[6].choices[1] === currentQuiz[6].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2g").css('background', 'green');
            $(".choice1g").empty();
            $(".choice3g").empty();
            $(".choice4g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2g").css('background', 'red');
            $(".choice1g").empty();
            $(".choice3g").empty();
            $(".choice4g").empty();
            document.querySelector(".result1").innerHTML = currentQuiz[6].ifWrong;
        }
    })
    $(".choice3g").on('click', function () {
        console.log('choice3a clicked');
        $(".question7-image").append(currentQuiz[6].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1g").attr('disabled', 'disabled');
        $(".choice2g").attr('disabled', 'disabled');
        $(".choice4g").attr('disabled', 'disabled');
        if (currentQuiz[6].choices[2] === currentQuiz[6].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3g").css('background', 'green');
            $(".choice1g").empty();
            $(".choice2g").empty();
            $(".choice4g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3g").css('background', 'red');
            $(".choice1g").empty();
            $(".choice2g").empty();
            $(".choice4g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifWrong;
        }
    })
    $(".choice4g").on('click', function () {
        console.log('choice4a clicked');
        $(".question7-image").append(currentQuiz[6].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1g").attr('disabled', 'disabled');
        $(".choice2g").attr('disabled', 'disabled');
        $(".choice3g").attr('disabled', 'disabled');
        if (currentQuiz[6].choices[3] === currentQuiz[6].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4g").css('background', 'green');
            $(".choice1g").empty();
            $(".choice2g").empty();
            $(".choice3g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4g").css('background', 'red');
            $(".choice1g").empty();
            $(".choice2g").empty();
            $(".choice3g").empty();
            document.querySelector(".result7").innerHTML = currentQuiz[6].ifWrong;
        }
    })

    //Question 8 choices
    $(".choice1h").on('click', function () {
        console.log('choice1h clicked');
        $(".question8-image").append(currentQuiz[7].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2h").attr('disabled', 'disabled');
        $(".choice3h").attr('disabled', 'disabled');
        $(".choice4h").attr('disabled', 'disabled');
        if (currentQuiz[7].choices[0] === currentQuiz[7].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1h").css('background', 'green');
            $(".choice2h").empty();
            $(".choice3h").empty();
            $(".choice4h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1h").css('background', 'red');
            $(".choice2h").empty();
            $(".choice3h").empty();
            $(".choice4h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifWrong;
        }
    })
    $(".choice2h").on('click', function () {
        console.log('choice2h clicked');
        $(".question8-image").append(currentQuiz[7].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1h").attr('disabled', 'disabled');
        $(".choice3h").attr('disabled', 'disabled');
        $(".choice4h").attr('disabled', 'disabled');
        if (currentQuiz[7].choices[1] === currentQuiz[7].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2h").css('background', 'green');
            $(".choice1h").empty();
            $(".choice3h").empty();
            $(".choice4h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2h").css('background', 'red');
            $(".choice1h").empty();
            $(".choice3h").empty();
            $(".choice4h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifWrong;
        }
    })
    $(".choice3h").on('click', function () {
        console.log('choice3h clicked');
        $(".question8-image").append(currentQuiz[7].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1h").attr('disabled', 'disabled');
        $(".choice2h").attr('disabled', 'disabled');
        $(".choice4h").attr('disabled', 'disabled');
        if (currentQuiz[7].choices[2] === currentQuiz[7].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3h").css('background', 'green');
            $(".choice1h").empty();
            $(".choice2h").empty();
            $(".choice4h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3h").css('background', 'red');
            $(".choice1h").empty();
            $(".choice2h").empty();
            $(".choice4h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifWrong;
        }
    })
    $(".choice4h").on('click', function () {
        console.log('choice4a clicked');
        $(".question8-image").append(currentQuiz[7].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1h").attr('disabled', 'disabled');
        $(".choice2h").attr('disabled', 'disabled');
        $(".choice3h").attr('disabled', 'disabled');
        if (currentQuiz[7].choices[3] === currentQuiz[7].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4h").css('background', 'green');
            $(".choice1h").empty();
            $(".choice2h").empty();
            $(".choice3h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4h").css('background', 'red');
            $(".choice1h").empty();
            $(".choice2h").empty();
            $(".choice3h").empty();
            document.querySelector(".result8").innerHTML = currentQuiz[7].ifWrong;
        }
    })

    //Question 9 choices
    $(".choice1i").on('click', function () {
        console.log('choice1i clicked');
        $(".question9-image").append(currentQuiz[8].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2i").attr('disabled', 'disabled');
        $(".choice3i").attr('disabled', 'disabled');
        $(".choice4i").attr('disabled', 'disabled');
        if (currentQuiz[8].choices[0] === currentQuiz[8].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1i").css('background', 'green');
            $(".choice2i").empty();
            $(".choice3i").empty();
            $(".choice4i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1i").css('background', 'red');
            $(".choice2i").empty();
            $(".choice3i").empty();
            $(".choice4i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifWrong;
        }
    })
    $(".choice2i").on('click', function () {
        console.log('choice2a clicked');
        $(".question9-image").append(currentQuiz[8].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1i").attr('disabled', 'disabled');
        $(".choice3i").attr('disabled', 'disabled');
        $(".choice4i").attr('disabled', 'disabled');
        if (currentQuiz[8].choices[1] === currentQuiz[8].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2i").css('background', 'green');
            $(".choice1i").empty();
            $(".choice3i").empty();
            $(".choice4i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2i").css('background', 'red');
            $(".choice1i").empty();
            $(".choice3i").empty();
            $(".choice4i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifWrong;
        }
    })
    $(".choice3i").on('click', function () {
        console.log('choice3i clicked');
        $(".question9-image").append(currentQuiz[8].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1i").attr('disabled', 'disabled');
        $(".choice2i").attr('disabled', 'disabled');
        $(".choice4i").attr('disabled', 'disabled');
        if (currentQuiz[8].choices[2] === currentQuiz[8].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3i").css('background', 'green');
            $(".choice1i").empty();
            $(".choice2i").empty();
            $(".choice4i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3i").css('background', 'red');
            $(".choice1i").empty();
            $(".choice2i").empty();
            $(".choice4i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifWrong;
        }
    })
    $(".choice4i").on('click', function () {
        console.log('choice4i clicked');
        $(".question9-image").append(currentQuiz[8].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1i").attr('disabled', 'disabled');
        $(".choice2i").attr('disabled', 'disabled');
        $(".choice3i").attr('disabled', 'disabled');
        if (currentQuiz[8].choices[3] === currentQuiz[8].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4i").css('background', 'green');
            $(".choice1i").empty();
            $(".choice2i").empty();
            $(".choice3i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4i").css('background', 'red');
            $(".choice1i").empty();
            $(".choice2i").empty();
            $(".choice3i").empty();
            document.querySelector(".result9").innerHTML = currentQuiz[8].ifWrong;
        }
    })

    //Question 10 choices
    $(".choice1j").on('click', function () {
        console.log('choice1j clicked');
        $(".question10-image").append(currentQuiz[9].image);
        $(this).attr('disabled', 'disabled');
        $(".choice2j").attr('disabled', 'disabled');
        $(".choice3j").attr('disabled', 'disabled');
        $(".choice4j").attr('disabled', 'disabled');
        if (currentQuiz[9].choices[0] === currentQuiz[9].answer) {
            console.log('correct', correct);
            correct++;
            console.log('correct', correct);
            $(".choice1j").css('background', 'green');
            $(".choice2j").empty();
            $(".choice3j").empty();
            $(".choice4j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice1j").css('background', 'red');
            $(".choice2j").empty();
            $(".choice3j").empty();
            $(".choice4j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifWrong;
        }
    })
    $(".choice2j").on('click', function () {
        console.log('choice2j clicked');
        $(".question10-image").append(currentQuiz[9].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1j").attr('disabled', 'disabled');
        $(".choice3j").attr('disabled', 'disabled');
        $(".choice4j").attr('disabled', 'disabled');
        if (currentQuiz[9].choices[1] === currentQuiz[9].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice2j").css('background', 'green');
            $(".choice1j").empty();
            $(".choice3j").empty();
            $(".choice4j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice2j").css('background', 'red');
            $(".choice1j").empty();
            $(".choice3j").empty();
            $(".choice4j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifWrong;
        }
    })
    $(".choice3j").on('click', function () {
        console.log('choice3a clicked');
        $(".question10-image").append(currentQuiz[9].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1j").attr('disabled', 'disabled');
        $(".choice2j").attr('disabled', 'disabled');
        $(".choice4j").attr('disabled', 'disabled');
        if (currentQuiz[9].choices[2] === currentQuiz[9].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice3j").css('background', 'green');
            $(".choice1j").empty();
            $(".choice2j").empty();
            $(".choice4j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifRight;
        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice3j").css('background', 'red');
            $(".choice1j").empty();
            $(".choice2j").empty();
            $(".choice4j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifWrong;
        }
    })
    $(".choice4j").on('click', function () {
        console.log('choice4a clicked');
        $(".question10-image").append(currentQuiz[9].image);
        $(this).attr('disabled', 'disabled');
        $(".choice1j").attr('disabled', 'disabled');
        $(".choice2j").attr('disabled', 'disabled');
        $(".choice3j").attr('disabled', 'disabled');
        if (currentQuiz[9].choices[3] === currentQuiz[9].answer) {
            correct++;
            console.log('correct', correct);
            $(".choice4j").css('background', 'green');
            $(".choice1j").empty();
            $(".choice2j").empty();
            $(".choice3j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifRight;

        }
        else {
            console.log('incorrect');
            incorrect++;
            console.log(incorrect);
            $(".choice4j").css('background', 'red');
            $(".choice1j").empty();
            $(".choice2j").empty();
            $(".choice3j").empty();
            document.querySelector(".result10").innerHTML = currentQuiz[9].ifWrong;

        }
    })

    //delete most of below

    $(".play-again").on("click", function () {
        //loadNewQuestion();
        console.log('play again clicked');
        $(".result").empty();
        //document.querySelector(".correct").innerHTML = 0;
        //document.querySelector(".incorrect").innerHTML = 0;
        //correct = 0; //this reset the score, but nothing happens when start is clicked after a game resets
        //incorrect = 0;
        console.log('total score', parseInt(correct) + parseInt(incorrect));
        initializeGame();//neither this nor initialize work
        //location.reload();
    })
})

