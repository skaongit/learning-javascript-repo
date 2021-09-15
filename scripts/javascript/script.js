let submitButton = document.querySelector('#submit-button');

function clickListener(event){

    event.preventDefault();
    document.getElementById("demo").innerHTML = "Hello " +document.getElementById(`submit-text`).value;
}

submitButton.addEventListener('click', clickListener);

function buttonFunction(){
    
    document.getElementById(`text-area`).value = "The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start.";
}
function hoverFunction(){
    
    document.getElementById(`image-text`).value = "Explosion fused, hover away to detonate";
   
}
function hoverOut(){
    document.getElementById(`image-text`).value = "💥💥💥💥💥💥💥💥💥💥💥💥";
}