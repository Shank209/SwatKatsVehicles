$(document).ready(function() {
	addEffect();
});

$(window).resize(function() {
	addEffect();
});

$('.frame').hover(function() {
	$(this).find('.effect').stop().animate({'top':'143px'},150);
}, function() {
	$(this).find('.effect').stop().animate({'top':'203px'},150);
});

function addEffect()
{
	if($(window).width()>800)
	{
		$('#links p').addClass('effect');
	}
	else
	{
		$('#links p').removeClass('effect');
	}
}