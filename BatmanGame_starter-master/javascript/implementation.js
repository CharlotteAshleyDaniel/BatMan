/*
    @function moveBgLeft
    @param {number} x
    @returns {number}
    @desc return the input param minus 10 (or some other value that you like)
*/


function moveBgLeft( x ) {
    if ( x < 10 ) {
        return 0;
    }
    if ( x > 10 ) {
        return 10;
    }
    
    const newXValue = x - 10;
    
    return newXValue;
}


/*
    @function keyUpHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to false
*/
function keyUpHandler( keyCode = 0, upArrowPressed = false, rightArrowPressed = false, downArrowPressed = false, leftArrowPressed = false, shiftKeyPressed = false ) {
    // you need a bunch of if statements here...
    if (keyUpHandler ===38) {
        upArrowPressed = false;
    }

    if (keyUpHandler ===39) {
        rightArrowPressed = false;
    } 

    if (keyUpHandler ===40) {
        downArrowPressed = false;
    }

    if (keyUpHandler ===37) {
        leftArrowPressed = false;

    }

    if (keyUpHandler ===16) {
        shiftKeyPressed = false;
    }

    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    };
}

/*
    @function keyDownHandler
    @param {number} keyCode
    @param {boolean} upArrowPressed
    @param {boolean} rightArrowPressed
    @param {boolean} downArrowPressed
    @param {boolean} leftArrowPressed
    @param {boolean} shiftKeyPressed 
    @returns { object }
    @desc returns all the above params but flips a switch setting val to true 
*/
function keyUpHandler( keyCode = 0, upArrowPressed = false, rightArrowPressed = false, downArrowPressed = false, leftArrowPressed = false, shiftKeyPressed = false ) {
    // you need a bunch of if statements here...
    if (keyUpHandler ===38) {
        upArrowPressed = true;
    }

    if (keyUpHandler ===39) {
        rightArrowPressed = true;
    } 

    if (keyUpHandler ===40) {
        downArrowPressed = true;
    }

    if (keyUpHandler ===37) {
        leftArrowPressed = true;

    }

    if (keyUpHandler ===16) {
        shiftKeyPressed = true;
    }

    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    };
}

/*
    @function shouldJumpNow
    @param {number} y
    @returns {number}
    @desc subtracts a value from y to simulate jump
*/
function shouldJumpNow(( y ) {
    if ( y < 10 ) {
        return 0;
    }
    if ( y > 10 ) {
        return 10;
    }
    
    const newXValue = y - 10;
    
    return newXValue;
}
