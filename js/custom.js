// portfolio java script ( edited under fair use)
$('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

// HIDE AFTER CLIKING ON A LINK
   $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });