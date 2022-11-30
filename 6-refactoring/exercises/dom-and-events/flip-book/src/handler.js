 import { reverseAndUpper } from './util';

export const reverseAndUpperHandler = event => {
    const input = event.target.value;

    const reversedUppercase = reverseAndUpper(input);
    //render result for use 
    document.getElementById('output').innerHTML = reversedUppercase;

};
