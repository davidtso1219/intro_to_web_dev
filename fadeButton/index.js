let pageOne = document.getElementById('pageOne');
let pageTwo = document.getElementById('pageTwo');


document.getElementById('myButton').onclick = function(){
    pageOne.classList.add('fade');
    setTimeout(fadeIn, 3000);
}

function fadeIn(){
    pageOne.classList.remove('fade');
    pageOne.classList.add('faded');
    pageTwo.classList.add('fade');
}