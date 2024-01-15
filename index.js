console.log("Md Maruf");

let btnEl = document.getElementById('btn');
let bodyEl = document.getElementById('body-one');


function myFunction() {
    bodyEl.classList.toggle('body-two');
}

btnEl.addEventListener('click', function() {
    console.log('Button Has Been Clicked');
   
    setInterval(myFunction, 150);
})


