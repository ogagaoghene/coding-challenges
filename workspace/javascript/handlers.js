const firstButton  = document.getElementById('button-one');
const secondButton = document.getElementById('button-two');

firstButton.addEventListener('click', function(event) {
    console.log("First button is clicked!");
});

secondButton.addEventListener('mouseover', function(event) {
    secondButton.innerText = "You hovered over me"
});

document.body.addEventListener('timeEvent', stateTime);

const stateTime = (e) {
    alert(e.details);
}

const myEvent = new CustomEvent('timeEvent',
    { 
        details: new Date()
    }
);