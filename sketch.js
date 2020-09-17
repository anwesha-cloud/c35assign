var form, voter, survey;
var count = 0;
var question_1, question_2, question_3, question_4;
var email;
var question1, question2, question3, question4;
var database;
var form_input, submit, title, greeting;
var question_1_value, question_2_value, question_3_value, question_4_value
var voterEmailList = [];
var vote1 = [];
var vote2 = [];
var vote3 = [];
var vote4 = [];

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight - 30); 
database = firebase.database()

title = createElement('h1')
title.html("Survey for the Nation")
title.position(displayWidth/2 - 120, displayHeight/2  - 350)

greeting= createElement('h2')
greeting.html("RESPECT ANIMALS")
greeting.position(displayWidth/2 - 200, displayHeight/2 - 250);

question1 = createElement('h3',"Do you think that there should be some animal shelters for stray animals?")
question_1=createRadio()
question_1.option("YES")
question_1.option("NO")
question_1.option("MAY BE")
question_1_value = question_1.value()

question_1.style('width', '200px');
question_1.position(displayWidth/2 - 100, displayHeight/2 + 10)
question1.position(displayWidth/2 - 280, displayHeight/2 - 50)

question2 = createElement('h3',"Do you think that strict actions should be taken against those who illtreat animals ?")
question_2=createRadio()
question_2.option("YES")
question_2.option("NO")
question_2.option("MAY BE")
question_2_value = question_2.value()

question_2.style('width', '200px');
question2.position(displayWidth/2 - 280, displayHeight/2 + 50)
question_2.position(displayWidth/2 - 100, displayHeight/2 + 110)

question3 = createElement('h3',"Would you like to contribute in making it possible ?")
question_3=createRadio()
question_3.option("YES")
question_3.option("NO")
question_3.option("MAY BE")
question_3_value = question_3.value()

question_3.style('width', '200px');
question3.position(displayWidth/2 - 280, displayHeight/2 + 150)
question_3.position(displayWidth/2 - 100, displayHeight/2 + 230)

question4 = createElement('h3', "Would you spread awareness about this?");
question_4 = createRadio();
question_4.option("YES");
question_4.option("NO");
question_4.option("MAY BE")
question_4_value = question_4.value();

question_4.style('width', '200px');
question4.position(displayWidth/2 - 280, displayHeight/2 + 270)
question_4.position(displayWidth/2 - 100, displayHeight/2 + 330)

email = createElement('h3')
email.html("Your e-mail Id")
email_input  = createInput();
email_input.style('width', '250px')
email_input.position(displayWidth/2 - 130, displayHeight/2 + 450)

submit = createButton("Submit Response");
  submit.position(displayWidth/2 - 70, displayHeight/2 + 520);
  submit.style('margin-bottom', '20px');
  submit.mousePressed(()=>{
      email.hide()
  })
}
function draw(){
    background(255)
    drawSprites();

    submit.mousePressed(()=>{

    vote1.push(question_1.value())
    vote2.push(question_2.value())
    vote3.push(question_3.value())
    vote4.push(question_4.value())

    voterEmailList.push(email_input.value())

    question_1_vote();
    question_2_vote();
    question_3_vote();
    question_4_vote();
  
count = count+1

    updateVoterCount()
    updateInputEmail()

    })
}
function question_1_vote(){
database.ref('/').update({
    vote : vote1
})
}
function question_2_vote(){
database.ref('/').update({
vote : vote2
})
}
function question_3_vote(){
database.ref('/').update({
vote : vote3
})
}  
function question_4_vote(){
 database.ref('/').update({
vote : vote4
})
}
function updateInputEmail() {
database.ref('/').update({
voterEmail :voterEmailList
})
} 
 function updateVoterCount(){
 database.ref('/').update({
 voterCount : count
})
}