$(document).ready(function() {
    $('.overlay').show();
    $('.popup').show();
    $('.overlay').css('visibility', 'visible').css('opacity', '1');
    
    // Add event listener to close button
    $('.close').click(function() {
    $('.overlay').hide();
    $('.popup').hide();
    $('.overlay').css('visibility', 'hidden').css('opacity', '0');
    });
    });