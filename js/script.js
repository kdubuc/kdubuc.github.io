$(document).ready(function() {

    var actions = [
        'play video games',
        'jog',
        'create apps',
        'check twitter',
        'buy compulsively on amazon'
    ];

    actions.push($('#do').text());

    $('#do').cycle(actions, {
        delay: 5000,
        transitionDuration: 500,
        transitionEasing: 'swing'
    });

    $(window).resize($.throttle(300, function() {
        var pattern = Trianglify({
            width: $(window).innerWidth(),
            height: $(window).innerHeight(),
            cell_size: 120,
            seed: 0.7888697197195143,
            x_colors: ['#6794b1', '#395b65', '#9165a0']
        });

        $('body').css('background-image', 'url('+pattern.png()+')');
    })).resize();

});
