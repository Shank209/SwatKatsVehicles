$(document).ready(function() {
	addZoom();
});

$(window).resize(function() {
	addZoom();
});

$('#images').on('mouseover', '.zoom', function() {
	$(this).stop().animate({
		borderColor:'#b23e41'
	}, 200);
});

$('#images').on('mouseout', '.zoom', function() {
	$(this).stop().animate({
		borderColor:'#2b2b2b'
	}, 200);
});

$('#images').on('click', '.zoom', function() {
	$('#dark').show();
	
	$('#holder').attr('src',$(this).attr('src'));
	
	$('#loader').show();
	
	position_loader();
	
	position_holder();
	
	$('#holder').load(function() {
		$('#loader').hide();
	
		$('#holder').stop().fadeTo(200,1);
	});
});

$('#dark').click(function() {
	$(this).fadeOut(100);
	
	$('#loader').hide();
	
	$('#holder').hide();
});

$('#holder').click(function() {
	$('#dark').fadeOut(100);
	
	$('#loader').hide();
	
	$(this).hide();
});

function addZoom()
{
	if($(window).width()>800)
	{
		$('#images img').addClass('zoom');
	}
	else
	{
		$('#images img').removeClass('zoom');
	}
}

function position_holder()
{
	var width,height,w_width,w_height; 
	
	width='640';
	
	height='480';
	
	w_width=$(window).width();
	
	w_height=$(window).height();
	
	var left=(w_width/2)-(width/2)+$(window).scrollLeft()+"px";
	
	var top=(w_height/2)-(height/2)+$(window).scrollTop()+"px";
	
	$('#holder').css('left',left);
	
	$('#holder').css('top',top);
}

function position_loader()
{
	var width,height,w_width,w_height; 
	
	width=25;
	
	height=25;
	
	w_width=$(window).width();
	
	w_height=$(window).height();
	
	var left=(w_width/2)-(width/2)+$(window).scrollLeft()+"px";
	
	var top=(w_height/2)-(height/2)+$(window).scrollTop()+"px";
	
	$('#loader').css('left',left);
	
	$('#loader').css('top',top);
}