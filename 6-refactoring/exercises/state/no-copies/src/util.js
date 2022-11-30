import { data} from './data.js'

export const saveNoCopies = ( userInput) => {
   const  alreadySaved = data.noCopies.includes(userInput);
  if (!alreadySaved) {
   return data.noCopies.push(userInput);
   
  }
 
};
