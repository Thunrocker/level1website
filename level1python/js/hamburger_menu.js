$(document).ready(function(){
	// toggle hide and show sidebar on click with slide in animation
	$("#hamburger_btn").click(function(){
		$("nav").animate({'width': 'toggle'});
		$("#nav_triangle").animate({'width': 'toggle'});
	});
});

$(window).resize(function(){
	if ($(window).outerWidth() >= 1080) {
		$("nav").animate({'width': 'show'});
		$("#nav_triangle").animate({'width': 'show'});
	} else {
		$("nav").animate({'width': 'hide'});
		$("#nav_triangle").animate({'width': 'hide'});
	}
});

// hide nav when clicked off it
$(document).mouseup(function(e) { 
    // if the target of the click isn't the nav child of the nav or hamburger button
    if (!$("nav").is(e.target) && !$("#nav_triangle").is(e.target) && !$("#hamburger_btn").is(e.target) && $("nav").has(e.target).length === 0 && $(window).outerWidth() <= 1080) {
        $("nav").animate({'width': 'hide'});
        $("#nav_triangle").animate({'width': 'hide'});
    }
});
// stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it