var origMap;

function doDave(){

	$('.forward').click( function( $event ){

		console.log( "forwardClick" );

		$('#pool').toggleClass('hidden');
		$('#main').toggleClass('hidden');

		$event.stopPropagation();
		$event.preventDefault();
	});


}


function forwardClick( image, map ){

}