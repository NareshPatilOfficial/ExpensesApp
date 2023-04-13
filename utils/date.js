export const formattedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export const getDateMinusDays = (date, days) => {
    return new Date(date.getFullYear(),date.getMonth(),date.getDate() - days);
}