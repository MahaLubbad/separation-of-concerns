/*
 * @param {Number}: xValue
 * @param {Number}: yvalue 
 * @returns {string} 
 */
export const typeCaster = (stringToCast , intendedType ) => {
    let newValue;
    if (intendedType === 'string') {
      newValue = String(stringToCast);
    } else if (intendedType === 'number') {
      newValue = Number(stringToCast);
    } else if (intendedType === 'boolean') {
      newValue = Boolean(stringToCast);
    } else {
      newValue = undefined;
    }
    return newValue ;
};
//console.log('newValue:', newValue);