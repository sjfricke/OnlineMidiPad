var musicApp = angular.module('musicApp' , ['ngRoute']);

musicApp.run(function($rootScope){

    //set rootScope variable for editing toggle
    $rootScope.editing = false;

 

   /* //Master Volume sliders declared and created
    var slider = document.getElementById('volume');
    noUiSlider.create(slider, {
	start: .2,
    connect: "lower",
    orientation: "vertical",
	range: {
		'min': 0,
		'max': 1
	}

    });*/



});


musicApp.directive('padEdit', function() {
    //displays pad editing view
  return {
    restrict: 'E',
    templateUrl: 'views/padEdit.html'
  };
});


//displays pad Divs for clicking over
musicApp.directive('padLayout', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/padLayout.html'
  };
});

musicApp.factory('stopMusic', function(allNotes){
    var stopMusic = function(){
        //grabs every reference in allNotes and stops
        angular.forEach(allNotes, function(value, key) {
            value.stop();
        });
    }
    return stopMusic;
});

musicApp.factory('setVolume', function(allNotes){
    var setVolume = function(volume){
        //grabs every reference in allNotes and stops
        angular.forEach(allNotes, function(value, key) {
            value.setVolume(volume);
        });
    }
    return setVolume;
});