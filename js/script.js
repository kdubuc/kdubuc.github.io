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

});
