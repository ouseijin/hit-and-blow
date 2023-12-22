export const makeAnswer = () => {
  const fourDigitNumber: string[] = [];

  for (let i = 0; fourDigitNumber.length < 4; i++) {
    const number = String(Math.floor(Math.random() * 10));

    if (!fourDigitNumber.includes(number)) {
      fourDigitNumber.push(number);
    }
  }
  return fourDigitNumber;
};
