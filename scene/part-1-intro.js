function introPart1(game_state, part_state, g_signs) {
    if (THE_PLANET !== 1) {
        elevatorInOneStep();
        deleteStartLetters(g_signs, ERASE_START_MESSAGE_TIME);
        game_state = GAME_2_PLAY;
        part_state = PART_PLAY_20_NORMAL;
        return [game_state, part_state, g_signs];
    }

    if (part_state === PART_INTRO_10_LANDING) {
        part_state = landingIntro();
    } else if (part_state === PART_INTRO_11_AFTER_LANDING) {
        afterLandingIntro();
        part_state = PART_INTRO_12_ELEVATOR;
    } else if (part_state === PART_INTRO_12_ELEVATOR) {
        part_state = elevatorInto();
    } else if (part_state === PART_INTRO_13_AFTER_ELEVATOR) {
        deleteStartLetters(g_signs, ERASE_START_MESSAGE_TIME);
        afterElevatorIntro();
        game_state = GAME_2_PLAY;
        part_state = PART_PLAY_20_NORMAL;
    } else {
        dbg_print('introPart1() unknown part_state', part_state);
    }
    return [game_state, part_state, g_signs];
}

function landingIntro() {
    const part_state = animateLanding();
    return part_state;
}

function afterLandingIntro() {
    initElevator();
}

function elevatorInto() {
    const part_state = animateElevator();
    return part_state;
}

function afterElevatorIntro() {
    initPlay();
    const the_landing = document.getElementById(`the-landing`);
    the_landing.style = `display:none`;
    tiltingReset();
}
