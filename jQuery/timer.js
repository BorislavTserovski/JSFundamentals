function timer() {
    let interval;
    let ticking = false
    $('#start-timer').on('click', function () {
        if (ticking === true) {
            return;
        }
        interval = setInterval(() => {
            ticking = true
            let hours = $('#hours').text()
            let minutes = $('#minutes').text()
            let seconds = $('#seconds').text()
            seconds++
            if (seconds > 59) {
                seconds = 0
                minutes++
                $('#seconds').text(seconds < 10 ? `${'0' + seconds}` : `${seconds}`)
                $('#minutes').text(minutes < 10 ? `${'0' + minutes}` : `${minutes}`)
            }
            if (minutes > 59) {
                minutes = 0
                hours++
                $('#seconds').text(seconds < 10 ? `${'0' + seconds}` : `${seconds}`)
                $('#minutes').text(minutes < 10 ? `${'0' + minutes}` : `${minutes}`)
                $('#hours').text(hours < 10 ? `${`0` + hours}` : `${hours}`)
            }
            $('#seconds').text(seconds < 10 ? `${'0' + seconds}` : `${seconds}`)


            $('#stop-timer').on('click', function () {
                clearInterval(interval)
               ticking = false

            })
        }, 1000)
    })


}
