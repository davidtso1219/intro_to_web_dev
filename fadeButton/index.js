let mylogo = document.getElementById('myLogo');
document.getElementById('myButton').onclick = function(){
  mylogo.classList.add('fade');
  setTimeout(() => {
      mylogo.classList.remove('fade');
      alert(mylogo.classList.toString())
  }, 3000);
}