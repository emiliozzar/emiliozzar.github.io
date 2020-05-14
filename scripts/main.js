// Image switcher

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/TML.jpg') {
      myImage.setAttribute ('src','images/TMLcover.jpg');
    } else {
      myImage.setAttribute ('src','images/TML.jpg');
    }
}

// Personalized greeting

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName == null) {
  	setUserName()
  } else {
	localStorage.setItem('name', myName);
  	myHeading.textContent = 'Check this loop, ' + myName;
  }

}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Check this loop,' + storedName;
}

myButton.onclick = function() {
  setUserName();
}