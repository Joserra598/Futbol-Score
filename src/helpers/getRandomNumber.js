export const getRandomNumber = (maxValue = 1) => Math.round(Math.random() * maxValue);

export const getArrayOfRandomNumbers = (cant = 5, maxValue) => {
	const randomNumbers = [];
	for (let i = 0; i < cant; i++) randomNumbers.push(getRandomNumber(maxValue));
	return randomNumbers;
};
