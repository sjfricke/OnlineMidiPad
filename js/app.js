var musicApp = angular.module('musicApp' , ['ngRoute']);

musicApp.run(function($rootScope){

    //set rootScope variable for editing toggle
    $rootScope.editing = false;

    //Color Change Sliders declared and created
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

    //Master Volume sliders declared and created
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



});

musicApp.service('allNotes', function (Note) {


    // create notes
    //Current defaults hardcoded here until server side is made
    var pad1 = new Note('pad1', 'z', './MusicSections/Beat 1.mp3');
    var pad2 = new Note('pad2', 'x', './MusicSections/Beat 2.mp3');
    var pad3 = new Note('pad3', 'c', './MusicSections/Kick Drum.mp3');
    var pad4 = new Note('pad4', 'v', './MusicSections/Snare Drum.mp3');
    var pad5 = new Note('pad5', 'a', './MusicSections/Boys and Girls.mp3');
    var pad6 = new Note('pad6', 's', './MusicSections/23.mp3');
    var pad7 = new Note('pad7', 'd', './MusicSections/Around the World.mp3');
    var pad8 = new Note('pad8', 'f', './MusicSections/Missing You.mp3');
    var pad9 = new Note('pad9', 'q', './MusicSections/Dare.mp3');
    var pad10 = new Note('pad10', 'w', './MusicSections/Gangnam.mp3');
    var pad11 = new Note('pad11', 'e', './MusicSections/Razor Sharp.mp3');
    var pad12 = new Note('pad12', 'r', './MusicSections/Pinball.mp3');
    var pad13 = new Note('pad13', '1', './MusicSections/Background 1.mp3');
    var pad14 = new Note('pad14', '2', './MusicSections/Background 2.mp3');
    var pad15 = new Note('pad15', '3', './MusicSections/Thanks for Memories.mp3');
    var pad16 = new Note('pad16', '4', './MusicSections/Viva.mp3');


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

musicApp.directive('padEdit', function() {
    //displays pad editing view
  return {
    restrict: 'E',
    templateUrl: 'views/padEdit.html'
  };
});
