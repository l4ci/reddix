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


// Load Settings from LocalStorage 
chrome.extension.sendRequest({method: "getLocalStorageAll"}, function(response) {
  
  console.log(response.data);

  // add width_class to body
  var width = response.data.settings_width;
  if (width !== null){  	
		// Load Settings Width
		switch (width){
			case "full":
				$('body').addClass('width_full');
			break;

			case "normal":
				$('body').addClass('width_normal');
			break;

			case "small":
				$('body').addClass('width_small');
			break;
		}
	}

	// Add color_class to body
	var color = response.data.settings_color;
  if (color !== null){  	
		// Load Settings color
		var name = "color_"+color;
		$('body').addClass(name);
	}

	// Keyboard Navigation
	var keys = response.data.settings_keys;
  if ( (keys !== null) && (keys === "yes")){  	
		// Implement Keyboard Navigation
		
	}

});





// Disable all dropdown menu onclick event and replace with animation
var $menu = $('.dropdown');
$menu.removeAttr('onclick').prop('onclick', null);
$menu.click(function() {
  $(this).nextAll('.drop-choices').slideToggle();
});

// Tabmenu
var $tabmenu = $('.tabmenu');
var $save = $tabmenu.find('.selected').text();

showTabmenu();

$(window).resize(function() {
	showTabmenu();
});

function showTabmenu(){
	if ($(window).width() <= 700) {
		if ($("#show_tabmenu").length <= 0){
			$tabmenu.parent().prepend('<a id="show_tabmenu">'+$save+'</a>');
			$tabmenu.hide();
			$('#show_tabmenu').click(function() {
			  $tabmenu.slideToggle();
			});
		}
	}else{
		$("#show_tabmenu").remove();
		$tabmenu.show();
	}
};


// Replace Footer Menu with Link + Animation
var $footer = $('.footer-parent');
$('.footer').hide();
$('.bottommenu').hide();
$footer.prepend('<a id="show_footer"></a>');
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