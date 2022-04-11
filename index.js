//hides poll-1
var x = document.getElementById("poll-1");
x.style.display = "none";

//set multiVoting to "false" to vote only once or to "true" to vote multiple times
let multiVoting = true;
let voted = false;
let pollCreated = false;

class TestPoll {
    constructor(question, answer = [], results = []) {
        this.question = question;
        this.answer = answer;
        this.results = results;
    }

    addQuestion(questionn) {
        this.question = questionn;
        document.getElementById("p1:0").innerHTML = questionn;
    }

    addAnswers(answers, i) {
        this.answer.push(answers);
        this.results.push(0);
        return ;
    }
    
    vote(i) {
        this.results[i] += 1;
        return this.results[i];
    }
}

function createPoll() {
    if (pollCreated == false) {
        //unhides poll-1
        x.style.display = "block";

        //adds question to TestPoll class
        myPoll.addQuestion(document.getElementById("question").value);

        for(i = 1; i <= 4; i++) {
            //gets the answers and adds them to TestPoll class
            let spare = document.getElementById(i).value;
            myPoll.addAnswers(spare, i);
            document.getElementById("p1:" + i).innerHTML = spare;
        }
        pollCreated = true;
    } else {
        console.log("A poll has been created already")
    }
}

function vote(i) {
    if (multiVoting == true) {
        let votes = myPoll.vote(i-1);
        document.getElementById("p1r:" + i).innerHTML = votes;
        console.log("You have voted with multi vote");
    } else if (voted == false) {
        let votes = myPoll.vote(i-1);
        document.getElementById("p1r:" + i).innerHTML = votes;
        voted = true;
    } else {
        console.log("You have voted already");
    }
}

function debug() {
    console.log(myPoll)
}

let myPoll = new TestPoll();

