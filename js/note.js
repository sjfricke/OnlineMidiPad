
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
    
   //setting music in edit mode
   Note.prototype.setMusic = function(url){
        this.music = './MusicSections/' + url + '.mp3';
        this.song = new Audio(this.music);
    };

    //to grab part of URL to show what song is on pad
    Note.prototype.getMusic = function(){
        //substring of the url that is the song name
        return this.music.substring(16, this.music.length - 4);
    };

    //play from controller
    Note.prototype.play = function(){
        play(this.song, this.pad, false, false);
    };

    //restarts song when called to stop
    Note.prototype.stop = function(){
        restart(this.song, this.pad);
    };

    //takes in pad to update CSS
    var restart = function(song, pad){
        song.pause();
        song.load();
        document.getElementById(pad).style.backgroundColor = "";
    }

    //plays from within object itelf
    var play = function(song, pad, loop, spam){
        //if song is at beginning, end, or spam mode
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
        //someone clicked to stop track
        else {
            song.loop = false;
            restart(song, pad);

        }
    }

    //calls for toggling loop attribute
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

    //reloads songs and allows for constant restarting of track
    Note.prototype.spam = function(){
        this.song.load();
        play(this.song, this.pad, false, true);
    };

    //sets volume
    //HTML audio 0 to 1 is 0% to 100%
    Note.prototype.setVolume = function(vol){
    this.song.volume = vol;
    };

    return Note;
});
