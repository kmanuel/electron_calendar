const daysInMonth = (month,  year) => {
    return new Date(year, month + 1, 0).getDate();
};

const getDaysInCurrentMonth = () => {
    const now = new Date();
    const currentYear = now.getYear();
    const currentMonth = now.getMonth();

    return daysInMonth(currentMonth, currentYear);
};

const nameForMonth = (month) => {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString('en-us', {month: 'long'});
};

const getWeekdayOffsetForMonth = (month, year) => {
    const date = new Date();
    date.setMonth(month);
    date.setYear(year);
    date.setDate(0);

    return date.getDay();
};

export { daysInMonth, getDaysInCurrentMonth, nameForMonth, getWeekdayOffsetForMonth };
