musicApp.service('allNotes', function (Note) {

    // create notes
    //Current defaults hardcoded here until server side is made

    //new Note(pad id, keyCode, action type, song path, song name);

    var pad1 = new Note('pad1', 49, 'trigger', './MusicSections/Pop Culture/aerodynamic.mp3', 'Aerodynamic');
    var pad2 = new Note('pad2', 50, 'trigger', './MusicSections/Pop Culture/aroundTheWorld.mp3', 'Around The World');
    var pad3 = new Note('pad3', 51, 'trigger', './MusicSections/Pop Culture/babyOneMoreTime.mp3', 'Baby One More Time');
    var pad4 = new Note('pad4', 52, 'trigger', './MusicSections/Pop Culture/bigChordArranged.mp3', 'Big Chord Arranged');
    var pad5 = new Note('pad5', 53, 'trigger', './MusicSections/Pop Culture/boysAndGirls.mp3', 'Boys and Girls');
    var pad6 = new Note('pad6', 54, 'trigger', './MusicSections/Pop Culture/capsuleStrings.mp3', 'Capsule Strings');
    var pad7 = new Note('pad7', 55, 'trigger', './MusicSections/Pop Culture/crawling.mp3', 'Crawling');
    var pad8 = new Note('pad8', 56, 'trigger', './MusicSections/Pop Culture/dare.mp3', 'Dare');
    var pad9 = new Note('pad9', 57, 'trigger', './MusicSections/Pop Culture/drumRiff.mp3', 'Drum Riff');
    var pad0 = new Note('pad0', 48, 'trigger', './MusicSections/Pop Culture/heavyCross.mp3', 'Heavy Cross');
    var padDash = new Note('padDash', 189, 'trigger', './MusicSections/Pop Culture/ho.mp3', 'Ho');
    var padEquals = new Note('padEquals', 187, 'trigger', './MusicSections/Pop Culture/hungOut.mp3', 'Hung Out');
    var padQ = new Note('padQ', 81, 'trigger', './MusicSections/Pop Culture/iDecided.mp3', 'I Decided');
    var padW = new Note('padW', 87, 'trigger', './MusicSections/Pop Culture/meAndYou1.mp3', 'Me And You 1');
    var padE = new Note('padE', 69, 'trigger', './MusicSections/Pop Culture/meAndYou2.mp3', 'Me And You 2');
    var padR = new Note('padR', 82, 'trigger', './MusicSections/Pop Culture/meAndYou3.mp3', 'Me And You 3');
    var padT = new Note('padT', 84, 'trigger', './MusicSections/Pop Culture/ohw.mp3', 'Ohw');
    var padY = new Note('padY', 89, 'trigger', './MusicSections/Pop Culture/ohYeah.mp3', 'Oh Yeah');
    var padU = new Note('padU', 85, 'trigger', './MusicSections/Pop Culture/pianoStacatto.mp3', 'Piano Stacatto');
    var padI = new Note('padI', 73, 'trigger', './MusicSections/Pop Culture/PopCultureBeat.mp3', 'Pop Culture Beat');
    var padO = new Note('padO', 79, 'trigger', './MusicSections/Pop Culture/snareBeat.mp3', 'Snare Beat');
    var padP = new Note('padP', 80, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');
    var padLeftBracket = new Note('padLeftBracket', 219, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');
    var padRightBracket = new Note('padRightBracket', 221, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');
    var padBackslash = new Note('padBackslash', 220, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');
    var padA = new Note('padA', 65, 'trigger', './MusicSections/Pop Culture/takeItOff.mp3', 'Take It Off');
    var padS = new Note('padS', 83, 'trigger', './MusicSections/Pop Culture/vivaLaVida.mp3', 'Viva La Vida');
    var padD = new Note('padD', 68, 'trigger', './MusicSections/Pop Culture/voca.mp3', 'Voca');
    var padF = new Note('padF', 70, 'trigger', './MusicSections/Pop Culture/whatYouWaitingFor.mp3', 'What You Waiting For');
    var padG = new Note('padG', 71, 'trigger', './MusicSections/Pop Culture/wow1.mp3', 'Wow 1');
    var padH = new Note('padH', 72, 'trigger', './MusicSections/Pop Culture/wow3.mp3', 'Wow 3');
    var padJ = new Note('padJ', 74, 'trigger', './MusicSections/Pop Culture/wow4.mp3', 'Wow 4');
    var padK = new Note('padK', 75, 'trigger', './MusicSections/Pop Culture/wow6.mp3', 'Wow 6');
    var padL = new Note('padL', 76, 'trigger', './MusicSections/Pop Culture/wowEnd.mp3', 'Wow End');
    var padSemicolon = new Note('padSemicolon', 186, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');
    var padZ = new Note('padZ', 90, 'trigger', './MusicSections/Pop Culture/wowplus1.mp3', 'Wow Plus 1');
    var padX = new Note('padX', 88, 'trigger', './MusicSections/Extra/23.mp3', '23');
    var padC = new Note('padC', 67, 'trigger', './MusicSections/Extra/Pinball.mp3', 'Pinball');
    var padV = new Note('padV', 86, 'trigger', './MusicSections/Extra/Mixdrop.mp3', 'Mixdrop');
    var padB = new Note('padB', 66, 'trigger', './MusicSections/Drum Kit/Cymbol.mp3', 'Cymbol');
    var padN = new Note('padN', 78, 'trigger', './MusicSections/Drum Kit/Kick Drum.mp3', 'Kick Drum');
    var padM = new Note('padM', 77, 'trigger', './MusicSections/Drum Kit/Snare Drum.mp3', 'Snare Drum');
    var padComma = new Note('padComma', 188, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');
    var padPeriod = new Note('padPeriod', 190, 'trigger', './MusicSections/Pop Culture/snareBreak.mp3', 'Snare Break');

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
        pad0: pad0,
        padDash: padDash,
        padEquals: padEquals,
        padQ: padQ,
        padW: padW,
        padE: padE,
        padR: padR,
        padT: padT,
        padY: padY,
        padU: padU,
        padI: padI,
        padO: padO,
        padP: padP,
        padLeftBracket: padLeftBracket,
        padRightBracket: padRightBracket,
        padBackslash: padBackslash,
        padA: padA,
        padS: padS,
        padD: padD,
        padF: padF,
        padG: padG,
        padH: padH,
        padJ: padJ,
        padK: padK,
        padL: padL,
        padSemicolon: padSemicolon,
        padZ: padZ,
        padX: padX,
        padC: padC,
        padV: padV,
        padB: padB,
        padN: padN,
        padM: padM,
        padComma: padComma,
        padPeriod: padPeriod
    };
});
