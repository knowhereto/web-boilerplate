global.$ = global.jQuery = require('jquery');
require('foundation-sites');

$( document ).ready(function() {

    $(document).foundation();
    console.log( "knowhere template ready!" );
});
