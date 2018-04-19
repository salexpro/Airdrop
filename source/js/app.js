/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min';
*/

$(document).foundation();
const api = 'https://316c5712.ngrok.io/users';
let data = {
    email: '',
    address: ''
};
$('form[action]').submit(function(e) {
    e.preventDefault();
    const action = $(this).attr('action');
    switch (action) {
        case 'join':
            data.email = $('[type="email"]', this).val();
            $('#step2').foundation('open');
            break;
        case 'send':
            $('button', this).prop('disabled', true);
            $('#error .reveal_descr').text('');
            data.address = $('[type="text"]', this).val();
            $.ajax({
                type: 'POST',
                url: api,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(data),
                success: () => {
                    $('#success').foundation('open');
                },
                error: (xhr, textStatus) => {       
                    if(xhr.status === 400){
                        const errs = xhr.responseJSON.errors.reduce((acc, el) => [...acc, ...Object.values(el)], []);
                        
                        errs.forEach(txt => {
                            $('#error .reveal_descr').append('<br>' + txt);
                        });
                        
                        $('#error').foundation('open');
                    } else {
                        console.log(xhr);
                        alert('Error: ' + textStatus);
                    }
                },
                complete: () => {
                    $('button', this).prop('disabled', false);
                }
            })
            
            break;
        default:
            break;
    }
});

// Animations
setInterval(() => {
    $('.form--head').toggleClass('bounce');
}, 3000)
