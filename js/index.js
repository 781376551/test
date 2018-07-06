$(function () {
    $('.num_shu').focus(function () {
        $('.reg').css({
            background: 'linear-gradient(-1deg, #EB2546 0%, #FF5B4D 100%)'
        })
    })
    $('.num_shu').focusout(function () {
        $('.reg').css({
            background: '#EEEEEE'
        })
    })
    $('.num_yzm').click(function () {
        $('.num_yzm').html('49s后重新获取')
    })
})