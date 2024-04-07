const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const generateRandomString = (length) => {
    let result = '';
    const characters = '0-_=+]}[{\'";:/?.>,<!@#$%^&*()~';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const randomRGB = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

export { roll, generateRandomString, randomRGB }