const daysInMonth = (month,  year) => {
    return new Date(year, month + 1, 0).getDate();
};

const getDaysInCurrentMonth = () => {
    const now = new Date();
    const currentYear = now.getYear();
    const currentMonth = now.getMonth();

    return daysInMonth(currentMonth, currentYear);
};

export { daysInMonth, getDaysInCurrentMonth };
