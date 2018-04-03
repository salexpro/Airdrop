/* 
@codekit-prepend '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min';
*/

$(document).foundation();

$('form[action]').submit(function(e) {
    e.preventDefault();
    const action = $(this).attr('action');
    switch (action) {
        case 'join':
            $('#join').foundation('open');
            break;
        default:
            break;
    }
});