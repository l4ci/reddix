/*
 LOAD CSS AFTER PAGE LOAD
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('main.css');
(document.head||document.documentElement).appendChild(style);
*/

// Insert meta viewport tag
var $meta = $('meta[name="viewport"]');
$meta.attr('content','width=device-width, initial-scale=1.0');


// Disable subreddit stylesheet
var $userstyle = $('link[rel="stylesheet"][title="applied_subreddit_stylesheet"]');
$userstyle.attr('disabled', 'disabled');

// Disable all dropdown menu onclick event and replace with animation
var $menu = $('.dropdown');
$menu.removeAttr('onclick').prop('onclick', null);
$menu.click(function() {
  $(this).nextAll('.drop-choices').slideToggle();
});

// Replace Footer Menu with Link + Animation
var $footer = $('.footer-parent');
$('.footer').hide();
$('.bottommenu').hide();
$footer.prepend('<a id="show_footer">Show Footer Navigation</a>');
$('#show_footer').click(function(){
	$(this).hide();
	$('.footer').slideDown();
	$('.bottommenu').fadeIn();
});

// Show Comment Link Buttons only on hover
var $cml = $('.comment .noncollapsed');
$('.comment .flat-list.buttons').hide();
$cml.click(function(){
	$(this).find('.flat-list.buttons').toggle();
});