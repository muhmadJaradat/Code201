'use strict';
let score=0;

function userName1()
{
  let userName=prompt('Hello there ! my name is Mohammad, what is yours?');
  alert('Welcome '+userName);
}

userName1();
function yesnoq() {alert('So now guess who am I by answering with yes or no to the following questions');
  let favorite= prompt('One of my favorite things to do is coding!');

  if(favorite.toLowerCase()==='yes' || favorite.toLowerCase()=== 'y')
  {
    alert('You are right! I love coding');
    score++;
  }
  else if(favorite.toLowerCase()==='no' || favorite.toLowerCase()=== 'n')
  {
    alert('Of course not! I love coding');

  }
  else{
    alert('Please only enter yes/no or y/n');
    let favorite= prompt('One of my favorite things to do is coding!');

    if(favorite.toLowerCase()==='yes' || favorite.toLowerCase()=== 'y')
    {
      alert('You are right! I love coding');
      score++;
    }
    else if(favorite.toLowerCase()==='no' || favorite.toLowerCase()=== 'n' )
    {
      alert('Of course not! I love coding');

    }
  }let education=prompt('My previous education is related to programming');
  if (education.toLowerCase()==='yes' || education.toLowerCase()=== 'y') {
    alert('No,unfortunately, I studied chemical engineering');

  }
  else if (education.toLowerCase()==='no' || education.toLowerCase()=== 'n')
  {
    alert('Wow how  you guessed that! yes I studied chemical engineering');
    score++;
  }
  else{
    alert('Please only enter yes/no or y/n');
    let education=prompt('My previous education is related to programming')
    if (education.toLowerCase()==='yes' || education.toLowerCase()=== 'y') {
      alert('No,unfortunately, I studied chemical engineering');

    }
    else if (education.toLowerCase()==='no' || education.toLowerCase()=== 'n')
    {
      alert('Wow how  you guessed that! yes I studied chemical engineering');
      score++;
    }
  }
  let age=prompt('I am older than 25');
  if (age.toLowerCase()==='yes' || age.toLowerCase()=== 'y') {
    alert('Not exactly, I am 24 years old');
  }
  else if (age.toLowerCase()==='no'|| age.toLowerCase()=== 'n' ) {
    alert('Yes! I am 24 years old');
    score++;
  }
  else{
    alert('Please only enter yes/no or y/n');
    let age=prompt('I am older than 25');
    if (age.toLowerCase()==='yes' || age.toLowerCase()=== 'y') {
      alert('Not exactly, I am 24 years old');

    }
    else if (age.toLowerCase()==='no' || age.toLowerCase()=== 'n') {
      alert('Yes! I am 24 years old');
      score++;
    }
  }
  let hardestDecision=prompt('The hardest decision I’ve ever taken was taking this course');
  if (hardestDecision.toLowerCase()==='yes' || hardestDecision.toLowerCase()=== 'y') {
    alert('Yes it is, because it will change my career path');
    score++;
  }
  else if (hardestDecision.toLowerCase()==='no' || hardestDecision.toLowerCase()=== 'n') {
    alert('Yes it is, because it will change my career path');
  }
  else{
    alert('Please only enter yes/no or y/n');
    let hardestDecision=prompt('The hardest decision I’ve ever taken was taking this course');
    if (hardestDecision.toLowerCase()==='yes' || hardestDecision.toLowerCase()=== 'y') {
      alert('Yes it is, because it will change my career path');
      score++;
    }
    else if (hardestDecision.toLowerCase()==='no' || hardestDecision.toLowerCase()=== 'n') {
      alert('Yes it is, because it will change my career path');
    }
  }
  let favColor=prompt('My favorite color is red');
  if (favColor.toLowerCase()==='yes' || favColor.toLowerCase()=== 'y') {
    alert('No,red is one of my favorite colors but my most favorite one is black');

  }
  else if (favColor.toLowerCase()==='no' || favColor.toLowerCase()=== 'n') {
    alert('True, it is one of my favorite colors but my most favorite one is black');
    score++;
  }
  else{
    alert('Please only enter yes/no or y/n');
    let favColor=prompt('My favorite color is red');
    if (favColor.toLowerCase()==='yes' || favColor.toLowerCase()=== 'y') {
      alert('No,red is one of my favorite colors but my most favorite one is black');

    }
    else if (favColor.toLowerCase()==='no' || favColor.toLowerCase()=== 'n') {
      alert('True, it is one of my favorite colors but my most favorite one is black');
      score++;
    }
  }


}
yesnoq();

function gyear () {
  let year=2015;


  for (let i = 0; i<4; i++) {
    let guessedYear=prompt('in which year I finish my High School? "Choose a year between 2005-2021."');
    switch (true) {

    case (Number(guessedYear)===year):
      alert('You are right !');
      score++;

      i=4;
      break;
    case (guessedYear<2011):
      alert('You are too low, try again');
      break;
    case (guessedYear>2018):
      alert('You are too high, try again');
      break;
    default:
      alert('You are so close, try again');
      break;

    } if (i===3) {
      alert('Sorry, you are out of attempts');
      alert('The correct year is 2015');
    }}
}
gyear();


function food() {
  let favFood= ['pizza','pasta','burger'];



  for (let i = 6; i > 0; i--) {
    let guess=prompt('Can you guess any of my favorite meals? You have only '+i+' attempts left');
    if (guess===favFood[0]||guess===favFood[1]||guess===favFood[2]){
      alert('You are right! '+guess+ ' is one of my favorite meals: '+favFood.valueOf());
      i=0;
      score++;
    }
    else {
      alert('You are wrong, try again please');
    }
    if (i===1) {alert('Sorry, you used all of your attempts');
      alert('My favorite meals are: '+favFood.valueOf());

    }
  }
}
food();


alert('Your final score is '+score+' out of 7');






