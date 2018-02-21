function validate() {
    let userNameRegex = /^[a-zA-Z0-9]{3,20}$/g
    let passwordRegex = /^[\w]{5,15}$/g
    let emailRegex = /(.)*[@](.)*\.(.)*/g
    let confirmPasswordRegex = /^[\w]{5,15}$/g
    console.log($('#companyNumber').val())
    $('#submit').on('click', function (event) {
        if (!userNameRegex.test($('#username').val())) {
            $("input:first").css('border-color', 'red')
        } else {
            $("input:first").css('border', 'none')
        }
        if (!emailRegex.test($('#email').val())) {
            $("#email").css('border-color', 'red')
        } else {
            $("#email").css('border', 'none')
        }
        if (!passwordRegex.test($('#password').val())||
            $('#confirm-password').val()!==$('#password').val()) {
            $("#password").css('border-color', 'red')
        } else {
            $("#password").css('border', 'none')
        }
        if (!confirmPasswordRegex.test($('#confirm-password').val())||
            $('#confirm-password').val()!==$('#password').val()) {
            $("#confirm-password").css('border-color', 'red')
        } else {
            $("#confirm-password").css('border', 'none')
        }
        let numCheck = $('#companyNumber').css('border') == '0px none rgb(0, 0, 0)'||(!$('#company').is(':checked'))
        if ($('#username').css('border') == '0px none rgb(0, 0, 0)'
            && $('#email').css('border') == '0px none rgb(0, 0, 0)'
            && $('#password').css('border') == '0px none rgb(0, 0, 0)'
            && $('#confirm-password').css('border') == '0px none rgb(0, 0, 0)'
            && (numCheck))
        {
            $('#valid').css('display', 'block')
        } else {
            $('#valid').css('display', 'none');
        }
        $('#companyNumber').css('border-color', 'red')
        event.preventDefault()

    })

    $('#company').on('change', function () {
        if ($('#company').is(':checked')) {
            $('#companyInfo').css('display', 'block')
        } else {
            $('#companyInfo').css('display', 'none')
        }
        $('#companyNumber').on('change', function () {
            $('#companyNumber').css('border-color', 'red')
            if($('#companyNumber').val() >= 1000 && $('#companyNumber').val() <= 9999){
                $('#companyNumber').css('border', 'none')
            }
        })

    })


}