$(document).ready(function() {

  var actions = [
    'play video games',
    'jog',
    'check twitter',
    'buy compulsively on amazon'
  ];

  actions.push($('#do').text());

  $('#do').cycle(actions, {
    delay: 5000,
    transitionDuration: 500,
    transitionEasing: 'swing'
  });

});
