var musicApp = angular.module('musicApp' , ['ngRoute']);

musicApp.config(function(){
    var resultElement = document.getElementById('result'),
	sliders = document.getElementsByClassName('sliders');

for ( var i = 0; i < sliders.length; i++ ) {

	noUiSlider.create(sliders[i], {
		start: 127,
		connect: "lower",
		orientation: "vertical",
		range: {
			'min': 0,
			'max': 255
		},
		format: wNumb({
			decimals: 0
		})
	});

	// Bind the color changing function
	// to the slide event.
	sliders[i].noUiSlider.on('slide', setColor);
}
    
    var slider = document.getElementById('volume');
    
   noUiSlider.create(slider, {
	start: .2,
    connect: "lower",
    orientation: "vertical",
	range: {
		'min': 0,
		'max': 1
	}
       
    });
    
    slider.noUiSlider.on('slide', getVolume);
    
    
});

musicApp.service('allNotes', function (Note) {


    // create notes
    var pad1 = new Note('pad1', 'z', './MusicSections/pop/1.mp3');
    var pad2 = new Note('pad2', 'x', './MusicSections/pop/2.mp3');
    var pad3 = new Note('pad3', 'c', './MusicSections/pop/3.mp3');
    var pad4 = new Note('pad4', 'v', './MusicSections/pop/4.mp3');
    var pad5 = new Note('pad5', 'a', './MusicSections/pop/5.mp3');
    var pad6 = new Note('pad6', 's', './MusicSections/pop/6.mp3');
    var pad7 = new Note('pad7', 'd', './MusicSections/pop/7.mp3');
    var pad8 = new Note('pad8', 'f', './MusicSections/pop/8.mp3');
    var pad9 = new Note('pad9', 'q', './MusicSections/pop/9.mp3');
    var pad10 = new Note('pad10', 'w', './MusicSections/pop/10.mp3');
    var pad11 = new Note('pad11', 'e', './MusicSections/pop/11.mp3');
    var pad12 = new Note('pad12', 'r', './MusicSections/pop/12.mp3');
    var pad13 = new Note('pad13', '1', './MusicSections/pop/13.mp3');
    var pad14 = new Note('pad14', '2', './MusicSections/pop/14.mp3');
    var pad15 = new Note('pad15', '3', './MusicSections/pop/15.mp3');
    var pad16 = new Note('pad16', '4', './MusicSections/pop/16.mp3');
    
   
     // return data object to controllers
    return {
        pad1: pad1,
        pad2: pad2,
        pad3: pad3,
        pad4: pad4,
        pad5: pad5,
        pad6: pad6,
        pad7: pad7,
        pad8: pad8,
        pad9: pad9,
        pad10: pad10,
        pad11: pad11,
        pad12: pad12,
        pad13: pad13,
        pad14: pad14,
        pad15: pad15,
        pad16: pad16,
    };
});





