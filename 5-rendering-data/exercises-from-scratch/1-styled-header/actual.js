'use strict';

const actual = (level, text, styling)  => {

    const headingLevel = "h" + level;
    const hEl = document.createElement(headingLevel);
    hEl.className = styling;
    hEl.innerText = text;

    return hEl;

}
