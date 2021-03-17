'use strict';
let userName=prompt('Hello there ! my name is Mohammad, what is yours?');
//console.log(userName);
alert('Welcome '+userName);

alert('So now guess who am I by answering with yes or no to the following questions');
let favorite= prompt('One of my favorite things to do is coding!');
let score=0;
if(favorite.toLowerCase()==='yes' || favorite.toLowerCase()=== 'y')
{
  //console.log('You are right! I love coding');
  alert('You are right! I love coding');
  score++;
}
else if(favorite.toLowerCase()==='no' || favorite.toLowerCase()=== 'n')
{
  //console.log('Of course not! I love coding');
  alert('Of course not! I love coding');

}
else{
  //console.log('Please only enter yes or no');
  alert('Please only enter yes/no or y/n');
  let favorite= prompt('One of my favorite things to do is coding!');

  if(favorite.toLowerCase()==='yes' || favorite.toLowerCase()=== 'y')
  {
  //console.log('You are right! I love coding');
    alert('You are right! I love coding');
    score++;
  }
  else if(favorite.toLowerCase()==='no' || favorite.toLowerCase()=== 'n' )
  {
  //console.log('Of course not! I love coding');
    alert('Of course not! I love coding');

  }
}

let education=prompt('My previous education is related to programming');
if (education.toLowerCase()==='yes' || education.toLowerCase()=== 'y') {
  //console.log('No,unfortunately, I studied chemical engineering');
  alert('No,unfortunately, I studied chemical engineering');

}
else if (education.toLowerCase()==='no' || education.toLowerCase()=== 'n')
{
  //console.log('Wow how  you guessed that! yes I studied chemical engineering');
  alert('Wow how  you guessed that! yes I studied chemical engineering');
  score++;
}
else{
  //console.log('Please only enter yes or no');
  alert('Please only enter yes/no or y/n');
  let education=prompt('My previous education is related to programming')
  if (education.toLowerCase()==='yes' || education.toLowerCase()=== 'y') {
    //console.log('No,unfortunately, I studied chemical engineering');
    alert('No,unfortunately, I studied chemical engineering');

  }
  else if (education.toLowerCase()==='no' || education.toLowerCase()=== 'n')
  {
    //console.log('Wow how  you guessed that! yes I studied chemical engineering');
    alert('Wow how  you guessed that! yes I studied chemical engineering');
    score++;
  }
}
let age=prompt('I am older than 25');
if (age.toLowerCase()==='yes' || age.toLowerCase()=== 'y') {
  //console.log('Not exactly, I am 24 years old');
  alert('Not exactly, I am 24 years old');
}
else if (age.toLowerCase()==='no'|| age.toLowerCase()=== 'n' ) {
  //console.log('Yes! I am 24 years old');
  alert('Yes! I am 24 years old');
  score++;
}
else{
  //console.log('Please only enter yes or no');
  alert('Please only enter yes/no or y/n');
  let age=prompt('I am older than 25');
  if (age.toLowerCase()==='yes' || age.toLowerCase()=== 'y') {
    //console.log('Not exactly, I am 24 years old');
    alert('Not exactly, I am 24 years old');

  }
  else if (age.toLowerCase()==='no' || age.toLowerCase()=== 'n') {
    //console.log('Yes! I am 24 years old');
    alert('Yes! I am 24 years old');
    score++;
  }
}
let hardestDecision=prompt('The hardest decision I’ve ever taken was taking this course');
if (hardestDecision.toLowerCase()==='yes' || hardestDecision.toLowerCase()=== 'y') {
  //console.log('Yes it is, because it will change my career path');
  alert('Yes it is, because it will change my career path');
  score++;
}
else if (hardestDecision.toLowerCase()==='no' || hardestDecision.toLowerCase()=== 'n') {
  //console.log('Yes it is, because it will change my career path');
  alert('Yes it is, because it will change my career path');
}
else{
  //console.log('Please only enter yes or no');
  alert('Please only enter yes/no or y/n');
  let hardestDecision=prompt('The hardest decision I’ve ever taken was taking this course');
  if (hardestDecision.toLowerCase()==='yes' || hardestDecision.toLowerCase()=== 'y') {
    //console.log('Yes it is, because it will change my career path');
    alert('Yes it is, because it will change my career path');
    score++;
  }
  else if (hardestDecision.toLowerCase()==='no' || hardestDecision.toLowerCase()=== 'n') {
    //console.log('Yes it is, because it will change my career path');
    alert('Yes it is, because it will change my career path');
  }
}
let favColor=prompt('My favorite color is red');
if (favColor.toLowerCase()==='yes' || favColor.toLowerCase()=== 'y') {
  //console.log('red is one of my favorite colors but the most favorite one is black');
  alert('No,red is one of my favorite colors but my most favorite one is black');

}
else if (favColor.toLowerCase()==='no' || favColor.toLowerCase()=== 'n') {
  //console.log('True, it is one of my favorite colors but my most favorite one is black');
  alert('True, it is one of my favorite colors but my most favorite one is black');
  score++;
}
else{
  //console.log('Please only enter yes or no');
  alert('Please only enter yes/no or y/n');
  let favColor=prompt('My favorite color is red');
  if (favColor.toLowerCase()==='yes' || favColor.toLowerCase()=== 'y') {
    //console.log('red is one of my favorite colors but the most favorite one is black');
    alert('No,red is one of my favorite colors but my most favorite one is black');

  }
  else if (favColor.toLowerCase()==='no' || favColor.toLowerCase()=== 'n') {
    //console.log('True, it is one of my favorite colors but my most favorite one is black');
    alert('True, it is one of my favorite colors but my most favorite one is black');
    score++;
  }

}
function gyear(){
let year=2015;


for (let i = 0; i<4; i++) {
  let guessedYear=prompt('in which year I finish my High School? "Choose a year between 2005-2021."');
  switch (true) {

  case (Number(guessedYear)===year):
    //console.log('You are right !');
    alert('You are right !');
    score++;

    i=4;
    break;
  case (guessedYear<2011):
    alert('You are too low, try again');
    //console.log('You are too low, try again');
    break;
  case (guessedYear>2018):
    alert('You are too high, try again');
    //console.log('You are too high, try again');
    break;
  default:
    alert('You are so close, try again');
    //console.log('You are so close, try again');
    break;

  } if (i===3) {
    alert('Sorry, you are out of attempts');
    alert('The correct year is 2015');
    //console.log('Sorry, you are out of attempts');
  }}
}
gyear();
let favFood= ['pizza','pasta','burger'];
for (let i = 6; i > 0; i--) {
  let guess=prompt('Can you guess any of my favorite meals? You have only '+i+' attempts left');
  if (guess===favFood[0]||guess===favFood[1]||guess===favFood[2]){
    alert('You are right! '+guess+ ' is one of my favorite meals: '+favFood.valueOf());
    //console.log('You are right! '+guess+ ' is one of my favorite meals: '+favFood.valueOf());
    i=0;
    score++;
  }
  else {
    alert('You are wrong, try again please');
    //console.log('You are wrong, try again please');
  }
  if (i===1) {alert('Sorry, you used all of your attempts');
    alert('My favorite meals are: '+favFood.valueOf());
    //console.log('My favorite meals are: '+favFood.valueOf());

  }
}
alert('Your final score is '+score+' out of 7');
//console.log('Your final score is '+score+' out of 7');
