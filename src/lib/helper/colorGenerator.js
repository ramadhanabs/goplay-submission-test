/* eslint-disable import/prefer-default-export */

/* Generate random any random color in hex format */

/* Generating 512 color in array */
export const arrayOfColor = (count) => {
  const tempArr = [];
  let i = 0;

  const colorGenerator = () => {
    const maxVal = 0xffffff;

    /* Get random number */
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  };

  while (i < count) {
    tempArr.push(colorGenerator());
    i += 1;
  }

  return tempArr;
};

/* Transform array of 512 color into obj with desired chunk size */
export const arrayToCollection = (array, chunkCount) => {
  const obj = {};
  let anchor = 1;
  for (let i = 0; i < array.length; i += chunkCount) {
    const chunk = array.slice(i, i + chunkCount);
    obj[`collection_${anchor}`] = chunk;
    anchor += 1;
  }
  return obj;
};

export const generateArrayofColor = () => {
  const colorList = arrayOfColor(512);
  const chunkCount = 64;

  return arrayToCollection(colorList, chunkCount);
};
