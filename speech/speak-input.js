var recognition;

function loadSpeechBtn() {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = speechInputs;
    recognition.onend = speechEnd;

    setCssDisplay("#speech-buttons", "block");
    const speech_download = document.querySelector("#speech-download");
    speech_download.onclick = () => speechDownload22();
}

//  file:///c%3A/Users/16043/Documents/GitHub/old/area-1-jump/index.html?speak-input=talk
//  https://steenhansen.github.io/3d-game/area-1-jump/index.html?speak-input=talk
function speechDownload22() {
    recognition.start();
    console.log("Ready to receive a color command.");
    setCssDisplay("#speech-buttons", "none");
    setCssDisplay("#speech-box", "block");
    action_runGame(NORMAL_GAME_START);
}

function speechEnd() {
    recognition.start();
}

//  https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

//   index.html?speak-input=talk

//  file:///c%3A/Users/16043/Documents/GitHub/old/area-1-jump/index.html?env-type=debug&scroll-quality=course&graphics-style=simple&display-fps=show&speak-input=talk

//  file:///c%3A/Users/16043/Documents/GitHub/old/area-1-jump/index.html?speak-input=talk

const SPEAK_LEFT = "left";
const SPEAK_LEFT_CAP = "Left";

const SPEAK_RIGHT = "right";
const SPEAK_RIGHT_CAP = "Right";

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

const USA_ENGLISH = "en-US";
const PROCESS_LOCAL = true;
const CONTINUOUS_INTERPRET = true;
const PHRASE_BOOST = 10;

const INVALID_TEXT_COLOR = "red";
const VALID_TEXT_COLOR = "white";

const SPEECH_US_LOCAL = { langs: [USA_ENGLISH], processLocally: PROCESS_LOCAL };

const SPEECH_INSTALLED = "speech-installed";
const SPEECH_INSTAL_TIMEOUT = "speech-not-installed";
const SPEECH_TIMEOUT = 4000;

// https://advancedweb.hu/how-to-add-timeout-to-a-promise-in-javascript/
const promiseTimeout = (prom, time) => Promise.race([prom, new Promise((_r, rej) => setTimeout(rej, time))]);

function speechInfo(the_word, word_color) {
    let the_scene = document.getElementById("speech-value");
    the_scene.innerHTML = the_word;
    the_scene.style.color = word_color;
}

// https://webaudio.github.io/web-speech-api/#examples-recognition

function speechInBrowser() {
    const speech_recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!speech_recognition) {
        unsupportedMicAttempt("Firefox");
    }
    return speech_recognition;
}

function loadSpeechBtnOLD() {
    setCssDisplay("#speech-buttons", "block");
    const speech_download = document.querySelector("#speech-download");
    speech_download.onclick = () => speechDownload();
}

//  https://steenhansen.github.io/3d-game/area-1-jump/index.html?speak-input=talk
function speechDownload() {
    let speech_recognition = speechInBrowser();
    speech_recognition
        .available(SPEECH_US_LOCAL) // Opera crashes here
        .then((download_result) => {
            console.log("download_result", download_result, speech_recognition);
            if (download_result === "Xunavailable") {
                unsupportedMicAttempt("Edge2");
                g_p_speak_input = P_GARBLED;
                action_runGame(NORMAL_GAME_START);
            } else if (download_result === "available") {
                // unsupportedMicAttempt("unknown browser");
                // g_p_speak_input = P_GARBLED;
                console.log("alerady installed in other tab??");
                speechInstalled(true); // speach already installed and running...
            } else {
                const install_result = waitForSpeechInstall(speech_recognition);
                if (install_result === SPEECH_INSTAL_TIMEOUT) {
                    setCssDisplay("#speech-buttons", "none");
                    unsupportedMicAttempt("Brave");
                    action_runGame(NORMAL_GAME_START);
                }
            }
        })
        .catch((err) => console.log(err));
}

async function waitForSpeechInstall(speech_recognition) {
    let result = await promiseTimeout(tryInstallSpeech(speech_recognition), SPEECH_TIMEOUT)
        .then((_res) => SPEECH_INSTALLED)
        .catch((_err) => SPEECH_INSTAL_TIMEOUT);
    return result;
}

const tryInstallSpeech = async (speech_recognition) => {
    await speech_recognition
        .install(SPEECH_US_LOCAL) /* must be done in an event */
        .then((install_result) => speechInstalled(install_result));
};

function speechInstalled(install_result) {
    console.log("speechInstalled", install_result);
    if (install_result) {
        const speech_download = document.querySelector("#speech-download");
        speech_download.disabled = true;
        setCssDisplay("#speech-allow", "block");
        const speach_allow = document.querySelector("#speech-allow");
        speach_allow.onclick = () => speechAllowed();
    } else {
        unsupportedMicAttempt("unknown browser");
        g_p_speak_input = P_GARBLED;
    }
}

function speechAllowed() {
    setCssDisplay("#speech-buttons", "none");
    const speech_recognition = speechInBrowser();
    speech_recognition
        .available(SPEECH_US_LOCAL) /* */
        .then((allow_result) => speechStart(allow_result));
}

function unsupportedMicAttempt(failed_browser) {
    console.log(failed_browser, "does not support Web Speech, only Chrome.");
    setCssDisplay("#speech-box", "block");
    setCssDisplay("#microphone-ok", "none");
    setCssDisplay("#microphone-not-supported", "inline");
    setCssDisplay("#microphone-not-allowed", "none");
}

function speechStart(allow_result) {
    if (allow_result === "unavailable") {
        unsupportedMicAttempt("unknown browser");
        g_p_speak_input = P_GARBLED;
    } else if (allow_result === "available") {
        const speech_download = document.querySelector("#speech-allow");
        speech_download.disabled = true;
        let speech_recog = makeRecognition();
        speech_recog.start();
        speech_recog.onerror = (event) => didNotGiveAuthorization(event);
        speech_recog.onresult = (event) => speechInputs(event);
        setCssDisplay("#speech-box", "block");
        action_runGame(NORMAL_GAME_START);
    } else {
        unsupportedMicAttempt("unknown browser");
        g_p_speak_input = P_GARBLED;
    }
}

function didNotGiveAuthorization(_event) {
    setCssDisplay("#microphone-ok", "none");
    setCssDisplay("#microphone-not-allowed", "inline");
}

function makeRecognition() {
    let speech_recog = new SpeechRecognition();
    speech_recog.processLocally = PROCESS_LOCAL;
    speech_recog.continuous = CONTINUOUS_INTERPRET;
    speech_recog.lang = USA_ENGLISH;
    speech_recog.interimResults = true;
    speech_recog.maxAlternatives = 1;
    speech_recog.phrases = usefulWords();
    return speech_recog;
}

function endingWord(speech_event) {
    const event_results = speech_event.results;
    const speak_len = event_results.length;
    const last_sound = event_results[speak_len - 1];
    const a_sentence = last_sound[0].transcript;
    const lower_words = a_sentence.toLowerCase();
    const word_list = lower_words.split(" ");
    const last_word = word_list[word_list.length - 1];
    return last_word;
}

// let f_last_speech_index = 0;

// function firstTryGood(speech_event, the_word) {
//     const event_results = speech_event.results;
//     const speak_index = event_results.length;
//     const first_try = f_last_speech_index !== speak_index;
//     const first_attempt_good = ALLOWED_COMMANDS.includes(the_word) && first_try;
//     return first_attempt_good;
// }

function speechInputs(speech_event) {
    const the_word = endingWord(speech_event);
    console.log("the_word", the_word);
    //    const first_attempt_good = firstTryGood(speech_event, the_word);
    const is_command = ALLOWED_COMMANDS.includes(the_word);
    // f_last_speech_index++;
    if (is_command) {
        if (the_word === SPEAK_LEFT) {
            touchW(speech_event);
        } else if (the_word === SPEAK_RIGHT) {
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
