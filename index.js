const rollButton = document.getElementById('roll-Advice');
const adviceText = document.getElementById('advice-Text');
const adviceNumber = document.getElementById('advice-Number');

rollButton.addEventListener('click', ()=> {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data=>{
    
        adviceNumber.innerText = data.slip.id
        adviceText.innerText = data.slip.advice
    })
})