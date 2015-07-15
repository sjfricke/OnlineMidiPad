musicApp.controller('audioPlayController', function($scope, allNotes, $rootScope, stopMusic) {


    //calls all the play functions in note class
    $scope.padplay = function(pad){
        allNotes[pad].play();
    };
    
    $scope.killSwitch = function(){
      stopMusic();
    }

  //  Master Volume slider logic to adjust volume
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
musicApp.controller('keyboardController', function($scope, allNotes, $rootScope, stopMusic) {
    
    //listens for shift to stop music
    window.addEventListener('keydown', function(event) {
      if (event.shiftKey) {
        stopMusic();
      }
    });
    
    
    //switch case for all possible keyboard presses
    //also listens for arrow keys
    window.addEventListener('keydown', function(event) {
    if ($rootScope.editing){
        return;
    }
    switch (event.keyCode) {
    case 49: // 1
        allNotes.pad1.play();
        break;
    case 50: // 2
        allNotes.pad2.play();
        break;
    case 51: // 3
        allNotes.pad3.play();
        break;
    case 52: // 4
        allNotes.pad4.play();
        break;
    case 53: // 5
        allNotes.pad5.play();
        break;
    case 54: // 6
        allNotes.pad6.play();
        break;
    case 55: // 7
        allNotes.pad7.play();
        break;
    case 56: // 8
        allNotes.pad8.play();
        break;
    case 57: // 9
        allNotes.pad9.play();
        break;
    case 48: // 0
        allNotes.pad0.play();
        break;
    case 173: // -
        allNotes.padDash.play();
        break;
    case 61: // =
        allNotes.padEquals.play();
        break;
    case 81: // q
        allNotes.padQ.play();
        break;
    case 87: // w
        allNotes.padW.play();
        break;
    case 69: // e
        allNotes.padE.play();
        break;
    case 82: // r
        allNotes.padR.play();
        break;
    case 84: // t
        allNotes.padT.play();
        break;
    case 89: // y
        allNotes.padY.play();
        break;
    case 85: // u
        allNotes.padU.play();
        break;
    case 73: // i
        allNotes.padI.play();
        break;
    case 79: // o
        allNotes.padO.play();
        break;
    case 80: // p
        allNotes.padP.play();
        break;
    case 65: // a
        allNotes.padA.play();
        break;
    case 83: // s
        allNotes.padS.play();
        break;
    case 68: // d
        allNotes.padD.play();
        break;
    case 70: // f
        allNotes.padF.play();
        break;
    case 71: // g
        allNotes.padG.play();
        break;
    case 72: // h
        allNotes.padH.play();
        break;
    case 74: // j
        allNotes.padJ.play();
        break;
    case 75: // k
        allNotes.padK.play();
        break;
    case 76: // l
        allNotes.padL.play();
        break;
    case 90: // z
        allNotes.padZ.play();
        break;
    case 88: // x
        allNotes.padX.play();
        break;
    case 67: // c
        allNotes.padC.play();
        break;
    case 86: // v
        allNotes.padV.play();
        break;
    case 66: // b
        allNotes.padB.play();
        break;
    case 78: // n
        allNotes.padN.play();
        break;
    case 77: // m
        allNotes.padM.play();
        break;
  /*  case 38: // up arrow
        allNotes.padN.play();
        break;
    case 40: // down arrow
        allNotes.padM.play();
        break;*/
  }
}, false);

});



musicApp.controller('infoController', function($scope, allNotes, $rootScope, stopMusic) {

    //toggle for edit pad mode
    $scope.editPad = function(){
        if ($scope.editing){
            $rootScope.editing = false;
        }
        else {

            //stops all tracks before going to edit
            stopMusic();
            $rootScope.editing = true;
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
