
const generateRandomDate = (): Date => {
    const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const currentYear = new Date().getFullYear();
    const randomMonth = getRandomInt(1, 12);

    const daysInMonth = new Date(currentYear, randomMonth, 0).getDate();
    const randomDay = getRandomInt(1, daysInMonth);

    return new Date(currentYear, randomMonth, randomDay);
}

export default generateRandomDate;