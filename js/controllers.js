musicApp.controller('audioPlayController', function($scope, allNotes) {
      


    
  $scope.keyHint = ['1','2','3','4','Q','W','E','R','A','S','D','F','Z','X','C','V']
  
  $scope.keyHints = function(){
      if ($scope.keyHint[0] === '1'){
        $scope.keyHint = ['','','','','','','','','','','','','','','','']
      }
      else {
          $scope.keyHint = ['1','2','3','4','Q','W','E','R','A','S','D','F','Z','X','C','V']
      }
          
  };
    
    $scope.padplay = function(pad){
        if (event.shiftKey){
            allNotes[pad].loop();
        }
        else{
            allNotes[pad].play();
        }
    };
    
 
  
});

musicApp.controller('keyboardController', function($scope, allNotes) {
    
    window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 49: // 1
        if (event.shiftKey){
            allNotes.pad13.loop();
        }
        else{
            allNotes.pad13.play();
        }
        break;
    case 50: // 2
        if (event.shiftKey){
            allNotes.pad14.loop();
        }
        else{
            allNotes.pad14.play();
        }
        break;
    case 51: // 3
        if (event.shiftKey){
            allNotes.pad15.loop();
        }
        else{
            allNotes.pad15.play();
        }
        break;
    case 52: // 4
        if (event.shiftKey){
            allNotes.pad16.loop();
        }
        else{
            allNotes.pad16.play();
        }
        break;
    case 81: // q
        if (event.shiftKey){
            allNotes.pad9.loop();
        }
        else{
            allNotes.pad9.play();
        }
        break;
    case 87: // w
        if (event.shiftKey){
            allNotes.pad10.loop();
        }
        else{
            allNotes.pad10.play();
        }
        break;
    case 69: // e
        if (event.shiftKey){
            allNotes.pad11.loop();
        }
        else{
            allNotes.pad11.play();
        }
        break;
    case 82: // r
        if (event.shiftKey){
            allNotes.pad12.loop();
        }
        else{
            allNotes.pad12.play();
        }
        break;
    case 65: // a
        if (event.shiftKey){
            allNotes.pad5.loop();
        }
        else{
            allNotes.pad5.play();
        }
        break;
    case 83: // s
        if (event.shiftKey){
            allNotes.pad6.loop();
        }
        else{
            allNotes.pad6.play();
        }
        break;
    case 68: // d
        if (event.shiftKey){
            allNotes.pad7.loop();
        }
        else{
            allNotes.pad7.play();
        }
        break;
    case 70: // f
        if (event.shiftKey){
            allNotes.pad8.loop();
        }
        else{
            allNotes.pad8.play();
        }
        break;
    case 90: // z
        if (event.shiftKey){
            allNotes.pad1.loop();
        }
        else{
            allNotes.pad1.play();
        }
        break;
    case 88: // x
        if (event.shiftKey){
            allNotes.pad2.loop();
        }
        else{
            allNotes.pad2.play();
        }
        break;
    case 67: // c
        if (event.shiftKey){
            allNotes.pad3.loop();
        }
        else{
            allNotes.pad3.play();
        }
        break;
    case 86: // v
        if (event.shiftKey){
            allNotes.pad4.loop();
        }
        else{
            allNotes.pad4.play();
        }
        break;      

  }
}, false);
    
});
