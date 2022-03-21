//hides poll-1
var x = document.getElementById("poll-1");
x.style.display = "none";
  
//function addAnswer() {
//    let spare = document.getElementById(lastID).value;
//    if (spare != "") {
//    }
//}

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
    //unhides poll-1
    x.style.display = "block";

    //adds question to TestPoll
    myPoll.addQuestion(document.getElementById("question").value);

    for(i = 1; i <= 4; i++) {
        //get answers
        let spare = document.getElementById(i).value;
        myPoll.addAnswers(spare, i);
        document.getElementById("p1:" + i).innerHTML = spare;
    }

}

function vote(i) {
    let votes = myPoll.vote(i-1);
    document.getElementById("p1r:" + i).innerHTML = votes;
}

function debug() {
    console.log(myPoll)
}

let myPoll = new TestPoll();