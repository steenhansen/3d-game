var speech_recognition;

function loadSpeechBtn() {
    speech_recognition = new SpeechRecognition();
    speech_recognition.continuous = true;
    speech_recognition.lang = "en-US";
    speech_recognition.interimResults = false;
    speech_recognition.maxAlternatives = 1;
    speech_recognition.onresult = speechInputs;
    speech_recognition.onend = speechEnd;
    speech_recognition.onerror = speechError;
    setCssDisplay("#speech-buttons", "block");
    const speech_download = document.querySelector("#speech-download");
    speech_download.onclick = speechStart;
}

function speechError() {
    setCssDisplay("#microphone-ok", "none");
    setCssDisplay("#microphone-not-supported", "none");
    setCssDisplay("#microphone-not-allowed", "inline");
}

function speechStart() {
    speech_recognition.start();
    setCssDisplay("#speech-buttons", "none");
    setCssDisplay("#speech-box", "block");
    action_runGame(NORMAL_GAME_START);
}

function speechEnd() {
    speech_recognition.start();
}

const SPEAK_LEFT = "left";
const SPEAK_LEFT_CAP = "Left";

const SPEAK_RIGHT = "right";
const SPEAK_RIGHT_CAP = "Right";

const SPEAK_REICH = "reich";
const SPEAK_REICH_CAP = "Reich";

const SPEAK_FORWARD = "forward";
const SPEAK_FORWARD_CAP = "Forward";

const SPEAK_FORWARDS = "forwards";
const SPEAK_FORWARDS_CAP = "Forwards";

const SPEAK_BACK = "back";
const SPEAK_BACK_CAP = "Back";

const SPEAK_BACKWARD = "backward";
const SPEAK_BACKWARD_CAP = "Backward";

const SPEAK_BACKWARDS = "backwards";
const SPEAK_BACKWARDS_CAP = "Backwards";

const SPEAK_JUMP = "jump";
const SPEAK_JUMP_CAP = "Jump";

const SPEAK_STOP = "stop";
const SPEAK_STOP_CAP = "Stop";

const SPEAK_SHOOT = "shoot";
const SPEAK_SHOOT_CAP = "Shoot";

const SPEAK_QUIT = "quit";
const SPEAK_QUIT_CAP = "Quit";

const SPEAK_QUICK = "quick";
const SPEAK_QUICK_CAP = "Quick";

const SPEAK_RESTART = "restart";
const SPEAK_RESTART_CAP = "Restart";

const ALLOWED_COMMANDS = [
    SPEAK_LEFT,
    SPEAK_RIGHT,
    SPEAK_FORWARD,
    SPEAK_FORWARDS,
    SPEAK_BACK,
    SPEAK_BACKWARD,
    SPEAK_BACKWARDS,
    SPEAK_JUMP,
    SPEAK_STOP,
    SPEAK_SHOOT,
    SPEAK_QUIT,
    SPEAK_QUICK,
    SPEAK_RESTART
];
const PHRASE_BOOST = 10;
const INVALID_TEXT_COLOR = "red";
const VALID_TEXT_COLOR = "white";

function speechInfo(the_word, word_color) {
    let the_scene = document.getElementById("speech-value");
    the_scene.innerHTML = the_word;
    the_scene.style.color = word_color;
}

function speechInBrowser() {
    const window_speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window_speech) {
        unsupportedMicAttempt("Firefox");
    }
    return window_speech;
}

function unsupportedMicAttempt(failed_browser) {
    console.log(failed_browser, "does not support Web Speech, only Chrome.");
    setCssDisplay("#speech-box", "block");
    setCssDisplay("#microphone-ok", "none");
    setCssDisplay("#microphone-not-supported", "inline");
    setCssDisplay("#microphone-not-allowed", "none");
}

function endingWord(speech_event) {
    const event_results = speech_event.results;
    const speak_len = event_results.length;
    const last_sound = event_results[speak_len - 1];
    const a_sentence = last_sound[0].transcript;
    const lower_words = a_sentence.toLowerCase();
    const word_list = lower_words.split(" ");
    const last_word = word_list[word_list.length - 1];
    const word_no_periods = last_word.replace(/\./g, "");
    return word_no_periods;
}

function speechInputs(speech_event) {
    const the_word = endingWord(speech_event);
    const is_command = ALLOWED_COMMANDS.includes(the_word);
    if (is_command) {
        if (the_word === SPEAK_LEFT) {
            touchW(speech_event);
        } else if (the_word === SPEAK_RIGHT || the_word === SPEAK_REICH) {
            touchE(speech_event);
        } else if (the_word === SPEAK_FORWARD || the_word === SPEAK_FORWARDS) {
            touchN(speech_event);
        } else if (the_word === SPEAK_BACK || the_word === SPEAK_BACKWARD || the_word === SPEAK_BACKWARDS) {
            touchS(speech_event);
        } else if (the_word === SPEAK_JUMP) {
            g_planet = possibleJump(g_planet);
        } else if (the_word === SPEAK_STOP) {
            stopMoving();
        } else if (the_word === SPEAK_SHOOT) {
            g_missile = initMissileData(g_missile, g_player);
        } else if (the_word === SPEAK_QUIT || the_word === SPEAK_QUICK) {
            g_planet.m_game_state = GAME_5_DONE;
        } else if (the_word === SPEAK_RESTART) {
            action_runGame(RESTARTING_GAME);
        }
        speechInfo(the_word, VALID_TEXT_COLOR);
    } else {
        const got_invalid_word = !ALLOWED_COMMANDS.includes(the_word);
        if (got_invalid_word) {
            speechInfo(the_word, INVALID_TEXT_COLOR);
        }
    }
}

function usefulWords() {
    const phraseData = [
        { phrase: SPEAK_LEFT, boost: PHRASE_BOOST },
        { phrase: SPEAK_LEFT_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_RIGHT, boost: PHRASE_BOOST },
        { phrase: SPEAK_RIGHT_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_REICH, boost: PHRASE_BOOST },
        { phrase: SPEAK_REICH_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_FORWARD, boost: PHRASE_BOOST },
        { phrase: SPEAK_FORWARD_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_FORWARDS, boost: PHRASE_BOOST },
        { phrase: SPEAK_FORWARDS_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_BACK, boost: PHRASE_BOOST },
        { phrase: SPEAK_BACK_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_BACKWARD, boost: PHRASE_BOOST },
        { phrase: SPEAK_BACKWARD_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_BACKWARDS, boost: PHRASE_BOOST },
        { phrase: SPEAK_BACKWARDS_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_JUMP, boost: PHRASE_BOOST },
        { phrase: SPEAK_JUMP_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_STOP, boost: PHRASE_BOOST },
        { phrase: SPEAK_STOP_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_SHOOT, boost: PHRASE_BOOST },
        { phrase: SPEAK_SHOOT_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_QUIT, boost: PHRASE_BOOST },
        { phrase: SPEAK_QUIT_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_QUICK, boost: PHRASE_BOOST },
        { phrase: SPEAK_QUICK_CAP, boost: PHRASE_BOOST },

        { phrase: SPEAK_RESTART, boost: PHRASE_BOOST },
        { phrase: SPEAK_RESTART_CAP, boost: PHRASE_BOOST }
    ];
    const phrase_objects = phraseData.map((p) => new SpeechRecognitionPhrase(p.phrase, p.boost));
    return phrase_objects;
}
