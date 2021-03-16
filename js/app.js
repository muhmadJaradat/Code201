'use strict';
let userName=prompt('Hello there ! my name is Mohammad, what is yours?');
//console.log(userName);
alert('Welcome '+userName);

alert('So now guess who am I by answering with yes or no to the following questions');
let favorite= prompt('One of my favorite things to do is coding!');

if(favorite.toLowerCase()==='yes' || favorite.toLowerCase()=== 'y')
{
  //console.log('You are right! I love coding');
  alert('You are right! I love coding');
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
  }
}
let hardestDecision=prompt('The hardest decision I’ve ever taken was taking this course');
if (hardestDecision.toLowerCase()==='yes' || hardestDecision.toLowerCase()=== 'y') {
  //console.log('Yes it is, because it will change my career path');
  alert('Yes it is, because it will change my career path');
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
  }

}
