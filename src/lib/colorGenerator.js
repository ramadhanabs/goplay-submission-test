/* eslint-disable import/prefer-default-export */
export const generateArrayofColor = () => {
  const colorGenerator = () => {
    const maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  };

  const arrayOfColor = () => {
    const tempArr = [];
    for (let i = 0; i < 512; i++) {
      tempArr.push(colorGenerator());
    }

    return tempArr;
  };

  const colorCollectionGenerator = (array, chunkCount) => {
    const obj = {};
    let anchor = 1;
    for (let i = 0; i < array.length; i += chunkCount) {
      const chunk = array.slice(i, i + chunkCount);
      obj[`collection_${anchor}`] = chunk;
      anchor++;
    }
    return obj;
  };

  const colorList = arrayOfColor();
  const chunkCount = 64;

  return colorCollectionGenerator(colorList, chunkCount);
};
