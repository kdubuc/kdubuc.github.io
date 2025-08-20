$(document).ready(function() {

    var actions = [
        'check Bluesky',
        'build integrated apps',
        'read books',
        'automate data workflows',
        'listen to music',
    ];

    actions.push($('#do').text());

    $('#do').cycle(actions, {
        delay: 5000,
        transitionDuration: 500,
        transitionEasing: 'swing'
    });

});
