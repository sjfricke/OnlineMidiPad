musicApp.service('allNotes', function (Note) {

    // create notes
    //Current defaults hardcoded here until server side is made

    //new Note(pad id, keyCode, action type, song path);

    var pad1 = new Note('pad1', 49, 'trigger', './MusicSections/popCulture/aerodynamic.mp3');
    var pad2 = new Note('pad2', 50, 'gate', './MusicSections/popCulture/aroundTheWorld.mp3');
    var pad3 = new Note('pad3', 51, 'toggle', './MusicSections/popCulture/babyOneMoreTime.mp3');
    var pad4 = new Note('pad4', 52, 'repeat', './MusicSections/popCulture/bigChordArranged.mp3');
    var pad5 = new Note('pad5', 53, 'trigger', './MusicSections/popCulture/boysAndGirls.mp3');
    var pad6 = new Note('pad6', 54, 'trigger', './MusicSections/popCulture/capsuleStrings.mp3');
    var pad7 = new Note('pad7', 55, 'trigger', './MusicSections/popCulture/crawling.mp3');
    var pad8 = new Note('pad8', 56, 'trigger', './MusicSections/popCulture/dare.mp3');
    var pad9 = new Note('pad9', 57, 'trigger', './MusicSections/popCulture/drumRiff.mp3');
    var pad0 = new Note('pad0', 48, 'trigger', './MusicSections/popCulture/heavyCross.mp3');
    var padDash = new Note('padDash', 173, 'trigger', './MusicSections/popCulture/ho.mp3');
    var padEquals = new Note('padEquals', 61, 'trigger', './MusicSections/popCulture/hungOut.mp3');
    var padQ = new Note('padQ', 81, 'trigger', './MusicSections/popCulture/iDecided.mp3');
    var padW = new Note('padW', 87, 'trigger', './MusicSections/popCulture/meAndYou1.mp3');
    var padE = new Note('padE', 69, 'trigger', './MusicSections/popCulture/meAndYou2.mp3');
    var padR = new Note('padR', 82, 'trigger', './MusicSections/popCulture/meAndYou3.mp3');
    var padT = new Note('padT', 84, 'trigger', './MusicSections/popCulture/ohw.mp3');
    var padY = new Note('padY', 89, 'trigger', './MusicSections/popCulture/ohYeah.mp3');
    var padU = new Note('padU', 85, 'trigger', './MusicSections/popCulture/pianoStacatto.mp3');
    var padI = new Note('padI', 73, 'trigger', './MusicSections/popCulture/popCultureBeat.mp3');
    var padO = new Note('padO', 79, 'trigger', './MusicSections/popCulture/snareBeat.mp3');
    var padP = new Note('padP', 80, 'trigger', './MusicSections/popCulture/snareBreak.mp3');
    var padA = new Note('padA', 65, 'trigger', './MusicSections/popCulture/takeItOff.mp3');
    var padS = new Note('padS', 83, 'trigger', './MusicSections/popCulture/vivaLaVida.mp3');
    var padD = new Note('padD', 68, 'trigger', './MusicSections/popCulture/voca.mp3');
    var padF = new Note('padF', 70, 'trigger', './MusicSections/popCulture/whatYouWaitingFor.mp3');
    var padG = new Note('padG', 71, 'trigger', './MusicSections/popCulture/wow1.mp3');
    var padH = new Note('padH', 72, 'trigger', './MusicSections/popCulture/wow3.mp3');
    var padJ = new Note('padJ', 74, 'trigger', './MusicSections/popCulture/wow4.mp3');
    var padK = new Note('padK', 75, 'trigger', './MusicSections/popCulture/wow6.mp3');
    var padL = new Note('padL', 76, 'trigger', './MusicSections/popCulture/wowEnd.mp3');
    var padZ = new Note('padZ', 90, 'trigger', './MusicSections/popCulture/wowplus1.mp3');
    var padX = new Note('padX', 88, 'trigger', './MusicSections/23.mp3');
    var padC = new Note('padC', 67, 'trigger', './MusicSections/Pinball.mp3');
    var padV = new Note('padV', 86, 'trigger', './MusicSections/Mixdrop.mp3');
    var padB = new Note('padB', 66, 'trigger', './MusicSections/Cymbol.mp3');
    var padN = new Note('padN', 78, 'trigger', './MusicSections/Kick Drum.mp3');
    var padM = new Note('padM', 77, 'trigger', './MusicSections/Snare Drum.mp3');

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
        padA: padA,
        padS: padS,
        padD: padD,
        padF: padF,
        padG: padG,
        padH: padH,
        padJ: padJ,
        padK: padK,
        padL: padL,
        padZ: padZ,
        padX: padX,
        padC: padC,
        padV: padV,
        padB: padB,
        padN: padN,
        padM: padM
    };
});
