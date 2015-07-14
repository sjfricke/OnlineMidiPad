var musicApp = angular.module('musicApp' , ['ngRoute']);

musicApp.run(function($rootScope){

    //set rootScope variable for editing toggle
    $rootScope.editing = false;

 

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