function bgColor() {
  return 'rgba(' + Math.floor(Math.random() * 256) + ', ' +
  Math.floor(Math.random() * 256) + ', ' +
  Math.floor(Math.random() * 256) + ', 0.2)';
 }

function copyToClipboard() {
  var copyBox = document.getElementById('copyBox');
  copyBox.select();
  document.execCommand('copy');
  var tooltipOptions = {
    content: 'Hashtags Copied!',
    delay: 2000,
    placement: 'top',
    trigger: 'click'
  };
  $('#hashtagCopy').tooltip(tooltipOptions);
}
  
$(document).ready(function () {
  $('#currentYear').html(new Date().getFullYear());
  $('.gradient-bg').css('background-image', 'linear-gradient(to bottom right, ' + bgColor() + ', ' + bgColor() + ''); 
});