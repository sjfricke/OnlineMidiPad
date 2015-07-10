musicApp.controller('audioPlayController', function($scope, allNotes) {
 
    //set of letters to be set on board
    $scope.keyHint = ['1','2','3','4','Q','W','E','R','A','S','D','F','Z','X','C','V']
    $scope.keyHints = function(){
        if ($scope.keyHint[0] === '1'){
            $scope.keyHint = ['','','','','','','','','','','','','','','','']
        }
        else {
            $scope.keyHint = ['1','2','3','4','Q','W','E','R','A','S','D','F','Z','X','C','V']
        }
    };
    
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
    
    var slider = document.getElementById('volume');
    $scope.volume = .8;
    slider.noUiSlider.on('slide',function(){
        var volumeSlider = document.getElementById('volume');
    
        $scope.volume = 1 - volumeSlider.noUiSlider.get();
        for (i = 1; i <= 16; i++){
            var pad = 'pad' + i;
            allNotes[pad].setVolume($scope.volume);
        }
    });
    
    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 74){
            $scope.spam = true;
        }
    });
    window.addEventListener('keyup', function(event) {
        if (event.keyCode == 74){
            $scope.spam = false;
        }
    });
});

//seperate controller for keyboard input
musicApp.controller('keyboardController', function($scope, allNotes) {
    
    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 74){
            $scope.spam = true;
        }
    });
    window.addEventListener('keyup', function(event) {
        if (event.keyCode == 74){
            $scope.spam = false;
        }
    });
    
    window.addEventListener('keydown', function(event) {
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



musicApp.controller('infoController', function($scope) {
    $scope.colorSwitch = function(){
        if(!$scope.newColor){
            $scope.newColor = true;   
        }
        else{
            $scope.newColor = false;
        }
    }
  
});