musicApp.controller('audioPlayController', function($scope, allNotes, $rootScope) {


    //calls all the play functions in note class
    $scope.padplay = function(pad){
        if (event.shiftKey){
            allNotes[pad].loop();
        }
        else if ($scope.spam){
            allNotes[pad].spam();
        }
        else{
            allNotes[pad].play();
        }
    };

   //Master Volume slider logic to adjust volume
    var slider = document.getElementById('volume');
    $scope.volume = .8;
    //HTML audio between 0 and 1 for 0 to 100%
    slider.noUiSlider.on('slide',function(){
        var volumeSlider = document.getElementById('volume');

        $scope.volume = 1 - volumeSlider.noUiSlider.get();
        for (i = 1; i <= 16; i++){
            var pad = 'pad' + i;
            allNotes[pad].setVolume($scope.volume);
        }
    });

});

//seperate controller for keyboard input
musicApp.controller('keyboardController', function($scope, allNotes, $rootScope) {

    //switch case for all possible keyboard presses
    window.addEventListener('keydown', function(event) {
    if ($rootScope.editing){
        return;
    }
    switch (event.keyCode) {
    case 49: // 1
        if (event.shiftKey){
            allNotes.pad13.loop();
        }
        else if ($scope.spam){
            allNotes.pad13.spam();
        }
        else{
            allNotes.pad13.play();
        }
        break;
    case 50: // 2
        if (event.shiftKey){
            allNotes.pad14.loop();
        }
        else if ($scope.spam){
            allNotes.pad14.spam();
        }
        else{
            allNotes.pad14.play();
        }
        break;
    case 51: // 3
        if (event.shiftKey){
            allNotes.pad15.loop();
        }else if ($scope.spam){
            allNotes.pad15.spam();
        }
        else{
            allNotes.pad15.play();
        }
        break;
    case 52: // 4
        if (event.shiftKey){
            allNotes.pad16.loop();
        }else if ($scope.spam){
            allNotes.pad16.spam();
        }
        else{
            allNotes.pad16.play();
        }
        break;
    case 81: // q
        if (event.shiftKey){
            allNotes.pad9.loop();
        }else if ($scope.spam){
            allNotes.pad9.spam();
        }
        else{
            allNotes.pad9.play();
        }
        break;
    case 87: // w
        if (event.shiftKey){
            allNotes.pad10.loop();
        }else if ($scope.spam){
            allNotes.pad10.spam();
        }
        else{
            allNotes.pad10.play();
        }
        break;
    case 69: // e
        if (event.shiftKey){
            allNotes.pad11.loop();
        }else if ($scope.spam){
            allNotes.pad11.spam();
        }
        else{
            allNotes.pad11.play();
        }
        break;
    case 82: // r
        if (event.shiftKey){
            allNotes.pad12.loop();
        }else if ($scope.spam){
            allNotes.pad12.spam();
        }
        else{
            allNotes.pad12.play();
        }
        break;
    case 65: // a
        if (event.shiftKey){
            allNotes.pad5.loop();
        }else if ($scope.spam){
            allNotes.pad5.spam();
        }
        else{
            allNotes.pad5.play();
        }
        break;
    case 83: // s
        if (event.shiftKey){
            allNotes.pad6.loop();
        }else if ($scope.spam){
            allNotes.pad6.spam();
        }
        else{
            allNotes.pad6.play();
        }
        break;
    case 68: // d
        if (event.shiftKey){
            allNotes.pad7.loop();
        }else if ($scope.spam){
            allNotes.pad7.spam();
        }
        else{
            allNotes.pad7.play();
        }
        break;
    case 70: // f
        if (event.shiftKey){
            allNotes.pad8.loop();
        }else if ($scope.spam){
            allNotes.pad8.spam();
        }
        else{
            allNotes.pad8.play();
        }
        break;
    case 90: // z
        if (event.shiftKey){
            allNotes.pad1.loop();
        }else if ($scope.spam){
            allNotes.pad1.spam();
        }
        else{
            allNotes.pad1.play();
        }
        break;
    case 88: // x
        if (event.shiftKey){
            allNotes.pad2.loop();
        }else if ($scope.spam){
            allNotes.pad2.spam();
        }
        else{
            allNotes.pad2.play();
        }
        break;
    case 67: // c
        if (event.shiftKey){
            allNotes.pad3.loop();
        }else if ($scope.spam){
            allNotes.pad3.spam();
        }
        else{
            allNotes.pad3.play();
        }
        break;
    case 86: // v
        if (event.shiftKey){
            allNotes.pad4.loop();
        }else if ($scope.spam){
            allNotes.pad4.spam();
        }
        else{
            allNotes.pad4.play();
        }
        break;

  }
}, false);

});



musicApp.controller('infoController', function($scope, allNotes, $rootScope) {

    //toggle for edit pad mode
    $scope.editPad = function(){
        if ($scope.editing){
            $rootScope.editing = false;
        }
        else {

            //stops all tracks before going to edit
            for (i = 1; i <= 16; i++){
                var pad = 'pad' + i;
                allNotes[pad].stop();
            }
            $rootScope.editing = true;
        }
    }

    //toggle for color slider changing screen
    $scope.colorSwitch = function(){
        if(!$scope.newColor){
            $scope.newColor = true;
        }
        else{
            $scope.newColor = false;
        }
    }

});

musicApp.controller('editController', function($scope, $http, allNotes){
    //padPicked = toggle
    //padSelect = scope of the pad
    $scope.padpick = function(pad){
        $scope.padPicked = true;
        $scope.padSelect = pad;
    }
    //Toggles off
    $scope.exitEdit = function(){
        $scope.padPicked = false;
    }
    //grabs data from local directory for the time being
    $http.get('js/songData.json').success(function(data) {
        $scope.songList = data;
    });
    //calls to concat string for pathfile
    $scope.songPick = function(songUrl){
        allNotes[$scope.padSelect].setMusic(songUrl);
        $scope.padPicked = false;
    }
    //calls for information of current song on pad
    $scope.currentSong = function(pad){
        if($scope.padPicked){
            return allNotes[pad].getMusic();
        }
    }
});
