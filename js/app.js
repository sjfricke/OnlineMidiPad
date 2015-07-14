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
    var pad1 = new Note('pad1', 'z', './MusicSections/popCulture/aerodynamic.mp3');
    var pad2 = new Note('pad2', 'x', './MusicSections/popCulture/aroundTheWorld.mp3');
    var pad3 = new Note('pad3', 'c', './MusicSections/popCulture/babyOneMoreTime.mp3');
    var pad4 = new Note('pad4', 'v', './MusicSections/popCulture/bigChordArranged.mp3');
    var pad5 = new Note('pad5', 'a', './MusicSections/popCulture/boysAndGirls.mp3');
    var pad6 = new Note('pad6', 's', './MusicSections/popCulture/capsuleStrings.mp3');
    var pad7 = new Note('pad7', 'd', './MusicSections/popCulture/crawling.mp3');
    var pad8 = new Note('pad8', 'f', './MusicSections/popCulture/dare.mp3');
    var pad9 = new Note('pad9', 'q', './MusicSections/popCulture/drumRiff.mp3');
    var pad10 = new Note('pad10', 'w', './MusicSections/popCulture/heavyCross.mp3');
    var pad11 = new Note('pad11', 'e', './MusicSections/popCulture/ho.mp3');
    var pad12 = new Note('pad12', 'r', './MusicSections/popCulture/hungOut.mp3');
    var pad13 = new Note('pad13', '1', './MusicSections/popCulture/iDecided.mp3');
    var pad14 = new Note('pad14', '2', './MusicSections/popCulture/meAndYou1.mp3');
    var pad15 = new Note('pad15', '3', './MusicSections/popCulture/meAndYou2.mp3');
    var pad16 = new Note('pad16', '4', './MusicSections/meAndYou3.mp3');
/*  var pad1 = new Note('pad1', '1', './MusicSections/popCulture/aerodynamic.mp3');
  var pad2 = new Note('pad2', '2', './MusicSections/popCulture/aroundTheWorld.mp3');
  var pad3 = new Note('pad3', '3', './MusicSections/popCulture/babyOneMoreTime.mp3');
  var pad4 = new Note('pad4', '4', './MusicSections/popCulture/bigChordArranged.mp3');
  var pad5 = new Note('pad5', '5', './MusicSections/popCulture/boysAndGirls.mp3');
  var pad6 = new Note('pad6', '6', './MusicSections/popCulture/capsuleStrings.mp3');
  var pad7 = new Note('pad7', '7', './MusicSections/popCulture/crawling.mp3');
  var pad8 = new Note('pad8', '8', './MusicSections/popCulture/dare.mp3');
  var pad9 = new Note('pad9', '9', './MusicSections/popCulture/drumRiff.mp3');
  var pad10 = new Note('pad10', '0', './MusicSections/popCulture/heavyCross.mp3');
  var pad11 = new Note('pad11', 'dash', './MusicSections/popCulture/ho.mp3');
  var pad12 = new Note('pad12', 'equals', './MusicSections/popCulture/hungOut.mp3');
  var pad13 = new Note('pad13', 'q', './MusicSections/popCulture/iDecided.mp3');
  var pad14 = new Note('pad14', 'w', './MusicSections/popCulture/meAndYou1.mp3');
  var pad15 = new Note('pad15', 'e', './MusicSections/popCulture/meAndYou2.mp3');
  var pad16 = new Note('pad16', 'r', './MusicSections/meAndYou3.mp3');  */
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
