import { capSwap } from './util.js';

export const capSwapHandler = (capSwapped)  => {
  let userInput = null;
    while (userInput === null) {
      userInput = prompt('enter a string to cap-swap');
    }
 capSwapped = capSwap(userInput);

alert(capSwapped);
};
