/*
Note class
Contains all playback and setting of each seperate note
*/
musicApp.factory('Note', function(){

    //Constructer
    var Note = function(pad, key, music){
        this.pad = pad;
        this.key = key;
        this.music = music;
        this.song = new Audio(this.music);
    };
    
   
   Note.prototype.setMusic = function(url){
        this.music = url;
    };
    
    //play from controller
    Note.prototype.play = function(){
        play(this.song, this.pad, false, false);
    };
    
    //takes in pad to update CSS
    var restart = function(song, pad){
        song.pause();
        song.load();
        document.getElementById(pad).style.backgroundColor = "";
    }
    
    //plays from within object itelf
    var play = function(song, pad, loop, spam){
        if (song.currentTime === 0 || song.currentTime === song.duration || spam){
            if(!loop){
                //takes in loop as true if shift is clicked
                song.loop = false;
            }
            song.play();
            song.onended = function() {
                document.getElementById(pad).style.backgroundColor = "";
            }
            document.getElementById(pad).style.backgroundColor = colorSelection;
        }
        else {
            song.loop = false;
            restart(song, pad);
            
        }
    }
    
    Note.prototype.loop = function(){
        
        if(this.song.loop === false){
            restart(this.song, this.pad);
            this.song.loop = true;
            play(this.song, this.pad, true, false);
        }
        else{
            this.song.loop = false;
            restart(this.song, this.pad);
        }
        
    
    };
    
    Note.prototype.spam = function(){
        this.song.load();
        play(this.song, this.pad, false, true);
    };
    
    Note.prototype.setVolume = function(vol){
    this.song.volume = vol;
    };
    
    return Note;
});