
/*
Note class
Contains all playback and setting of each seperate note
*/
musicApp.factory('Note', function(){

    //Constructer
    var Note = function(pad, key, action, music, name){
        this.pad = pad;
        this.key = key;
        this.action = action;
        this.music = music;
        this.song = new Audio(this.music);
        this.name = name;
    };
    
     //play from controller
    Note.prototype.play = function(){
        switch(this.action){
            case "trigger":
                playTrigger(this.song, this.pad);
                break;
            case "gate":
                playGate(this.song, this.pad, this.key);
                break;
            case "repeat":
                playRepeat(this.song, this.pad);
                break;
            case "toggle":
                playToggle(this.song, this.pad);
                break;
            default:
                console.log("no action types were ran");
        }
    };
    
    //takes in pad to update CSS
    var restart = function(song, pad){
        song.pause();
        song.load();
        document.getElementById(pad).style.backgroundColor = "";
    }

    //playing of trigger type
    var playTrigger = function(song, pad){
        song.load();
        song.play();
        //turn off color when song ends
        song.onended = function() {
            document.getElementById(pad).style.backgroundColor = "";
        }
        document.getElementById(pad).style.backgroundColor = "blue";
    }
    
    //playing of gate type
    var playGate = function(song, pad, key){
        song.play();   
        document.getElementById(pad).style.backgroundColor = "green";
        //waits for pad's keyCode to be let off
        window.addEventListener('keyup', function(event) {
            if (event.keyCode == key){
                restart(song, pad);
            }
        });
    }
    
    //playing of repeat type
    var playRepeat = function(song, pad){
        if (song.loop === false){
            restart(song, pad);
            song.loop = true;
            song.play();
            document.getElementById(pad).style.backgroundColor = "purple";
        }
        else{
            song.loop = false;
            restart(song, pad);
        }
    }
    
    //playing of toggle type
    var playToggle = function(song, pad){
        //checks for song at start or end
        if (song.currentTime === 0 || song.currentTime === song.duration){
            //turn on music
            song.play();
            //turn off color when song ends
            song.onended = function() {
                document.getElementById(pad).style.backgroundColor = "";
            }
            document.getElementById(pad).style.backgroundColor = "red";
        }
        //someone clicked to stop track
        else {
            restart(song, pad);
        }
    }
    
   //setting music in edit mode
   Note.prototype.setMusic = function(url, name){
        this.music = './MusicSections/' + url + '.mp3';
        this.song = new Audio(this.music);
        this.name = name;
    };

    //to grab part of URL to show what song is on pad
    Note.prototype.getMusic = function(){
        //substring of the url that is the song name
        return this.name;
    };

    //setting action type
    Note.prototype.setAction = function(type){
        this.action = type;
    }
    
    Note.prototype.getAction = function(){
        return this.action;
    }
    
    //restarts song when called to stop
    Note.prototype.stop = function(){
        restart(this.song, this.pad);
    };

    //sets volume
    //HTML audio 0 to 1 is 0% to 100%
    Note.prototype.setVolume = function(vol){
    this.song.volume = vol;
    };

    return Note;
});
