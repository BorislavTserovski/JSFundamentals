function attachEventsListeners() {
    let daysButton = document.getElementById('daysBtn')
    let hoursButton = document.getElementById('hoursBtn')
    let minutesButton = document.getElementById('minutesBtn')
    let secondsButton = document.getElementById('secondsBtn')

    daysButton.addEventListener('click', ()=>{
        document.getElementById('hours').value = document.getElementById('days').value * 24
        document.getElementById('minutes').value = document.getElementById('hours').value * 60
        document.getElementById('seconds').value = document.getElementById('minutes').value * 60
    })

    hoursButton.addEventListener('click', ()=>{
        document.getElementById('days').value =document.getElementById('hours').value / 24
        document.getElementById('minutes').value = document.getElementById('hours').value * 60
        document.getElementById('seconds').value = document.getElementById('minutes').value * 60

    })

    minutesButton.addEventListener('click', ()=>{
        document.getElementById('days').value = document.getElementById('minutes').value / 24 / 60
        document.getElementById('hours').value = document.getElementById('minutes').value / 60
        document.getElementById('seconds').value = document.getElementById('minutes').value * 60
    })

    secondsButton.addEventListener('click', ()=>{
        document.getElementById('days').value = document.getElementById('seconds').value / 24 / 60 /60
        document.getElementById('hours').value = document.getElementById('seconds').value / 60 /60
        document.getElementById('minutes').value = document.getElementById('seconds').value /60
    })
}
