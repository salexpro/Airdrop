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
let user_email;
user_email = $('[type="email"]', this).val();
$('form[action]').submit(function(e) {
    e.preventDefault();
    const action = $(this).attr('action');
    switch (action) {
        case 'join':
            $('#step2').foundation('open');
            break;
        case 'send':
            $('#success').foundation('open');
            break;
        default:
            break;
    }
});

// Animations
setInterval(() => {
    $('.form--head').toggleClass('bounce');
}, 3000)
