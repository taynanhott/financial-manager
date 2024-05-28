
const generateRandomDate = (): Date => {
    const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const randomDay = getRandomInt(1, daysInMonth);

    return new Date(currentYear, currentMonth, randomDay);
}

export default generateRandomDate;